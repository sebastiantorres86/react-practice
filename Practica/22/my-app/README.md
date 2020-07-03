# React: Renderizar state en la interfaz de usuario

Una vez que defina el state inicial de un componente, puede mostrar cualquier parte de él en la interfaz de usuario que se representa. Si un componente tiene state, siempre tendrá acceso a los datos en `state` en su método `render()`. Puede acceder a los datos con `this.state`.

Si desea acceder a un valor de estado dentro del `return` del método render, debe encerrar el valor entre llaves.

El `state` es una de las características más poderosas de los componentes en React. Le permite rastrear datos importantes en su aplicación y representar una interfaz de usuario en respuesta a los cambios en estos datos. Si sus datos cambian, su UI cambiará. React utiliza lo que se llama un DOM virtual, para realizar un seguimiento de los cambios detrás de escena. Cuando se actualizan los datos del state, se activa una nueva representación de los componentes utilizando esos datos, incluidos los componentes secundarios que recibieron los datos como prop. React actualiza el DOM real, pero solo cuando es necesario. Esto significa que no tiene que preocuparse por cambiar el DOM. Simplemente declaras cómo debería ser la IU.

Tenga en cuenta que si hace que un componente tenga state, ningún otro componente tiene conocimiento de su `state`. Su `state` está completamente encapsulado o es local a ese componente, a menos que pase datos de state a un componente secundario como `props`. Esta noción de `state` encapsulado es muy importante porque le permite escribir cierta lógica, luego tener esa lógica contenida y aislada en un lugar en su código.

---

En el editor de código, `MyComponent` ya tiene state. Defina una etiqueta `h1` en el método render del componente que representa el valor del name del state del componente.

**Nota**: `h1` solo debe representar el valor del `state` y nada más. En JSX, cualquier código que escriba con llaves `{}` se tratará como JavaScript. Entonces, para acceder al valor desde el `state`, solo encierre la referencia entre llaves.

---

[Ir al próximo desafío]()
