using Microsoft.AspNetCore.Mvc;
using Portfolyo.Models; 

namespace Portfolyo.Controllers
{
    public class DefaultController : Controller
    {
        // 1. Context'i tutmak için 'readonly' bir alan tanımlayın
        private readonly Context _context;

        // 2. CONSTRUCTOR (Yapıcı Metot) EKLEYİN
        // Context'i parametre olarak talep edin.
        // (Dependency Injection burayı otomatik olarak dolduracak)
        public DefaultController(Context context)
        {
            _context = context;
        }

        // 3. 'context' değişkeni artık dolu ve kullanıma hazır
        public IActionResult Home()
        {
            // Örnek: Artık '_context' üzerinden veritabanına erişebilirsiniz
             var homesList = _context.homes.ToList();

            return View();
        }

       
        
    }
}