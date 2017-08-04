var userURL = "https://randomuser.me/api/";


$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    var d = data
    var g = data.results[0].gender;
    $("body").append("<h2>" + g + "</h2>");
    $("body").append("<div>" + data + "</div>");
  }
});

