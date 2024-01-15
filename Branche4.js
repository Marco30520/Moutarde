// Fonction pour lancer la fenêtre modale
function launchModal() {
  // Création d'une nouvelle instance de la classe Modal de Bootstrap avec l'élément ayant l'ID 'quizModal'
  let myModal = new bootstrap.Modal(document.getElementById("quizModal"));
  // Affichage de la fenêtre modale
  myModal.show();
  // Ajout d'un écouteur d'événement pour détecter la fermeture de la fenêtre modale
  myModal._element.addEventListener("hidden.bs.modal", function () {
    // Appel de la fonction getArticle() après la fermeture de la fenêtre modale
    getArticle();
  });
}
