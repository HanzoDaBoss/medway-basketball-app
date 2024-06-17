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

            if (!string.IsNullOrWhiteSpace(query.SortBy))
            {
                if (query.SortBy.Equals("OverallRating", StringComparison.OrdinalIgnoreCase))
                {
                    var players2 = _context.Players.AsEnumerable();
                    players2 = query.IsDescending ? players2.OrderByDescending(p => p.OverallRating) : players2.OrderBy(p => p.OverallRating);
                    return players2.ToList();
                }
                if (query.SortBy.Equals("InsideScoring", StringComparison.OrdinalIgnoreCase))
                {
                    players = query.IsDescending ? players.OrderByDescending(p => p.InsideScoring).ThenByDescending(p => p.MidRangeShooting) : players.OrderBy(p => p.InsideScoring).ThenBy(p => p.MidRangeShooting);
                }
                if (query.SortBy.Equals("MidRangeShooting", StringComparison.OrdinalIgnoreCase))
                {
                    players = query.IsDescending ? players.OrderByDescending(p => p.MidRangeShooting).ThenByDescending(p => p.LongRangeShooting) : players.OrderBy(p => p.MidRangeShooting).ThenBy(p => p.LongRangeShooting);
                }
                if (query.SortBy.Equals("LongRangeShooting", StringComparison.OrdinalIgnoreCase))
                {
                    players = query.IsDescending ? players.OrderByDescending(p => p.LongRangeShooting).ThenByDescending(p => p.MidRangeShooting) : players.OrderBy(p => p.LongRangeShooting).ThenBy(p => p.MidRangeShooting);
                }
                if (query.SortBy.Equals("PerimeterDefense", StringComparison.OrdinalIgnoreCase))
                {
                    players = query.IsDescending ? players.OrderByDescending(p => p.PerimeterDefense).ThenByDescending(p => p.InsideDefense) : players.OrderBy(p => p.PerimeterDefense).ThenBy(p => p.InsideDefense);
                }
                if (query.SortBy.Equals("InsideDefense", StringComparison.OrdinalIgnoreCase))
                {
                    players = query.IsDescending ? players.OrderByDescending(p => p.InsideDefense).ThenByDescending(p => p.PerimeterDefense) : players.OrderBy(p => p.InsideDefense).ThenBy(p => p.PerimeterDefense);
                }
                if (query.SortBy.Equals("Playmaking", StringComparison.OrdinalIgnoreCase))
                {
                    players = query.IsDescending ? players.OrderByDescending(p => p.Playmaking).ThenByDescending(p => p.BallHandling) : players.OrderBy(p => p.Playmaking).ThenBy(p => p.BallHandling);
                }
                if (query.SortBy.Equals("Rebound", StringComparison.OrdinalIgnoreCase))
                {
                    players = query.IsDescending ? players.OrderByDescending(p => p.Rebound).ThenByDescending(p => p.InsideScoring) : players.OrderBy(p => p.Rebound).ThenBy(p => p.InsideScoring);
                }
                if (query.SortBy.Equals("BallHandling", StringComparison.OrdinalIgnoreCase))
                {
                    players = query.IsDescending ? players.OrderByDescending(p => p.BallHandling).ThenByDescending(p => p.Playmaking) : players.OrderBy(p => p.BallHandling).ThenBy(p => p.Playmaking);
                }
            }

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