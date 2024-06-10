using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Player;
using api.Models;

namespace api.Mappers
{
    public static class PlayerMappers
    {
        public static PlayerDto ToPlayerDto(this Player playerModel)
        {
            return new PlayerDto
            {
                Id = playerModel.Id,
                PlayerName = playerModel.PlayerName,
                InsideScoring = playerModel.InsideScoring,
                MidRangeShooting = playerModel.MidRangeShooting,
                LongRangeShooting = playerModel.LongRangeShooting,
                PerimeterDefense = playerModel.PerimeterDefense,
                InsideDefense = playerModel.InsideDefense,
                Playmaking = playerModel.Playmaking,
                Rebound = playerModel.Rebound,
                BallHandling = playerModel.BallHandling,
                Multiplier = playerModel.Multiplier,
                OverallRating = playerModel.OverallRating
            };
        }
    }
}