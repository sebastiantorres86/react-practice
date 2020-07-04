# React: Cambiar CSS en línea condicionalmente según el estado del componente

En este punto, ha visto varias aplicaciones de representación condicional y el uso de estilos en línea. Aquí hay un ejemplo más que combina ambos temas. También puede renderizar CSS condicionalmente según el estado de un componente React. Para hacer esto, verifica si hay una condición y, si esa condición se cumple, modifica el objeto de estilos asignado a los elementos JSX en el método de representación.

Es importante entender este paradigma porque es un cambio dramático del enfoque más tradicional de aplicar estilos modificando elementos DOM directamente (lo cual es muy común con jQuery, por ejemplo). En ese enfoque, debe realizar un seguimiento de cuándo cambian los elementos y también manejar directamente la manipulación real. Puede ser difícil realizar un seguimiento de los cambios, lo que puede hacer que su IU sea impredecible. Cuando establece un objeto de estilo basado en una condición, describe cómo debería verse la IU en función del estado de la aplicación. Hay un flujo claro de información que solo se mueve en una dirección. Este es el método preferido al escribir aplicaciones con React.

---

El editor de código tiene un componente de entrada controlado simple con un borde con estilo. Desea darle estilo a este borde rojo si el usuario escribe más de 15 caracteres de texto en el cuadro de entrada. Agregue una condición para verificar esto y, si la condición es válida, establezca el estilo del borde de entrada en `3px solid red`. Puede probarlo ingresando texto en la entrada.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/44/my-app)
