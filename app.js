// Récupérer l'élement déclencheur de l'action
const button = document.getElementById("addtask");

// Greffer un écouteur à l'élément en lui passant l'évènement et la fonction de rappel (callback) à exécuter lorsque l'évènement est enclenchée
button.addEventListener("click", function (e) {
  // Je récupère la div où nous allons ajouter le formulaire
  const content = document.getElementById("content");

  // Créer le formulaire
  const form = document.createElement("form");

  // L'élément de titre H2
  const textInput = document.createElement("h2");
  textInput.innerHTML = "Créer une nouvelle tâche";
  textInput.setAttribute("class", "my-3");

  // Le champ titre du formulaire
  const titreInput = document.createElement("input");
  titreInput.setAttribute("type", "text");
  titreInput.setAttribute("class", "form-control my-3");
  titreInput.setAttribute("id", "form-title");
  titreInput.setAttribute("placeholder", "Titre de la tâche");

  // Le champ description du formulaire
  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("class", "form-control my-3");
  descriptionInput.setAttribute("id", "form-description");
  descriptionInput.setAttribute("placeholder", "Description de la tâche");

  // Créer le bouton de soumission
  const buttonSubmit = document.createElement("input");
  buttonSubmit.setAttribute("type", "submit");
  buttonSubmit.setAttribute("value", "Valider");
  buttonSubmit.setAttribute("class", "btn btn-primary my-3");

  // Ecouteur
  buttonSubmit.addEventListener("click", function (event) {
    const formTitle = document.getElementById("form-title").value;
    const formDescription = document.getElementById("form-description").value;

    // Retire le texte "Pas de tâches" s'il existe
    const textNotTask = document.getElementById("text-not-task");
    if (textNotTask != null) {
      textNotTask.parentNode.removeChild(textNotTask);
    }

    // Créer la tâche
    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card my-2");
    const divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");
    const cardTitre = document.createElement("h5");
    cardTitre.setAttribute("class", "card-title");
    cardTitre.innerHTML = formTitle;
    const cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text");
    cardText.innerHTML = formDescription;

    divCardBody.appendChild(cardTitre);
    divCardBody.appendChild(cardText);
    divCard.appendChild(divCardBody);

    const cardInner = document.getElementById("card-inner");
    cardInner.appendChild(divCard);

    // Retirer le formulaire
    content.removeChild(form)

    event.preventDefault();
  });

  // Ajouter mes champs au formulaire
  form.appendChild(textInput);
  form.appendChild(titreInput);
  form.appendChild(descriptionInput);
  form.appendChild(buttonSubmit);

  // Ajouter mes champs au content
  content.appendChild(form);
});
