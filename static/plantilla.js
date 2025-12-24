const jugadores = {
    "andreas": "imagenes_plantilla/imagenes_grandes/andreas.webp",
    "araujo": "imagenes_plantilla/imagenes_grandes/araujo.webp",
    "balde": "imagenes_plantilla/imagenes_grandes/balde.webp",
    "bernal": "imagenes_plantilla/imagenes_grandes/bernal.webp",
    "casado": "imagenes_plantilla/imagenes_grandes/casado.jpeg",
    "chesni": "imagenes_plantilla/imagenes_grandes/chesni.webp",
    "cubarsi": "imagenes_plantilla/imagenes_grandes/cubarsi.webp",
    "dejong": "imagenes_plantilla/imagenes_grandes/dejong.webp",
    "eric": "imagenes_plantilla/imagenes_grandes/eric.webp",
    "fermin": "imagenes_plantilla/imagenes_grandes/fermin.webp",
    "ferran": "imagenes_plantilla/imagenes_grandes/ferran.webp",
    "flick": "imagenes_plantilla/imagenes_grandes/flick.webp",
    "gavi": "imagenes_plantilla/imagenes_grandes/gavi.webp",
    "joan": "imagenes_plantilla/imagenes_grandes/joan.webp",
    "kounde": "imagenes_plantilla/imagenes_grandes/kounde.webp",
    "marc": "imagenes_plantilla/imagenes_grandes/marc.jpg",
    "marcus": "imagenes_plantilla/imagenes_grandes/marcus.webp",
    "martin": "imagenes_plantilla/imagenes_grandes/martin.webp",
    "olmo": "imagenes_plantilla/imagenes_grandes/olmo.webp",
    "pedri": "imagenes_plantilla/imagenes_grandes/pedri.webp",
    "raphinha": "imagenes_plantilla/imagenes_grandes/raphinha.webp",
    "robert": "imagenes_plantilla/imagenes_grandes/robert.webp",
    "ronny": "imagenes_plantilla/imagenes_grandes/roony.webp",
    "yamal": "imagenes_plantilla/imagenes_grandes/yamal.webp"
};

const jugadoresDivs = document.querySelectorAll(".contenedor-interno");
const contenedor_gigante = document.querySelector(".contenedor-gigante");
const imagen_grande = document.querySelector(".imagen-grande");

jugadoresDivs.forEach(div => {
    div.addEventListener("click", () => {
        const jugador = div.querySelector(".img-plantilla").dataset.jugador;
        const img_href = jugadores[jugador];

        imagen_grande.innerHTML = "";
        const img = document.createElement("img");
        img.setAttribute("src", img_href);
        img.setAttribute("alt", `Imagen de ${jugador}`);

        const boton = document.createElement("button");
        boton.setAttribute("id", "cerrar-imagen");
        boton.textContent = "Volver";

        imagen_grande.appendChild(img);
        imagen_grande.appendChild(boton);

        contenedor_gigante.style.display = "none";
        imagen_grande.style.display = "flex";

        boton.addEventListener("click", () => {
            imagen_grande.style.display = "none";
            imagen_grande.innerHTML = "";
            contenedor_gigante.style.display = "block";
        });
    });
});