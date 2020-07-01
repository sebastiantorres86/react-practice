# React: renderizar elementos HTML al DOM

Hasta ahora, has aprendido que JSX es una herramienta conveniente para escribir HTML legible dentro de JavaScript. Con React, podemos renderizar este JSX directamente al HTML DOM utilizando la API de renderizado de React conocida como ReactDOM.

ReactDOM ofrece un método simple para representar elementos React ante el DOM que se ve así: `ReactDOM.render(componentToRender, targetNode)`, donde el primer argumento es el elemento o componente React que desea renderizar, y el segundo argumento es el nodo DOM que desea representar el componente.

Como era de esperar, se debe llamar a `ReactDOM.render()` después de las declaraciones de elementos JSX, al igual que debe declarar las variables antes de usarlas.

---

El editor de código tiene un componente JSX simple. Use el método `ReactDOM.render()` para representar este componente en la página. Puede pasar elementos JSX definidos directamente como primer argumento y usar `document.getElementById()` para seleccionar el nodo DOM para representarlos. Hay un `div` con `id='challenge-node'` disponible para su uso. Asegúrese de no cambiar la constante `JSX`.

---

[Ir al próximo desafío]()
