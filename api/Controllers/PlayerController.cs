using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Player;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

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
        public IActionResult GetAll()
        {
            var players = _context.Players.ToList()
            .Select(p => p.ToPlayerDto());

            return Ok(players);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var player = _context.Players.Find(id);

            if (player == null)
            {
                return NotFound();
            }

            return Ok(player.ToPlayerDto());
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreatePlayerRequestDto playerDto)
        {
            var playerModel = playerDto.ToPlayerFromCreateDto();
            _context.Players.Add(playerModel);
            _context.SaveChanges();
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
        }
    }
}