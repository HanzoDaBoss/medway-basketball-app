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

        public Task<Player?> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Player>> GetAllAsync()
        {
            return _context.Players.ToListAsync();
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