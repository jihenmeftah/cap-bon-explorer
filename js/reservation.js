const activite = document.getElementById("activite");
const participants = document.getElementById("participants");

function calculerPrix() {
    let prix = Number(activite.value);
    let nombre = Number(participants.value);

    let sousTotal = prix * nombre;
    let reduction = 0;

    if (nombre >= 4) {
        reduction = sousTotal * 0.10;
    }

    let total = sousTotal - reduction;

    document.getElementById("sousTotal").textContent = sousTotal;
    document.getElementById("reduction").textContent = reduction;
    document.getElementById("total").textContent = total;
}

activite.addEventListener("change", calculerPrix);
participants.addEventListener("input", calculerPrix);

const form = document.getElementById("formReservation");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let telephone = document.getElementById("telephone").value;
    let date = document.getElementById("date").value;
    let nombre = Number(participants.value);
    let choix = activite.options[activite.selectedIndex].text;

    let aujourdHui = new Date();
    let dateActuelle = aujourdHui.getFullYear() + "-" +
        String(aujourdHui.getMonth() + 1).padStart(2, "0") + "-" +
        String(aujourdHui.getDate()).padStart(2, "0");

    if (date < dateActuelle) {
        alert("La date ne peut pas etre dans le passe.");
        return;
    }

    if (nombre < 1 || nombre > 6) {
        alert("Le nombre de participants doit etre entre 1 et 6.");
        return;
    }

    let type = document.querySelector('input[name="type"]:checked').value;

    calculerPrix();

    let total = document.getElementById("total").textContent;

    let resultat = document.getElementById("resultat");

    resultat.innerHTML =
        "<h4>Reservation confirmee !</h4>" +
        "<p>Nom : " + nom + " " + prenom + "</p>" +
        "<p>Email : " + email + "</p>" +
        "<p>Telephone : " + telephone + "</p>" +
        "<p>Activite : " + choix + "</p>" +
        "<p>Date : " + date + "</p>" +
        "<p>Participants : " + nombre + "</p>" +
        "<p>Type : " + type + "</p>" +
        "<p>Total : " + total + " TND</p>";

    resultat.style.display = "block";
});

form.addEventListener("reset", function() {
    setTimeout(function() {
        document.getElementById("sousTotal").textContent = 0;
        document.getElementById("reduction").textContent = 0;
        document.getElementById("total").textContent = 0;
        document.getElementById("resultat").style.display = "none";
    }, 0);
});