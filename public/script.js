$(document).ready(function() {

  function vlineApp() {

    this.client_ = vline.Client.create({
      serviceId: 'socent',
      ui: false,
      uiVideoPanel: "#video"
    });

  console.log('Created new client');

  };
    
  vline = new vlineApp();
  client = vline.client_;

  if (client.isLoggedIn()) {
    session = client.getDefaultSession();
  }

  var login = function() {
    vline.client_.login('socent', window.PROFILE, window.AUTH_TOKEN).done(vline.init_, vline);
  

    vlineApp.prototype.init_ = function(session) {
      this.session_ = session;
      console.log('Logged in - Created new session');
    }

  }

  $('#Login').click(login);

});
