using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    //Commands for EF terminal:
    //Add migrations:       dotnet ef migrations add InitialCreate -s API -p Persistence
    //Create database:      NOT done via command, done from API Program.cs on service startup along with seeding

    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Activity> Activities { get; set; }
    }
}