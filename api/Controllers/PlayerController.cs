using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Player;
using api.Helpers;
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
        public async Task<IActionResult> GetAll([FromQuery] QueryObject query)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var players = await _playerRepo.GetAllAsync(query);

            var playerDto = players.Select(p => p.ToPlayerDto());

            return Ok(playerDto);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var player = await _playerRepo.GetByIdAsync(id);

            if (player == null)
            {
                return NotFound();
            }

            return Ok(player.ToPlayerDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreatePlayerRequestDto playerDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var playerModel = playerDto.ToPlayerFromCreateDto();

            await _playerRepo.CreateAsync(playerModel);

            return CreatedAtAction(nameof(GetById), new { id = playerModel.Id }, playerModel.ToPlayerDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdatePlayerRequestDto updateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var playerModel = await _playerRepo.UpdateAsync(id, updateDto);

            if (playerModel == null)
            {
                return NotFound();
            }

            return Ok(playerModel.ToPlayerDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var playerModel = await _playerRepo.DeleteAsync(id);

            if (playerModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}