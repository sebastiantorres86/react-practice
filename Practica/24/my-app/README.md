# React: Establecer state con this.setState

Los desafíos anteriores cubrían el componente `state` y cómo inicializar el state en el `constructor`. También hay una manera de cambiar el `state` del componente. React proporciona un método para actualizar el `state` del componente llamado `setState`. Llame al método `setState` dentro de su componente de clase de la siguiente manera: `this.setState()`, pasando un objeto con pares clave-valor. Las claves son sus propiedades de estado y los valores son los datos de state actualizados. Por ejemplo, si estuviéramos almacenando un `username` en state y quisiéramos actualizarlo, se vería así:

```jsx
this.setState({
  username: "Lewis",
});
```

React espera que nunca modifique el `state` directamente, en su lugar, use siempre `this.setState()` cuando ocurran cambios de state. Además, debe tener en cuenta que React puede agrupar varias actualizaciones de state para mejorar el rendimiento. Lo que esto significa es que las actualizaciones de state a través del método `setState` pueden ser asíncronas. Hay una sintaxis alternativa para el método `setState` que proporciona una solución a este problema. Esto rara vez se necesita, ¡pero es bueno tenerlo en cuenta! Consulte la [documentación de React](https://facebook.github.io/react/docs/state-and-lifecycle.html) para obtener más detalles.

---

Hay un elemento `button` en el editor de código que tiene un controlador `onClick()`. Este controlador se activa cuando `button` recibe un evento de clic en el navegador y ejecuta el método `handleClick` definido en `MyComponent`. Dentro del método `handleClick`, actualice el `state` del componente usando `this.setState()`. Establezca la propiedad `name` en `state` para que sea igual a la cadena `React Rocks!`.

Haga clic en el botón y vea la actualización del estado renderizado. No se preocupe si no comprende completamente cómo funciona el código del controlador de clics en este momento. Está cubierto en los próximos desafíos.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/25/my-app)
