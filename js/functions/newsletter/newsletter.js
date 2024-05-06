function submitFormNewsletter() {
    $(".error").text("");

    // Get form data
    var email = $("#email_subscribe").val();

    if (!email) {
        $("#prenom-error").text("Veuillez entrer votre prénom.");
        return;
    }

    var formData = { email };

    // Example of sending form data using AJAX
    $.ajax({
        type: "POST",
        url: "https://newslettersubscribe-564tvvbfsq-uc.a.run.app",
        data: formData,
        success: function (response) {
            document.getElementById('email_subscribe').value = '';
            // Handle success response
            alert("Nous avons bien reçu votre demande. Vous serez informé(e) par e-mail dès que celle-ci aura été traitée.");
        },
        error: function (error) {
            // Handle error
            alert("Votre demande n'a pas pu être enregistrée. Veuillez compléter le formulaire de manière correcte.");
        }
    });
}