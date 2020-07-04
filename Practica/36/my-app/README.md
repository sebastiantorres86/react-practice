# React: presentar estilos en línea

Hay otros conceptos complejos que agregan capacidades poderosas a su código React. Pero puede que se pregunte sobre el problema más simple de cómo diseñar esos elementos JSX que crea en React. Probablemente sepa que no será exactamente lo mismo que trabajar con HTML debido a [la forma en que aplica las clases a los elementos JSX](https://www.freecodecamp.org/learn/front-end-libraries/react/define-an-html-class-in-jsx).

Si importa estilos desde una hoja de estilos, no es muy diferente. Aplica una clase a su elemento JSX utilizando el atributo `className` y aplica estilos a la clase en su hoja de estilo. Otra opción es aplicar estilos en línea, que son muy comunes en el desarrollo de ReactJS.

Aplica estilos en línea a elementos JSX similares a cómo lo hace en HTML, pero con algunas diferencias JSX. Aquí hay un ejemplo de un estilo en línea en HTML:

`<div style = "color: yellow; font-size: 16px">Mellow Yellow</div>`

Los elementos JSX usan el atributo `style`, pero debido a la forma en que se transpila JSX, no puede establecer el valor en un `string`. En cambio, lo establece igual a un `object` JavaScript. Aquí hay un ejemplo:

`<div style = {{color: "yellow", fontSize: 16}}>Mellow Yellow</div>`

Observa cómo usa camelCase la propiedad "fontSize"? Esto se debe a que React no aceptará claves kebab-case en el objeto de estilo. React aplicará el nombre de propiedad correcto para nosotros en el HTML.

---

Agregue un atributo `style` al `div` en el editor de código para darle al texto un color rojo y un tamaño de fuente de 72px.

Tenga en cuenta que, opcionalmente, puede establecer el tamaño de fuente como un número, omitiendo las unidades "px" o escribirlo como "72px".

---

[Ir al próximo desafío]()
