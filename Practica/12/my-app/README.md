# React: renderizar un componente de clase al DOM

Puede recordar haber utilizado la API ReactDOM en un desafío anterior para representar elementos JSX en el DOM. El proceso para representar los componentes de React se verá muy similar. Los últimos desafíos se centraron en los componentes y la composición, por lo que el renderizado se realizó detrás de escena. Sin embargo, ninguno de los códigos de React que escriba se procesará en el DOM sin realizar una llamada a la API de ReactDOM.

Aquí hay una actualización de la sintaxis: `ReactDOM.render(componentToRender, targetNode)`. El primer argumento es el componente React que desea representar. El segundo argumento es el nodo DOM en el que desea representar ese componente.

Los componentes de react se pasan a `ReactDOM.render()` de forma un poco diferente a los elementos JSX. Para los elementos JSX, pasa el nombre del elemento que desea representar. Sin embargo, para los componentes React, debe usar la misma sintaxis que si estuviera representando un componente anidado, por ejemplo `ReactDOM.render(<ComponentToRender />, targetNode)`. Utiliza esta sintaxis tanto para componentes de clase ES6 como para componentes funcionales.

---

Los componentes de `Fruits` y `Vegetables` están definidos para usted detrás de escena. Renderice ambos componentes como elementos secundarios del componente `TypesOfFood`, luego renderice `TypesOfFood` al DOM. Hay un `div` con `id='challenge-node'` disponible para su uso.

---
