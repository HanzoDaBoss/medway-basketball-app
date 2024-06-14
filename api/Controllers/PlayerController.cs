using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Player;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/players")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public PlayerController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var players = await _context.Players.ToListAsync();

            var playerDto = players.Select(p => p.ToPlayerDto());

            return Ok(playerDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var player = await _context.Players.FindAsync(id);

            if (player == null)
            {
                return NotFound();
            }

            return Ok(player.ToPlayerDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreatePlayerRequestDto playerDto)
        {
            var playerModel = playerDto.ToPlayerFromCreateDto();
            await _context.Players.AddAsync(playerModel);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = playerModel.Id }, playerModel.ToPlayerDto());
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult Update([FromRoute] int id, [FromBody] UpdatePlayerRequestDto updateDto)
        {
            var playerModel = _context.Players.FirstOrDefault(x => x.Id == id);

            if (playerModel == null)
            {
                return NotFound();
            }

            playerModel.PlayerName = updateDto.PlayerName;
            playerModel.InsideScoring = updateDto.InsideScoring;
            playerModel.MidRangeShooting = updateDto.MidRangeShooting;
            playerModel.LongRangeShooting = updateDto.LongRangeShooting;
            playerModel.PerimeterDefense = updateDto.PerimeterDefense;
            playerModel.InsideDefense = updateDto.InsideDefense;
            playerModel.Playmaking = updateDto.Playmaking;
            playerModel.Rebound = updateDto.Rebound;
            playerModel.BallHandling = updateDto.BallHandling;
            playerModel.Multiplier = updateDto.Multiplier;

            _context.SaveChanges();

            return Ok(playerModel.ToPlayerDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var playerModel = _context.Players.FirstOrDefault(x => x.Id == id);

            if (playerModel == null)
            {
                return NotFound();
            }

            _context.Players.Remove(playerModel);

            _context.SaveChanges();

            return NoContent();
        }
    }
}