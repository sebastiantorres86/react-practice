# React: Use Array.map() para renderizar elementos dinámicamente

La representación condicional es útil, pero es posible que necesite sus componentes para representar una cantidad desconocida de elementos. A menudo, en la programación reactiva, un programador no tiene forma de saber cuál es el estado de una aplicación hasta el tiempo de ejecución, porque mucho depende de la interacción del usuario con ese programa. Los programadores necesitan escribir su código para manejar correctamente ese estado desconocido con anticipación. El uso de `Array.map()` en React ilustra este concepto.

Por ejemplo, crea una aplicación simple "Lista de tareas". Como programador, no tiene forma de saber cuántos elementos podría tener un usuario en su lista. Debe configurar su componente para representar dinámicamente el número correcto de elementos de la lista mucho antes de que alguien que usa el programa decida que hoy es el día del lavado.

---

El editor de código tiene la mayor parte del componente `MyToDoList` configurado. Parte de este código debería resultarle familiar si completa el desafío de formulario controlado. Notarás un `textarea` y un `button`, junto con un par de métodos que rastrean sus estados, pero todavía no se muestra nada en la página.

Dentro del `constructor`, cree un objeto `this.state` y defina dos estados: `userInput` debe inicializarse como una cadena vacía y `toDoList` debe inicializarse como una matriz vacía. A continuación, elimine el comentario en el método `render()` junto a la variable `items`. En su lugar, asigne sobre la matriz `toDoList` almacenada en el estado interno del componente y renderice dinámicamente un `li` para cada elemento. Intente ingresar la cadena `eat, code, sleep, repeat` en el `textarea`, luego haga clic en el botón y vea qué sucede.

**Nota**: Es posible que sepa que todos los elementos secundarios hermanos creados por una operación de mapeo como esta necesitan ser provistos con un atributo `key` único. No se preocupe, este es el tema del próximo desafío.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/45/my-app)
