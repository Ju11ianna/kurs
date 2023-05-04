const card = document.querySelector(".card");

const av = document.querySelector(" img");
const description = document.querySelector(".infor p");

// Animate In

card.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  av.style.transform = "translateZ(3px) rotateZ(0deg)";
  description.style.transform = "translateZ(3px)";
});

// Animate Out

card.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  av.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
});
