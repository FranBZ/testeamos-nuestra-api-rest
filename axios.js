const axios = require('axios')

/*++++++++++++++++++++++++++++++++++
+++  PRUEBAS AXIOS EN PRODUCTOS  +++
++++++++++++++++++++++++++++++++++*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++  ES NECESARIOS PRECARGAR DOS PRODUCTOS DE PRUEBA PARA COMENZAR LA EJECUCION    +++
+++  EL PRIMERO SERA PARA CONSULTAR POR ID, EL SEGUNDO SERA PARA ACTUALIZAR, Y EL  +++
+++  TERCERO SERA PARA BORRAR                                                      +++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++  SI VUELVES A REPETIR LA PRUEBA DEBERAS CAMBIAR EL PRODUCTO PARA ACTUALIZAR, PARA NOTAR CAMBIOS,  +++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

let idProductoConsultar = '6388c47869bcbb814ae8ecf4'
let idProductoActualizar = '63a0c8172260c5e093eef3f2'
let idProductoBorrar = '63b5d797585b1e9129d362cd'

////////////////////////////////////////////////////////////////////////////////////

async function getProductos() {
    try {
        const { status, data } = await axios.get('http://localhost:8080/api/productos')
        return { status, data }
    } catch (error) {
        console.log(error)
    }
}

//getProductos()

async function getProductoById() {
    try {
        const { status, data } = await axios.get(`http://localhost:8080/api/productos/${idProductoConsultar}`)
        return { status, data }
    } catch (error) {
        console.log(error)
    }
}

// getProductoById()

async function guardarProducto() {
    const datos = {
        name: "axios prod",
        price: 6321,
        urlImage: "axios image",
        description: "axios description",
        code: 99999,
        stock: 333
    }
    try {
        const { status, data } = await axios.post('http://localhost:8080/api/productos', datos)
        return { status, data }
    } catch (error) {
        console.log(error)
    }
}

// guardarProducto()

async function borrarProductoById() {
    try {
        // Deberas colocar a mano el id del producto guardado en el punto anterior
        const { status, data } = await axios.delete(`http://localhost:8080/api/productos/${idProductoBorrar}`) // <--- Reemplazar este id
        return { status, data }
    } catch (error) {
        console.log(error)
    }
}

// borrarProductoById()

async function actualizarProductoById() {
    const datos = {
        name: "axios prod updated",
        price: 6321,
        urlImage: "axios image updated",
        description: "axios description updated",
        code: 99999,
        stock: 333
    }
    try {
        const { status, data } = await axios.put(`http://localhost:8080/api/productos/${idProductoActualizar}`, datos)
        return { status, data }
    } catch (error) {
        console.log(error)
    }
}

// actualizarProductoById()

/*++++++++++++++++++++++++++++++++
+++  PRUEBAS AXIOS EN CARRITO  +++
++++++++++++++++++++++++++++++++*/

async function getCarritos() {
    try {
        const { status, data } = await axios.get('http://localhost:8080/api/carrito')
        console.log(status, data)
    } catch (error) {
        console.log(error)
    }
}

// getCarritos()

async function getCarritoById() {
    try {
        const { status, data } = await axios.get('http://localhost:8080/api/carrito/63b5c7a64aa1f36e2df14e71')
        console.log(status, data)
    } catch (error) {
        console.log(error)
    }
}

// getCarritoById()

async function guardarCarrito() {
    try {
        const { status, data } = await axios.post('http://localhost:8080/api/carrito/638504c1f6c48f2e5ed8865e')
        console.log(status, data)
    } catch (error) {
        console.log(error)
    }
}

// guardarCarrito()

async function guardarProductoEnCarrito() {
    try {
        const { status, data } = await axios.post('http://localhost:8080/api/carrito/63b5c7a64aa1f36e2df14e71/productos/63b5d797585b1e9129d362cd')
        console.log(status, data)
    } catch (error) {
        console.log(error)
    }
}

// guardarProductoEnCarrito()

async function borrarCarritoById() {
    try {
        const { status, data } = await axios.delete('http://localhost:8080/api/carrito/63b5dfd4585b1e9129d362d5')
        console.log(status, data)
    } catch (error) {
        console.log(error)
    }
}

// borrarCarritoById()

async function productosDeCarrito() {
    try {
        const { status, data } = await axios.get('http://localhost:8080/api/carrito/63b5c7a64aa1f36e2df14e71/productos/')
        console.log(status, data)
    } catch (error) {
        console.log(error)
    }
}

// productosDeCarrito()

async function borrarProductoDeCarrito() {
    try {
        const { status, data } = await axios.delete('http://localhost:8080/api/carrito/63b5c7a64aa1f36e2df14e71/productos/63b5d797585b1e9129d362cd')
        console.log(status, data)
    } catch (error) {
        console.log(error)
    }
}

// borrarProductoDeCarrito()

async function comprarCarrito() {
    try {
        const { status, data } = await axios.post('http://localhost:8080/api/carrito/comprar/63b5c7a64aa1f36e2df14e71')
        console.log(status, data)
    } catch (error) {
        console.log(error)
    }
}

// comprarCarrito()

module.exports = {
    getProductos,
    getProductoById,
    guardarProducto,
    actualizarProductoById,
    borrarProductoById
}