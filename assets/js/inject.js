  $("#top-nav").html("<ul><li><h3>Hsteed</h3></li><li><a href=\"#\">Projects</a></li><li><a href=\"#\">Achievements</a></li></ul>");
  $("head").prepend("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta name=\"author\" content=\"Harrison Steed\">\n<meta name=\"description\" content=\"The home of every project and idea I have ever made\">\n<meta name=\"theme-color\" content=\"#ccc\">\n<link rel=\"stylesheet\" href=\"/assets/css/master.css\">\n<link rel=\"stylesheet\" href=\"assets/css/menu.css\">");
  var container = document.createElement("DIV");
  container.setAttribute("class", "container");
  container.innerHTML = $("body").html();
  $("body").html("");
  $("body").append(container);
