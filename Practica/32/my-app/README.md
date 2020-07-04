# React: use el método de ciclo de vida componentWillMount

Los componentes de React tienen varios métodos especiales que brindan oportunidades para realizar acciones en puntos específicos del ciclo de vida de un componente. Estos se denominan métodos de ciclo de vida, o hooks de ciclo de vida, y le permiten capturar componentes en ciertos momentos. Esto puede ser antes de que se procesen, antes de que se actualicen, antes de recibir props, antes de desmontar, etc. Aquí hay una lista de algunos de los principales métodos de ciclo de vida: `componentWillMount()` `componentDidMount()` `shouldComponentUpdate()` `componentDidUpdate()` `componentWillUnmount()` Las siguientes lecciones cubrirán algunos de los casos de uso básicos para estos métodos de ciclo de vida.

**Nota**: El método del ciclo de vida del `componentWillMount` quedará obsoleto en una versión futura de 16.X y se eliminará en la versión 17. ([Fuente](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html))

---

El método `componentWillMount()` se llama antes que el método `render()` cuando se monta un componente en el DOM. Registre algo en la consola dentro de `componentWillMount()`; es posible que desee tener la consola de su navegador abierta para ver el resultado.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/33/my-app)
