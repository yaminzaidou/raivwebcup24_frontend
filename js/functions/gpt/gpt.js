
const guardianAngels = [
    {
        "id": "ange-de-la-sante",
        "img": "../../images/Ange-de-la-Sante.png",
        "name": "Ange de la Santé",
        "domain": "santé",
        "texte": "Nous vous conseillons l'Ange de la Santé qui vous protégera et améliorera votre bien-être physique et mental."
    },
    {
        "id": "ange-de-la-finance",
        "img": "../../images/Ange-de-la-Vie-Quotidienne.jpg",
        "name": "Ange de la Vie Quotidienne",
        "domain": "quotidien",
        "texte": "Nous vous conseillons l'Ange de la Vie Quotidienne qui vous aidera à surmonter les défis du quotidien."
    },
    {
        "id": "ange-de-l-education",
        "img": "../../images/Ange-de-la-Vie-Quotidienne.jpg",
        "name": "Ange de la Vie Quotidienne",
        "domain": "quotidien",
        "texte": "Nous vous conseillons l'Ange de la Vie Quotidienne qui vous aidera à surmonter les défis du quotidien."
    },
    {
        "id": "ange-des-relations",
        "img": "../../images/Ange-de-la-Vie-Quotidienne.jpg",
        "name": "Ange de la Vie Quotidienne",
        "domain": "quotidien",
        "texte": "Nous vous conseillons l'Ange de la Vie Quotidienne qui vous aidera à surmonter les défis du quotidien."
    },
    {
        "id": "ange-du-travail",
        "name": "Ange du Travail",
        "img": "../../images/Ange-du-travail.png",
        "domain": "travail",
        "texte": "Nous vous conseillons l'Ange du Travail qui contribuera à votre succès et à votre satisfaction professionnelle."
    },
    {
        "id": "ange-de-la-creativite",
        "img": "../../images/Ange-de-la-Vie-Quotidienne.jpg",
        "name": "Ange de la Vie Quotidienne",
        "domain": "quotidien",
        "texte": "Nous vous conseillons l'Ange de la Vie Quotidienne qui vous aidera à surmonter les défis du quotidien."
    },
    {
        "id": "ange-de-la-technologie",
        "img": "../../images/Ange-de-la-Vie-Quotidienne.jpg",
        "name": "Ange de la Vie Quotidienne",
        "domain": "quotidien",
        "texte": "Nous vous conseillons l'Ange de la Vie Quotidienne qui vous aidera à surmonter les défis du quotidien."
    },
    {
        "id": "ange-de-la-spiritualite",
        "img": "../../images/Ange-de-la-Spiritualite.png",
        "name": "Ange de la Spiritualité",
        "domain": "spiritualité",
        "texte": "Nous vous conseillons l'Ange de la Spiritualité qui assistera votre développement spirituel et votre méditation."
    },
    {
        "id": "ange-de-la-vie-quotidienne",
        "img": "../../images/Ange-de-la-Vie-Quotidienne.jpg",
        "name": "Ange de la Vie Quotidienne",
        "domain": "quotidien",
        "texte": "Nous vous conseillons l'Ange de la Vie Quotidienne qui vous aidera à surmonter les défis du quotidien."
    },
    {
        "id": "ange-du-voyage",
        "img": "../../images/voyage-removebg-preview.png",
        "name": "Ange du Voyage",
        "domain": "voyage",
        "texte": "Nous vous conseillons l'Ange du Voyage qui vous protégera et enrichira vos expériences de voyage."
    }
];


function handleClick() {
    // Fonction appelée lors du clic sur le bouton ou lors de la pression sur 'Entrée'
    var inputValue = document.getElementById('inputField').value;
    console.log(inputValue);
    //j'ai un probleme avec boulot je souhaite trouver une solution avec mon employeur
    //alert("Vous avez entré : " + inputValue);
    getGuardianAngel(inputValue).then(response => {
        document.getElementById("modale-gpt-result").style.display = "flex";

        var imgDiv = document.getElementById('img-gpt'); // Get the div by its ID
        var imgElement = imgDiv.querySelector('img'); // Get the img element within that div
        var header = document.getElementById('txt-gpt'); // Get the h1 by its ID
        console.log(response);
        switch (response) {
            case 'ange-de-la-sante':
                imgElement.src = guardianAngels[0].img;
                header.textContent = guardianAngels[0].texte; // Set new text content
                break;
            case 'ange-de-la-spiritualite':
                imgElement.src = guardianAngels[7].img;
                header.textContent = guardianAngels[7].texte; // Set new text content
                break;
            case 'ange-du-voyage':
                imgElement.src = guardianAngels[9].img;
                header.textContent = guardianAngels[9].texte; // Set new text content
                break;
            case 'ange-du-travail':
                imgElement.src = guardianAngels[4].img;
                header.textContent = guardianAngels[4].texte; // Set new text content
                break;
            case 'ange-de-la-finance':
            case 'ange-de-l-education':
            case 'ange-des-relations':
            case 'ange-de-la-creativite':
            case 'ange-de-la-technologie':
                imgElement.src = guardianAngels[6].img;
                header.textContent = guardianAngels[6].texte; // Set new text content
                break;
            default:
                imgElement.src = guardianAngels[6].img;
                header.textContent = guardianAngels[6].texte; // Set new text content
        }
        //document.getElementById('suggestion').innerText = 'L’ange gardien recommandé pour vous est : ' + response;
    });
}


// Ajouter un écouteur d'événements pour la touche 'Entrée'
document.getElementById('inputField').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleClick();
    }
});

async function getGuardianAngel(userProblem) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer sk-proj-`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
                {
                    "role": "system",
                    "content": "Tu es un assistant pour aider l'utilisateur à choisir l'ange gardien le plus adapté à son problème.\n\ntu as le choix entre les ange suivant : \n\n[\n  {\n    \"id\": \"ange-de-la-sante\",\n    \"name\": \"Ange de la Santé\",\n    \"domain\": \"santé\"\n  },\n  {\n    \"id\": \"ange-de-la-finance\",\n    \"name\": \"Ange de la Finance\",\n    \"domain\": \"finance\"\n  },\n  {\n    \"id\": \"ange-de-l-education\",\n    \"name\": \"Ange de l’Éducation\",\n    \"domain\": \"éducation\"\n  },\n  {\n    \"id\": \"ange-des-relations\",\n    \"name\": \"Ange des Relations\",\n    \"domain\": \"relations\"\n  },\n  {\n    \"id\": \"ange-du-travail\",\n    \"name\": \"Ange du Travail\",\n    \"domain\": \"travail\"\n  },\n  {\n    \"id\": \"ange-de-la-creativite\",\n    \"name\": \"Ange de la Créativité\",\n    \"domain\": \"créativité\"\n  },\n  {\n    \"id\": \"ange-de-la-technologie\",\n    \"name\": \"Ange de la Technologie\",\n    \"domain\": \"technologie\"\n  },\n  {\n    \"id\": \"ange-de-la-spiritualite\",\n    \"name\": \"Ange de la Spiritualité\",\n    \"domain\": \"spiritualité\"\n  },\n  {\n    \"id\": \"ange-de-la-vie-quotidienne\",\n    \"name\": \"Ange de la Vie Quotidienne\",\n    \"domain\": \"quotidien\"\n  },\n  {\n    \"id\": \"ange-du-voyage\",\n    \"name\": \"Ange du Voyage\",\n    \"domain\": \"voyage\"\n  }\n]\n\n\nla réponse que tu dois faire doit juste etre l'id de l'ange"
                }, { role: "user", content: userProblem }]
        })
    });

    const data = await response.json();
    return data.choices[0].message.content; // Assurez-vous de traiter correctement la réponse
}