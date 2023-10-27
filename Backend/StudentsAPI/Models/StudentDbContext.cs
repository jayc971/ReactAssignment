using Microsoft.EntityFrameworkCore;

namespace StudentsAPI.Models
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=JAYC-PC\\SQLEXPRESS;Initial Catalog=Institute; Trusted_Connection=True; TrustServerCertificate=True;");
        }

    }
}
