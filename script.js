window.onload = function () {

    let datos = {};
    datos['dni'] = prompt("Introduce tu DNI:");
    datos['nom'] = prompt("Introduce tu nombre completo:");
    datos['email'] = prompt("Introduce tu email:");

    if (datos['nom'].split(" ").length !== 2)
        alert("nom de client ha de tenir 2 paraules");

    if (datos['dni'].length !== 9)
        alert("el dni ha de tenir 8 números i una lletra al final");

    if (!datos['email'].includes("@"))
        alert("email de client ha de seguir el patró text@text.text");

    let capitalizarPalabras = function (cadena) {
        return cadena.split(" ").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
    };

    let dniMayuscula = (dni) => dni.slice(0, -1) + dni.slice(-1).toUpperCase();

    alert(
        "Datos del cliente:\n" +
        "DNI: " + dniMayuscula(datos['dni']) + "\n" +
        "Nombre: " + capitalizarPalabras(datos['nom']) + "\n" +
        "Email: " + datos['email']
    );

};
