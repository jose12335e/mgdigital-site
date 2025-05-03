const articulos = [
  {
    titulo: "¿Realmente te pagan por caminar?",
    descripcion: "Descubre si las apps que te pagan por caminar realmente funcionan. Aquí te mostramos las más conocidas y qué puedes esperar de ellas.",
    enlace: "app-pagan-por-caminar.html"
  },
  {
    titulo: "CapCut para principiantes",
    descripcion: "Guía rápida para aprender a editar tus primeros videos desde el celular usando CapCut.",
    enlace: "capcut.html"
  },
  {
    titulo: "CapCut para principiantes",
    descripcion: "Guía rápida para aprender a editar tus primeros videos desde el celular usando CapCut.",
    enlace: ""
  }
];

// Insertar en HTML
const contenedor = document.getElementById("lista-articulos");

articulos.forEach(art => {
  const card = document.createElement("div");
  card.className = "card-articulo";
  card.innerHTML = `
  <h2><a href="${art.enlace}">${art.titulo}</a></h2>
  <p>${art.descripcion}</p>
  <a href="${art.enlace}" class="leer-mas">Leer artículo completo →</a>
`;

  contenedor.appendChild(card);
});
