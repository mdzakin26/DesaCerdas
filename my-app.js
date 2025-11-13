
var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'e-desa',
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
    
    {
      path: 'profile/',
      url: 'profile.html',

    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');