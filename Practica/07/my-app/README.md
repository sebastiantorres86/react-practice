# React: crear un componente funcional sin estado

Los componentes son el núcleo de React. Todo en React es un componente y aquí aprenderás cómo crear uno.

Hay dos formas de crear un componente React. La primera forma es usar una función de JavaScript. La definición de un componente de esta manera crea un componente funcional sin estado. El concepto de estado en una aplicación se cubrirá en desafíos posteriores. Por ahora, piense en un componente sin estado como uno que puede recibir datos y representarlos, pero no gestiona ni realiza un seguimiento de los cambios en esos datos. (Cubriremos la segunda forma de crear un componente React en el próximo desafío).

Para crear un componente con una función, simplemente escriba una función de JavaScript que devuelva JSX o `null`. Una cosa importante a tener en cuenta es que React requiere que el nombre de su función comience con una letra mayúscula. Aquí hay un ejemplo de un componente funcional sin estado que asigna una clase HTML en JSX:

```jsx
// Después de ser transpilado, el <div> tendrá una clase CSS de 'customClass'
const DemoComponent = function () {
  return <div className="customClass" />;
};
```

Debido a que un componente JSX representa HTML, puede juntar varios componentes para crear una página HTML más compleja. Esta es una de las principales ventajas de la arquitectura de componentes que proporciona React. Le permite componer su IU a partir de muchos componentes separados y aislados. Esto facilita la construcción y el mantenimiento de interfaces de usuario complejas.

---

El editor de código tiene una función llamada `MyComponent`. Complete esta función para que devuelva un único elemento `div` que contenga una cadena de texto.

**Nota**: El texto se considera un elemento secundario del elemento `div`, por lo que no podrá usar una etiqueta de cierre automático.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/08/my-app)
