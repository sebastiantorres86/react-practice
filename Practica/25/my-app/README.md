# React: vincular 'this' a un método de clase

Además de establecer y actualizar el `state`, también puede definir métodos para su clase de componente. Un método de clase generalmente necesita usar la palabra clave `this` para poder acceder a las propiedades de la clase (como `state` y `props`) dentro del alcance del método. Hay algunas formas de permitir que sus métodos de clase accedan a `this`.

Una forma común es vincular `this` explícitamente en el constructor para que `this` se vincule a los métodos de clase cuando se inicializa el componente. Es posible que haya notado que el último desafío utilizó `this.handleClick = this.handleClick.bind(this)` para su método `handleClick` en el constructor. Luego, cuando llama a una función como `this.setState()` dentro de su método de clase, `this` se refiere a la clase y no estará `undefined`.

**Nota**: La palabra clave `this` es uno de los aspectos más confusos de JavaScript, pero desempeña un papel importante en React. Aunque su comportamiento aquí es totalmente normal, estas lecciones no son el lugar para una revisión profunda de `this`, así que por favor, consulte otras lecciones si lo anterior es confuso.

---

El editor de código tiene un componente con un `state` que realiza un seguimiento del texto. También tiene un método que le permite configurar el texto en `"You clicked!"`. Sin embargo, el método no funciona porque está usando la palabra clave `this` que no está definida. Arregle esto vinculando explícitamente `this` al método `handleClick()` en el constructor del componente.

A continuación, agregue un controlador de clic al elemento `button` en el método render. Debería activar el método `handleClick()` cuando el botón recibe un evento click. Recuerde que el método que pasa al controlador `onClick` necesita llaves porque debe interpretarse directamente como JavaScript.

Una vez que complete los pasos anteriores, debería poder hacer clic en el botón y ver `You clicked!`

---

[Ir al próximo desafío]()
