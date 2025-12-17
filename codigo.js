function mostrarDatos() {
    let nombre = document.getElementById("nombre").value;
    let fechaNacimiento = new Date(document.getElementById("fecha").value);
    let sangre = document.getElementById("sangre").value;
    let alturaPulgadas = parseFloat(document.getElementById("altura").value);
    let pesoKg = parseFloat(document.getElementById("peso").value);
    let genero = document.getElementById("genero").value;

    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    let alturaCm = alturaPulgadas * 2.54;
    let pesoLb = pesoKg * 2.2;

    let icono = document.getElementById("iconoGenero");

    if (genero === "f") {
        icono.src = "femenino.jpeg";
        icono.alt = "Icono femenino";
    } else if (genero === "m") {
        icono.src = "masculino.jpeg";
        icono.alt = "Icono masculino";
    }

    document.getElementById("resultado").innerHTML =
        `<img id="iconoGenero" class="icono" src="${icono.src}">
        <p><b>Nombre Completo:</b> ${nombre}</p>
        <p><b>Tipo de sangre:</b> ${sangre}</p>
        <p><b>Altura:</b> ${alturaCm.toFixed(2)} cm</p>
        <p><b>Peso:</b> ${pesoLb.toFixed(2)} lb</p>
        <p><b>Edad:</b> ${edad} años</p>`;
}