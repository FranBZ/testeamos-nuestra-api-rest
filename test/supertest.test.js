const request = require('supertest')

const req = request('http://localhost:8080/api/productos')

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

describe('Ecommerce - Prueba Supertest', function () {

    describe('Suit Producto - Supertest - axios.js', function () {

        it("CONSULTAR TODOS LOS PRODUCTOS - contiene status 200", (done) => {
            req.get("/")
                .set("Accept", "application/json")
                .expect("Content-Type", /json/)
                .expect(200, done)
        })

        it("CONSULTAR UN PRODUCTO contiene un status 200 un array con un producto dentro", (done) => {
            req.get(`/${idProductoConsultar}`)
                .set("Accept", "application/json")
                .expect("Content-Type", /json/)
                .expect(200)
                .expect([{
                    "_id": "6388c47869bcbb814ae8ecf4",
                    "name": "redragon dragon fizz pro arg",
                    "price": 12000,
                    "urlImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6hXUpsdm7gQQ4guScVtev3fL06oQrtgObg&usqp=CAU",
                    "description": "teclado mecanico 60% RGB QWERTY",
                    "code": 658,
                    "stock": 50,
                    "createdAt": "2022-12-01T15:12:56.415Z",
                    "updatedAt": "2022-12-01T15:12:56.415Z"
                }], done)
        })

        it("GUARDAR PRODUCTO - contiene status 200 y y un array con un mensaje de exito", (done) => {
            const data = {
                name: "axios prod",
                price: 6321,
                urlImage: "axios image",
                description: "axios description",
                code: 99999,
                stock: 333
            }
            req.post("/")
                .send(data)
                .set("Accept", "application/json")
                .expect("Content-Type", /json/)
                .expect(200)
                .expect({ messaje: 'producto guardado con exito' })
                .end((err) => {
                    if (err) return done(err)
                    done()
                })
        })

        it("ACTUALIZAR PRODUCTO - contiene status 200 y y un array con un mensaje de exito", (done) => {
            const data = {
                name: "axios prod updated",
                price: 6321,
                urlImage: "axios image updated",
                description: "axios description updated",
                code: 99999,
                stock: 333
            }
            req.put(`/${idProductoActualizar}`)
                .send(data)
                .set("Accept", "application/json")
                .expect("Content-Type", /json/)
                .expect(200)
                .expect({ messaje: 'producto actualizado con exito' })
                .end((err) => {
                    if (err) return done(err)
                    done()
                })
        })

        it("BORRAR PRODUCTO - contiene status 200 y y un array con un mensaje de exito", (done) => {
            req.delete(`/${idProductoBorrar}`)
                .set("Accept", "application/json")
                .expect("Content-Type", /json/)
                .expect(200)
                .expect({ messaje: 'producto borrado con exito' }, done)
        })
    })
})
