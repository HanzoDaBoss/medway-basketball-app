using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Player;
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

        public async Task<List<Player>> GetAllAsync()
        {
            return await _context.Players.ToListAsync();
        }

        public Task<Player?> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Player?> UpdateAsync(int id, UpdatePlayerRequestDto playerDto)
        {
            throw new NotImplementedException();
        }
    }
}