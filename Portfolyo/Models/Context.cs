using Microsoft.EntityFrameworkCore;

namespace Portfolyo.Models
{
    public class Context: DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
        }
        public DbSet<Home> homes { get; set; }
        public DbSet<About> abouts { get; set; }
        public DbSet<Contact> contacts { get; set; }
    }
}
