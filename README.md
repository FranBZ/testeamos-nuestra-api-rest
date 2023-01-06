# Testeamos nuestra api rest

## Consigna:
Revisar en forma completa el proyecto entregable que venimos realizando, refactorizando y reformando
todo lo necesario para llegar al esquema de servidor API RESTful en capas planteado en esta clase.
Asegurarse de dejar al servidor bien estructurado con su ruteo / controlador, negocio, validaciones,
persistencia y configuraciones (preferentemente utilizando en la codificación clases de ECMAScript).
No hace falta realizar un cliente ya que utilizaremos tests para verificar el correcto funcionamiento de las
funcionalidades desarrolladas.

- Desarrollar un cliente HTTP de pruebas que utilice Axios para enviar peticiones, y realizar un test de la
funcionalidad hacia la API Rest de productos, verificando la correcta lectura de productos disponibles,
incorporación de nuevos productos, modificación y borrado.
- Realizar el cliente en un módulo independiente y desde un código aparte generar las peticiones
correspondientes, revisando los resultados desde la base de datos y en la respuesta del servidor obtenida
en el cliente HTTP.
- Luego, realizar las mismas pruebas, a través de un código de test apropiado, que utilice mocha, chai y
Supertest, para probar cada uno de los métodos HTTP de la API Rest de productos.
- Escribir una suite de test para verificar si las respuestas a la lectura, incorporación, modificación y borrado
de productos son las apropiadas. Generar un reporte con los resultados obtenidos de la salida del test.

## Como ejecutar el proyecto

- Primero debarás clonar y correr el siguiente proyecto (Proyecto-Final)[https://github.com/FranBZ/proyecto-final-3er-entrega.git]
- Una vez tengas corriendo el proyeco anterior deberas clonar este reopsitorio, dirigirte a la carpeta donde se encuentra.
- Es importante que antes de ejecutar el proyecto leas los comentarios del archivo ``` axios.js ``` ubicado en la raiz, 
y ``` supertes.test.js ``` ubicado en la carpeta ```  test ```.
- Luego abrir una consola ubicada en el proyecto y ejecutar el comando ``` npm test ```
- Deberas obtener los siguientes resultados [Resultados de los test](https://github.com/FranBZ/testeamos-nuestra-api-rest/tree/main/imagen-test/testDesafio.PNG)
