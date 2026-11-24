const activites = [
    {id: "A01", nom: "Decouverte de la medina", lieu: "Nabeul", categorie: "Culture", duree: "2h", prix: 20},
    {id: "A02", nom: "Atelier d'initiation a la poterie", lieu: "Nabeul", categorie: "Artisanat", duree: "1h30", prix: 35},
    {id: "A03", nom: "Parcours decouverte de Kerkouane", lieu: "Kerkouane", categorie: "Culture", duree: "2h30", prix: 30},
    {id: "A04", nom: "Randonnee decouverte", lieu: "Djebel Abderrahmane", categorie: "Nature", duree: "3h", prix: 25},
    {id: "A05", nom: "Circuit du littoral", lieu: "Kelibia", categorie: "Nature", duree: "3h", prix: 40},
    {id: "A06", nom: "Peinture sur ceramique", lieu: "Nabeul", categorie: "Artisanat", duree: "2h", prix: 25},
    {id: "A07", nom: "Decouverte d'un marche local", lieu: "Nabeul", categorie: "Decouverte", duree: "1h30", prix: 15},
    {id: "A08", nom: "Promenade photographique", lieu: "Hammamet", categorie: "Decouverte", duree: "2h", prix: 30}
];

const recherche = document.getElementById("recherche");
const categorie = document.getElementById("categorie");
const cartes = document.querySelectorAll(".activite-card");
const compteur = document.getElementById("compteur");
const message = document.getElementById("messageAucun");

function filtrerActivites() {
    let texte = recherche.value.toLowerCase();
    let choix = categorie.value;
    let nombre = 0;

    cartes.forEach(function(carte) {
        let nom = carte.querySelector("h5").textContent.toLowerCase();
        let cat = carte.getAttribute("data-category");

        if (nom.includes(texte) && (choix == "Toutes" || cat == choix)) {
            carte.style.display = "block";
            nombre++;
        } else {
            carte.style.display = "none";
        }
    });

    compteur.textContent = nombre + " activites disponibles";

    if (nombre == 0) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
}

recherche.addEventListener("input", filtrerActivites);
categorie.addEventListener("change", filtrerActivites);

const boutons = document.querySelectorAll(".detail-btn");

boutons.forEach(function(bouton) {
    bouton.addEventListener("click", function() {
        let id = bouton.getAttribute("data-id");
        let activite = activites.find(function(a) {
            return a.id == id;
        });

        document.getElementById("titreModal").textContent = activite.nom;

        document.getElementById("contenuModal").innerHTML =
            "<p>Lieu : " + activite.lieu + "</p>" +
            "<p>Categorie : " + activite.categorie + "</p>" +
            "<p>Duree : " + activite.duree + "</p>" +
            "<p>Prix : " + activite.prix + " TND</p>";

        let modal = new bootstrap.Modal(document.getElementById("detailsModal"));
        modal.show();
    });
});