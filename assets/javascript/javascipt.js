// PSEUDOCODING:




var queryURL = "?t=" + movie + "&y=&plot=short&apikey=";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {