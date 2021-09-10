En esta entrega:

> Se creo base de datos en firebase y desde app se adquieren los datos de productos y se pasan por CartCcontext a ItemList.
> ItemDetailContainer se conecta a la base de datos y pide datos solo del item indicado por params del componente (creo que seria mas simple tambien pasarselos por CartContext pero la consigna pide eso). ItemDetail sigue recibiendo los datos del producto individual por props.
> En ItemDetailContainer tuve que importar getData() por CartContext por que no se como redactar el path para importarlo desde /firebase/index.jsx (lo intente de varias formas pero no hubo caso, lo dejé comentado)
> Se quitaron los async mock con setTimeout().
> En ItemDetail se hace un query de producto específico a firebase. Me costo tomar el objeto con los datos de producto sin usar map (innecesario por que es un array con un elemento) , pero de la unica forma que me funciono fue asi.
> En la página "premium" se hace un query de solo las frutas con esa categoría (pasada por params)

Preguntas:
> Hay alguna forma de pasarle el param a la pagina de "premium" que no sea harcodeando la variable con la propiedad como hice en NavBar?















