function apiTestFunction() {
  $.ajax({
    type: "GET",
    url: "https://apitestfunction-564tvvbfsq-uc.a.run.app/",
    success: function (response) {
      // Handle success response
      alert("TEST OK");
    },
    error: function (error) {
      // Handle error
      alert("TEST KO");
    }
  });
}