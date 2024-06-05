using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace api.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string PlayerName { get; set; } = string.Empty;
        public int InsideScoring { get; set; }
        public int MidRangeShooting { get; set; }
        public int LongRangeShooting { get; set; }
        public int PerimeterDefense { get; set; }
        public int InsideDefense { get; set; }
        public int Playmaking { get; set; }
        public int Rebound { get; set; }
        public int BallHandling { get; set; }
        [Column(TypeName = "decimal(1,2)")]
        public decimal Multiplier { get; set; }
        public decimal OverallRating
        {
            get
            {
                return (InsideScoring + MidRangeShooting + LongRangeShooting + PerimeterDefense + InsideDefense + Playmaking + Rebound + BallHandling) / 8m * Multiplier;
            }
        }
    }
}