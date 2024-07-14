const bienvenida = prompt("Indica tu nombre");

alert("Bienvenid@ a la tienda "+bienvenida);

let productos = prompt("Elije un producto: 1- microbrush para pestaña, 2- piedra de jade, 3- mini ventilador, 4- pinza vetus")

let total = 0;


function precioTotal(precio) {
    total += precio
}

switch (productos) {
    case "microbrush para pestaña":
        alert("Agregaste al carrito un Microbrush para Pestaña")
        precioTotal(6550)
        break;
    case "piedra de jade":
        alert("Agregaste al carrito una Piedra de Jade")
        precioTotal(3900)
        break;
    case "mini ventilador":
        alert("Agregaste al carrito un Mini ventilador")
        precioTotal(29950)
        break;
    case "pinza vetus":
        alert("Agregaste al carrito una Pinza Vetus")
        precioTotal(10780)
        break;
    default:
        alert("No vendemos ese producto")
    break;
}

alert("El total de tu compra es: "+total);