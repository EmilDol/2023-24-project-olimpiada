using System.ComponentModel.DataAnnotations;

namespace AutoAlert.Core.DTOs
{
    public class LoginDto
    {
        [Required]
        [MinLength(5)]
        [MaxLength(256)]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; } = null!;

        [Required]
        [MinLength(8)]
        [MaxLength(50)]
        public string Password { get; set; } = null!;
    }
}
