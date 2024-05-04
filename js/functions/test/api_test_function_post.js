function apiTestFunctionPost() {
  $(".error").text("");

  // Get form data
  var nom = $("#contact-modal-nom").val();
  var numeroTel = $("#contact-modal-numeroTel").val();
  var email = $("#contact-modal-email").val();

  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!email || !emailPattern.test(email)) {
    return;
  }
  var formData = { nom, numeroTel, email };

  // Example of sending form data using AJAX
  $.ajax({
    type: "POST",
    url: "https://apitestfunctionpost-564tvvbfsq-uc.a.run.app",
    data: formData,
    success: function (response) {
      // Handle success response
      alert("TEST POST OK");
    },
    error: function (error) {
      // Handle error
      alert("TEST POST KO");
    }
  });
}