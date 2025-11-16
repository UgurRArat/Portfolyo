/*!
 * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */

window.addEventListener("DOMContentLoaded", (event) => {
    // --- Navbar Küçültme (Shrink) Fonksiyonu ---
    // Sayfa kaydýrýldýðýnda 'navbarShrink' fonksiyonunu çalýþtýrýr.
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector("#mainNav");
        if (!navbarCollapsible) {
            return;
        }
        // Sayfa en üstte (0 piksel) ise, 'navbar-shrink' sýnýfýný kaldýrýr.
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove("navbar-shrink");
        } else {
            // Sayfa aþaðý kaydýrýlmýþsa, 'navbar-shrink' sýnýfýný ekler.
            navbarCollapsible.classList.add("navbar-shrink");
        }
    };

    // Navbar'ý hemen (sayfa yüklenir yüklenmez) küçült/büyüt.
    navbarShrink();

    // Sayfa kaydýrýldýkça dinle ve 'navbarShrink' fonksiyonunu çalýþtýr.
    document.addEventListener("scroll", navbarShrink);

    // --- Navbar Linklerini Aktif Hale Getirme (Scrollspy) ---
    // Bootstrap'in scrollspy özelliðini ana gövde ('body') üzerinde etkinleþtirir.
    // Hedef olarak '#mainNav' (navbar) kullanýr ve kaydýrma pozisyonuna göre
    // navbar linklerine 'active' sýnýfýný ekler.
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            // Navbar'ýn yüksekliðine göre bir ofset belirler (72px).
            // Bu, doðru bölümün vurgulanmasýný saðlar.
            offset: 72,
        });
    }

    // --- Mobil Menü (Toggler) Kapatma ---
    // Mobil menüdeki (hamburger menü) linklere týklandýðýnda,
    // açýlmýþ olan menünün otomatik olarak kapanmasýný saðlar.
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            // Eðer navbar-toggler görünür durumdaysa (yani mobil görünümdedir)
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                // Toggler'a týkla (menüyü kapat)
                navbarToggler.click();
            }
        });
    });
});