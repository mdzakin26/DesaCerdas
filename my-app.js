var app = new Framework7({
  el: '#app',
  name: 'e-desa',
  panel: {
    swipe: true,
  },

  routes: [
    {
      path: '/login/',
      url: 'login.html',
    },
    {
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/profile/',
      url: 'profile.html',
    },
    {
      path: '/home/',
      url: 'index.html',
    },
  ],
});

// --- Buat View Utama ---
var mainView = app.views.create('.view-main');


// ===========================
//  CEK LOGIN SAAT APP DIBUKA
// ===========================
if (localStorage.getItem("isLoggedIn") !== "true") {
  // kalau belum login → lempar ke login
  setTimeout(() => {
    mainView.router.navigate('/login/');
  }, 300);
}



// ===========================
//        LOGIN HANDLER
// ===========================
document.addEventListener("click", function (e) {
  if (e.target.id === "btn-login") {

    let username = document.getElementById("login-username").value.trim();
    let password = document.getElementById("login-password").value.trim();

    // contoh akun
    let validUser = "dzaki";
    let validPass = "1234";

    if (username === validUser && password === validPass) {

      // simpan status login
      localStorage.setItem("isLoggedIn", "true");

      // arahkan ke home
      mainView.router.navigate('/home/', {
        clearPreviousHistory: true
      });

    } else {
      app.dialog.alert("Username atau password salah!");
    }
  }
});


// ===========================
//          LOGOUT
// ===========================
document.addEventListener("click", function (e) {
  if (e.target.id === "btn-logout") {

    // hapus login
    localStorage.removeItem("isLoggedIn");

    // lempar balik ke login
    mainView.router.navigate('/login/', {
      clearPreviousHistory: true
    });
  }
});
