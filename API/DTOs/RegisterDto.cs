using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]  // rằng buộc: bắt buộc biến được gán Required phải có giá trị, không được để trống
        public string? Username { get; set; }
        
        [Required] public string? KnownAs { get; set; }
        [Required] public string? Gender { get; set; }

        [Required] public DateTime DateOfBirth { get; set; } // Note this must be optional or the required validator will not work
        [Required] public string? City { get; set; }
        [Required] public string? Country { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4)]
        public string? Password { get; set; }
    }
}