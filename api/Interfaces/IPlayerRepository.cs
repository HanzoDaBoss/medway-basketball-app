using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Player;
using api.Helpers;
using api.Models;

namespace api.Interfaces
{
    public interface IPlayerRepository
    {
        Task<List<Player>> GetAllAsync(QueryObject query);
        Task<Player?> GetByIdAsync(int id);
        Task<Player> CreateAsync(Player playerModel);
        Task<Player?> UpdateAsync(int id, UpdatePlayerRequestDto playerDto);
        Task<Player?> DeleteAsync(int id);
    }
}