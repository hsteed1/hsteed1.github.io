  $("head").prepend("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta name=\"author\" content=\"Harrison Steed\">\n<meta name=\"description\" content=\"My Projects Hosted With Github Pages\">\n<meta name=\"theme-color\" content=\"#ccc\">\n<link rel=\"stylesheet\" href=\"/assets/css/master.css\">\n<link rel=\"stylesheet\" href=\"/assets/css/menu.css\">");
  $("body").append("<script src=\"/assets/js/achievements.js\"></script><script src=\"/assets/js/master.js\"></script>");
  $(document).ready(() => {
	  $("#top-nav").html("<ul><li><h3><a href=\"/\">Hman124</a></h3></li><li><a href=\"/projects/\">Projects</a></li><li><a href=\"/achievements/\">Achievements</a></li></ul>");
  });