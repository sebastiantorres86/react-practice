# React: Agregar estilos en línea en React

Es posible que haya notado en el último desafío que había otras diferencias de sintaxis de los estilos en línea HTML además del atributo `style` establecido en un objeto JavaScript. Primero, los nombres de ciertas propiedades de estilo CSS usan mayúsculas y minúsculas. Por ejemplo, el último desafío establece el tamaño de la fuente con `fontSize` en lugar de `font-size`. Las palabras con guiones como `font-size` son sintaxis no válida para las propiedades de objetos de JavaScript, por lo que React usa mayúsculas y minúsculas. Como regla general, las propiedades de estilo con guiones se escriben con mayúsculas y minúsculas en JSX.

Se supone que todas los valores de propiedades de unidades de longitud (como `height`, `width` y `font-size`) están en `px`, a menos que se especifique lo contrario. Si desea usar `em`, por ejemplo, ajusta el valor y las unidades entre comillas, como `{fontSize: "4em"}`. Aparte de los valores de longitud predeterminados en `px`, todos los demás valores de propiedad deben estar entre comillas.

---

Si tiene un gran conjunto de estilos, puede asignar un `object` de estilo a una constante para mantener su código organizado. Descomente los `styles` constantes y declare un `object` con tres propiedades de estilo y sus valores. Dale al `div` un color de `"purple"`, un tamaño de fuente de `40` y un borde de `"2px solid purple"`. Luego establezca el atributo de `style` igual a la constante de `styles`.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/38/my-app)
