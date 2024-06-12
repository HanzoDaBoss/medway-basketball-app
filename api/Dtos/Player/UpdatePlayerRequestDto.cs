using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Player
{
    public class UpdatePlayerRequestDto
    {
        public string PlayerName { get; set; } = string.Empty;
        public int InsideScoring { get; set; }
        public int MidRangeShooting { get; set; }
        public int LongRangeShooting { get; set; }
        public int PerimeterDefense { get; set; }
        public int InsideDefense { get; set; }
        public int Playmaking { get; set; }
        public int Rebound { get; set; }
        public int BallHandling { get; set; }
        public decimal Multiplier { get; set; }
    }
}