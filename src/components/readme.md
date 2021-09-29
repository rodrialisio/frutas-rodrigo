El usuario puede elegir un producto y ver sus detalles (descripcióm, foto, precio).

En el detalle se puede selectar la cantidad que se desea comprar (se impide que aumente la cantidad por encima del stock verificándolo al clickear +, y se impide que descienda por debajo de 0 al clickear -).

Al enviar un producto al carrito (objeto manipulado desde varias páginas usando su contexto) se puede visualizar su contenido (boton ver compra / cartwidget de navbar) o regresar a la lista de productos. El carrito indica la cantidad de productos cargados con un badge yno es visible cuando no tiene productos.

Al confirmar la compra en la pagina de carrito se debe llenar un formulario que verifica campos llenos y direcciones de e-mail coincidentes para enviar el pedido.

Tanto la lista de productos como las ordenes enviadas son almacenadas como colecciones de una base de datos de firebase.

Se utilizan los params de los productos selectados para navegar entre paginas usando react router, tantpo para ver detalles de productos como para listados (divididos en categorías "todos" y "premium").

Si se ingresa manualmente una ruta correspondiente a un producto inexistente se da aviso con un mensaje para volver a la página principal.

Al enviar un pedido se regresa el código generado por firebase para su documento correspondiente mediante alert y consola, informando que el usuario recibirá un mail de confirmación con todos los datos de su compra.

La última orden enviada queda almacenada en el Local Storage.

Librerias:
Bootstrap y react-spring: Se utilizan para mejorar el styling, dar efectos de entrada a los componentes y dar funcionalidades como el dropdown del navbar.
Font awesome: se utilizaron varios íconos de esta libreria (cart y logos de redes sociales) para evitar tener que usar imágenes.















