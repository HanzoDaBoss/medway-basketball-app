using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Player;
using api.Helpers;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class PlayerRepository : IPlayerRepository
    {
        private readonly ApplicationDBContext _context;
        public PlayerRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Player> CreateAsync(Player playerModel)
        {
            await _context.Players.AddAsync(playerModel);
            await _context.SaveChangesAsync();
            return playerModel;
        }

        public async Task<Player?> DeleteAsync(int id)
        {
            var playerModel = await _context.Players.FirstOrDefaultAsync(x => x.Id == id);

            if (playerModel == null)
            {
                return null;
            }

            _context.Players.Remove(playerModel);
            await _context.SaveChangesAsync();
            return playerModel;
        }

        public async Task<List<Player>> GetAllAsync(QueryObject query)
        {
            var players = _context.Players.AsQueryable();

            return await players.ToListAsync();
        }

        public async Task<Player?> GetByIdAsync(int id)
        {
            return await _context.Players.FindAsync(id);
        }

        public async Task<Player?> UpdateAsync(int id, UpdatePlayerRequestDto playerDto)
        {
            var existingPlayer = await _context.Players.FirstOrDefaultAsync(x => x.Id == id);

            if (existingPlayer == null)
            {
                return null;
            }

            existingPlayer.PlayerName = playerDto.PlayerName;
            existingPlayer.InsideScoring = playerDto.InsideScoring;
            existingPlayer.MidRangeShooting = playerDto.MidRangeShooting;
            existingPlayer.LongRangeShooting = playerDto.LongRangeShooting;
            existingPlayer.PerimeterDefense = playerDto.PerimeterDefense;
            existingPlayer.InsideDefense = playerDto.InsideDefense;
            existingPlayer.Playmaking = playerDto.Playmaking;
            existingPlayer.Rebound = playerDto.Rebound;
            existingPlayer.BallHandling = playerDto.BallHandling;
            existingPlayer.Multiplier = playerDto.Multiplier;

            await _context.SaveChangesAsync();

            return existingPlayer;
        }
    }
}