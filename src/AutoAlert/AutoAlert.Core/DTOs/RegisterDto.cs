using System.ComponentModel.DataAnnotations;

namespace AutoAlert.Core.DTOs
{
    public class RegisterDto
    {
        [Required]
        [MinLength(2)]
        [MaxLength(50)]
        public string FirstName { get; set; } = null!;

        [Required]
        [MinLength(2)]
        [MaxLength(50)]
        public string LastName { get; set; } = null!;

        [Required]
        [MinLength(5)]
        [MaxLength(256)]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; } = null!;

        [Required]
        [MinLength(8)]
        [MaxLength(50)]
        public string Password { get; set; } = null!;

        [Required]
        [Compare(nameof(Password), ErrorMessage = "Passwords don't match.")]
        [MinLength(8)]
        [MaxLength(50)]
        public string ConfirmPassword { get; set; } = null!;
    }
}
