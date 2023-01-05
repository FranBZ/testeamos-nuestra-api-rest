const assert = require('assert')
const {
  getProductos,
  getProductoById,
  guardarProducto,
  actualizarProductoById,
  borrarProductoById
} = require('../axios.js')


describe('Ecommerce - Prueba Mocha', function () {

  describe('Suit Producto - axios.js', function () {

    it('CONSULTAR TODOS LOS PRODUCTOS - contiene status 200 y y un array', async function () {
      const { status, data } = await getProductos()
      assert.equal(status, 200)
      assert.equal(typeof (data), 'object')
    })

    it('CONSULTAR UN PRODUCTO contiene un status 200 un array con un producto dentro', async function () {
      const { status, data } = await getProductoById()
      assert.equal(status, 200)
      assert.equal(typeof (data), 'object')
      assert.equal(data.length, 1)
      assert.equal(JSON.stringify(data[0]), JSON.stringify({
        "_id": "6388c47869bcbb814ae8ecf4",
        "name": "redragon dragon fizz pro arg",
        "price": 12000,
        "urlImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6hXUpsdm7gQQ4guScVtev3fL06oQrtgObg&usqp=CAU",
        "description": "teclado mecanico 60% RGB QWERTY",
        "code": 658,
        "stock": 50,
        "createdAt": "2022-12-01T15:12:56.415Z",
        "updatedAt": "2022-12-01T15:12:56.415Z"
    }))
    })

    it('GUARDAR PRODUCTO - contiene status 200 y y un array con un mensaje de exito', async function () {
      const { status, data } = await guardarProducto()
      assert.equal(status, 200)
      assert.equal(typeof (data), 'object')
      assert.equal(JSON.stringify(data), JSON.stringify({ messaje: 'producto guardado con exito' }))
    })

    it('ACTUALIZAR PRODUCTO - contiene status 200 y y un array con un mensaje de exito', async function () {
      const { status, data } = await actualizarProductoById()
      assert.equal(status, 200)
      assert.equal(typeof (data), 'object')
      assert.equal(JSON.stringify(data), JSON.stringify({ messaje: 'producto actualizado con exito' }))
    })

    it('BORRAR PRODUCTO - contiene status 200 y y un array con un mensaje de exito', async function () {
      const { status, data } = await borrarProductoById()
      assert.equal(status, 200)
      assert.equal(typeof (data), 'object')
      assert.equal(JSON.stringify(data), JSON.stringify({ messaje: 'producto borrado con exito' }))
    })
  })
})