# React: usar state para alternar un elemento

A veces es posible que necesite saber el state anterior al actualizar el state. Sin embargo, las actualizaciones de state pueden ser asíncronas; esto significa que React puede agrupar múltiples llamadas `setState()` en una única actualización. Esto significa que no puede confiar en el valor anterior de `this.state` o `this.props` al calcular el siguiente valor. Por lo tanto, no debe usar un código como este:

```jsx
this.setState({
  counter: this.state.counter + this.props.increment
});
```

En cambio, debe pasar a `setState`, una función que le permite acceder a state y props. El uso de una función con `setState` garantiza que está trabajando con los valores más actuales de state y props. Esto significa que lo anterior debe reescribirse como:

```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

También puede usar una forma sin `props` si solo necesita el `state`:

```jsx
this.setState((state) => ({
  counter: state.counter + 1
}));
```

Tenga en cuenta que debe ajustar el objeto literal entre paréntesis, de lo contrario, JavaScript cree que es un bloque de código.

---

`MyComponent` tiene una propiedad `visibility` que se inicializa en `false`. El método render devuelve una vista si el valor de `visibility` es verdadero y una vista diferente si es falso.

Actualmente, no hay forma de actualizar la propiedad `visibility` en el `state` del componente. El valor debe alternar entre verdadero y falso. Hay un controlador de clics en el botón que activa un método de clase llamado `toggleVisibility()`. Pase una función a `setState` para definir este método de modo que el `state` de `visibility` cambie al valor opuesto cuando se llame al método. Si `visibility` es `false`, el método lo establece en `true` y viceversa.

Finalmente, haga clic en el botón para ver la representación condicional del componente en función de su `state`.

**Sugerencia**: ¡No olvide vincular la palabra clave `this` al método en el constructor!

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/27/my-app)
