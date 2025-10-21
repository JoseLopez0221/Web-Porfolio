document.getElementById("year").textContent = new Date().getFullYear();
const grid = document.getElementById("grid");
projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>${p.title}</h3><p>${p.tech}</p><a href="${p.link}">View</a>`;
  grid.appendChild(card);
});