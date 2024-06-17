using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Player;
using api.Interfaces;
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
        private readonly IPlayerRepository _playerRepo;
        public PlayerController(ApplicationDBContext context, IPlayerRepository playerRepo)
        {
            _playerRepo = playerRepo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var players = await _playerRepo.GetAllAsync();

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
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdatePlayerRequestDto updateDto)
        {
            var playerModel = await _context.Players.FirstOrDefaultAsync(x => x.Id == id);

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

            await _context.SaveChangesAsync();

            return Ok(playerModel.ToPlayerDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var playerModel = await _context.Players.FirstOrDefaultAsync(x => x.Id == id);

            if (playerModel == null)
            {
                return NotFound();
            }

            _context.Players.Remove(playerModel);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}