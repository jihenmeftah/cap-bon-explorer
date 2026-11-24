const formContact = document.getElementById("formContact");

if (formContact) {
    formContact.addEventListener("submit", function(event) {
        event.preventDefault();

        let nom = document.getElementById("contactNom").value;
        let email = document.getElementById("contactEmail").value;
        let sujet = document.getElementById("sujet").value;
        let message = document.getElementById("message").value;

        let confirmation = document.getElementById("confirmationContact");

        confirmation.textContent = "Merci " + nom + " ! Votre message a ete envoye avec succes.";
        confirmation.style.display = "block";

        formContact.reset();
    });
}