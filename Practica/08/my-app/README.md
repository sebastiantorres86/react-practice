# React: crear un componente React

La otra forma de definir un componente React es con la sintaxis de ES6 `class`. En el siguiente ejemplo, `Kitten` extiende `React.Component`:

```jsx
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1> Hola </h1>;
  }
}
```

Esto crea una clase ES6 `Kitten` que extiende la clase `React.Component`. Por lo tanto, la clase `Kitten` ahora tiene acceso a muchas funciones útiles de React, como el estado local y los hooks del ciclo de vida. No se preocupe si aún no está familiarizado con estos términos, se tratarán con mayor detalle en desafíos posteriores. Observe también que la clase `Kitten` tiene un `constructor` definido dentro que llama a `super()`. Utiliza `super()` para llamar al constructor de la clase padre, en este caso `React.Component`. El constructor es un método especial utilizado durante la inicialización de los objetos que se crean con la palabra clave `class`. Se recomienda llamar al `constructor` de un componente con `super` y pasar `props` a ambos. Esto asegura que el componente se inicialice correctamente. Por ahora, sepa que es estándar incluir este código. Pronto verá otros usos para el constructor, así como `props`.

---

`MyComponent` se define en el editor de código utilizando la sintaxis de clase. Termine de escribir el método `render` para que devuelva un elemento `div` que contenga un `h1` con el texto `Hello React!`.

---

[Ir al próximo desafío]()