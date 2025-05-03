const articulos = [
    {
        titulo: "Dispositivo 1",
        descripcion: "Descripción del dispositivo 1. Aquí puedes incluir detalles sobre sus características y beneficios.",
        enlace: "dispositivos.html"
    }
]
//insertar en HTML
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
}
);