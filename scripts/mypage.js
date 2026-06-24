
const myPosts = [
  {
    title: "Crochet Flower",
    image: "images/placeholder.png",
    description: "A small crochet flower made with soft yarn."
  },
  {
    title: "Knitted Scarf",
    image: "images/placeholder.png",
    description: "A cozy scarf perfect for winter."
  },
  {
    title: "Embroidery Hoop",
    image: "images/placeholder.png",
    description: "Hand-stitched floral embroidery."
  }
];

// GENERATOR FUNCTION
function renderMyPosts(list) {
  const container = document.querySelector("#myposts-container");
  container.innerHTML = ""; // clear container

  list.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("post-card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h4>${item.title}</h4>
      <p>${item.description}</p>
    `;

    container.appendChild(card);
  });
}

// INITIAL RENDER
renderMyPosts(myPosts);
