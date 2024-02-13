const eren = document.querySelector(".click");
const section = document.querySelector(".section");
const welcome=document.querySelector(".welcome")
eren.addEventListener("click", handleClick);
function handleClick() {
  section.classList.toggle("active");
  welcome.classList.toggle("active");
}

// Sélectionnez tous les éléments de classe .container et .container2
const containers = document.querySelectorAll(
  ".container, .container2, .container1"
);

// Parcourez chaque conteneur et ajoutez les écouteurs d'événements
containers.forEach((container) => {
  container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    const card = container.querySelector(".card, .card2, .card1");
    const title = container.querySelector(".title, .title2, .title1");
    const sneaker = container.querySelector(
      ".sneaker img, .sneaker2 img, .sneaker1 img"
    );
    const purchase = container.querySelector(
      ".purchase, .purchase2, .purchase1"
    );
    const description = container.querySelector(
      ".info h3, .info2 h3, .info1 h3"
    );
    const sizes = container.querySelector(".sizes, .sizes2, .sizes1");

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  container.addEventListener("mouseenter", (e) => {
    const card = container.querySelector(".card, .card2, .card1");
    const title = container.querySelector(".title, .title2, .title1");
    const sneaker = container.querySelector(
      ".sneaker img, .sneaker2 img, .sneaker1 img"
    );
    const purchase = container.querySelector(
      ".purchase, .purchase2, .purchase1"
    );
    const description = container.querySelector(
      ".info h3, .info2 h3, .info1 h3"
    );
    const sizes = container.querySelector(".sizes, .sizes2, .sizes1");

    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) ";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
  });

  container.addEventListener("mouseleave", (e) => {
    const card = container.querySelector(".card, .card2, .card1");
    const title = container.querySelector(".title, .title2, .title1");
    const sneaker = container.querySelector(
      ".sneaker img, .sneaker2 img, .sneaker1 img"
    );
    const purchase = container.querySelector(
      ".purchase, .purchase2, .purchase1"
    );
    const description = container.querySelector(
      ".info h3, .info2 h3, .info1 h3"
    );
    const sizes = container.querySelector(".sizes, .sizes2, .sizes1");

    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
  });
});
