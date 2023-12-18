using Core.Service.Cron;
using Hangfire;
using System.Text.Json.Serialization;

namespace BDS
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
            builder.Services.AddControllers();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddHangfire(config => config.UseSqlServerStorage("Data Source=localhost;Initial Catalog=bds.DB;Integrated Security=True;encrypt=true;trustservercertificate=true;MultipleActiveResultSets=True;"));
            builder.Services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
                options.JsonSerializerOptions.WriteIndented = true;
            });
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  policy =>
                                  {
                                      policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
                                  });
            });
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {

                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors(MyAllowSpecificOrigins);
            app.UseHttpsRedirection();

            app.UseAuthorization();
            app.UseHangfireDashboard();
            app.UseHangfireServer();
            RecurringJob.AddOrUpdate("1", () => new CronService().KiemTraTinDangHetHan(), "*/10 * * * * *");
            RecurringJob.AddOrUpdate("2", () => new CronService().GuiBaoCaoChoTruongPhong(), "*/10 * * * * *");
            app.MapControllers();

            app.Run();
        }
    }
}