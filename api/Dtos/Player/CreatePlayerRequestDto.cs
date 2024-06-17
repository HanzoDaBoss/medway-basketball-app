using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Player
{
    public class CreatePlayerRequestDto
    {
        [Required]
        public string PlayerName { get; set; } = string.Empty;
        [Required]
        [Range(0, 100)]
        public int InsideScoring { get; set; }
        [Required]
        [Range(0, 100)]
        public int MidRangeShooting { get; set; }
        [Required]
        [Range(0, 100)]
        public int LongRangeShooting { get; set; }
        [Required]
        [Range(0, 100)]
        public int PerimeterDefense { get; set; }
        [Required]
        [Range(0, 100)]
        public int InsideDefense { get; set; }
        [Required]
        [Range(0, 100)]
        public int Playmaking { get; set; }
        [Required]
        [Range(0, 100)]
        public int Rebound { get; set; }
        [Required]
        [Range(0, 100)]
        public int BallHandling { get; set; }
        [Required]
        [Range(0, 10)]
        public decimal Multiplier { get; set; }
    }
}