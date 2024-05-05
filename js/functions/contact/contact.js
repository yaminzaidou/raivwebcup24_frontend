function submitForm() {
    $(".error").text("");

    // Get form data
    var nom = $("#BRIX-Contact-Name-V3").val();
    var email = $("#BRIX-Contact-Email-V3").val();
    var contentMsg = $("#BRIX-Contact-Message-V3").val();

    if (!nom) {
        $("#nom-error").text("Veuillez entrer votre nom.");
        return;
    }
    if (!email) {
        $("#prenom-error").text("Veuillez entrer votre prénom.");
        return;
    }

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email || !emailPattern.test(email)) {
        $("#email-error").text("Veuillez entrer votre adresse e-mail.");
        return;
    }

    if (!contentMsg) {
        $("#email-error").text("Veuillez entrer votre adresse e-mail.");
        return;
    }
    var formData = { nom, email, contentMsg };

    // Example of sending form data using AJAX
    $.ajax({
        type: "POST",
        url: "https://asksupport-564tvvbfsq-uc.a.run.app",
        data: formData,
        success: function (response) {
            document.getElementById('BRIX-Contact-Name-V3').value = '';
            document.getElementById('BRIX-Contact-Email-V3').value = '';
            document.getElementById('BRIX-Contact-Phone-V3').value = '';
            document.getElementById('BRIX-Contact-Company-V3').value = '';
            document.getElementById('BRIX-Contact-Message-V3').value = '';
            // Handle success response
            alert("Nous avons bien reçu votre demande. Vous serez informé(e) par e-mail dès que celle-ci aura été traitée.");
        },
        error: function (error) {
            // Handle error
            alert("Votre demande n'a pas pu être enregistrée. Veuillez compléter le formulaire de manière correcte.");
        }
    });
}