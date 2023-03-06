class productos{
    constructor(nombre, precio, cantidad, marca){
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.marca = marca
    }
}

let producto = []

while(producto.length < 4){
    let nombre = prompt("ingrese el nombre del producto");
    let precio = prompt("ingrese el precio del producto");
    let cantidad = prompt("ingrese la cantidad del producto");
    let  marca = prompt("ingrese la marca del producto");

    if(nombre != '' &&
    precio != '' &&
    cantidad != '' &&
    marca != ''){
        producto.push(new productos(nombre, precio, cantidad, marca))
    }
}

let tecnologia = document.getElementById("productosTecnologia")

producto.forEach(productos => {
    let lista = document.createElement("li");
    lista.innerHTML = `
    <h2>el producto es ${productos.nombre} su precio es de $${productos.precio}, su cantidad de ${productos.cantidad} unidades y su marca ${productos.marca}</h2>
    `;
    tecnologia.append(lista)
});
