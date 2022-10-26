let isIgnite = true;

function setImage() {
  var picture = prompt("Insira o link da sua foto:");

  while(picture === null || picture === "") {
    var picture = prompt("Insira o link da sua foto:");
  }

  const img = document.querySelector('.card img');
  img.src = picture;
}

function changeCard(event) {
  const card = event.currentTarget;

  card.style.backgroundImage = `
    url(./assets/bg-${
      isIgnite 
        ? 'explorer' 
        : 'ignite'
    }.svg)`;
    
  isIgnite = !isIgnite;
}

setImage();