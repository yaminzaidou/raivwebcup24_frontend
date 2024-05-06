

document.getElementById('myLink').addEventListener('click', function (event) {
    // Check a condition; it could be anything you define

    event.preventDefault();
    var nom = document.getElementById('Nom').value;
    var prenom = document.getElementById('Prenom').value;
    var email = document.getElementById('email-3').value;
    var checkbox = document.getElementById('Checkbox_1');
    if (checkbox.checked) {
    } else {
        alert("Vous devez acceptez nos conditions d'utilisations.");
        return;
    }
    if (!nom) {
        alert("Vous devez saisir un nom");
        return;
    }
    if (!prenom) {
        alert("Vous devez saisir un prénom");
        return;
    }
    if (!email) {
        alert("Vous devez saisir un email");
        return;
    }
    const urlParams = new URLSearchParams(window.location.search);
    const angeId = urlParams.get("angeId");
    var formData = { nom, prenom, email, angeId };
    $.ajax({
        type: "POST",
        url: "https://commandvalidated-564tvvbfsq-uc.a.run.app",
        data: formData,
        success: function (response) {
            window.location.href = "payement-succes.html";
        },
        error: function (error) {
            // Handle error
            alert("Votre commande n'a pas pu être enregistrée. Veuillez compléter le formulaire de manière correcte.");
        }
    });
});