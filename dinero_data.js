const articulos = [
  {
    titulo: "Gana dinero respondiendo encuestas desde tu celular",
    descripcion: "Te mostramos apps confiables como Toluna, Google Opinion Rewards y Poll Pay que te pagan por dar tu opinión.",
    enlace: "encuestas-pagan.html"
  },
  {
    titulo: "Apps para vender fotos desde tu móvil",
    descripcion: "Si te gusta la fotografía, puedes vender tus imágenes en plataformas como Foap o Shutterstock y ganar dinero extra.",
    enlace: "vender-fotos.html"
  }
];

const contenedor = document.getElementById("lista-dinero");

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
