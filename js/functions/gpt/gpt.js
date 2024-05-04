
const guardianAngels = [
    {
        "id": "ange-de-la-sante",
        "name": "Ange de la Santé",
        "domain": "santé"
    },
    {
        "id": "ange-de-la-finance",
        "name": "Ange de la Finance",
        "domain": "finance"
    },
    {
        "id": "ange-de-l-education",
        "name": "Ange de l’Éducation",
        "domain": "éducation"
    },
    {
        "id": "ange-des-relations",
        "name": "Ange des Relations",
        "domain": "relations"
    },
    {
        "id": "ange-du-travail",
        "name": "Ange du Travail",
        "domain": "travail"
    },
    {
        "id": "ange-de-la-creativite",
        "name": "Ange de la Créativité",
        "domain": "créativité"
    },
    {
        "id": "ange-de-la-technologie",
        "name": "Ange de la Technologie",
        "domain": "technologie"
    },
    {
        "id": "ange-de-la-spiritualite",
        "name": "Ange de la Spiritualité",
        "domain": "spiritualité"
    },
    {
        "id": "ange-de-la-vie-quotidienne",
        "name": "Ange de la Vie Quotidienne",
        "domain": "quotidien"
    },
    {
        "id": "ange-du-voyage",
        "name": "Ange du Voyage",
        "domain": "voyage"
    }
];


function handleClick() {
    // Fonction appelée lors du clic sur le bouton ou lors de la pression sur 'Entrée'
    var inputValue = document.getElementById('inputField').value;
    //j'ai un probleme avec boulot je souhaite trouver une solution avec mon employeur
    //alert("Vous avez entré : " + inputValue);
    getGuardianAngel(inputValue).then(response => {
        document.getElementById('suggestion').innerText = 'L’ange gardien recommandé pour vous est : ' + response;
    });
}


// Ajouter un écouteur d'événements pour la touche 'Entrée'
document.getElementById('inputField').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleClick();
    }
});

async function getGuardianAngel(userProblem) {
    console.log("getGuardianAngel");
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer sk-proj-sELF3C9CeWOadJxi9NEzT3BlbkFJ5979FrHUye2Rn9oAzTMg`,
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