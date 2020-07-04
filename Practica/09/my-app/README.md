# React: crear un componente con composición

Ahora veremos cómo podemos componer múltiples componentes React juntos. Imagine que está creando una aplicación y ha creado tres componentes, un `NavBar`, un `Dashboard` y un `Footer`.

Para componer estos componentes juntos, puede crear un componente _padre_ de la `App` que represente cada uno de estos tres componentes como elementos _hijos_. Para representar un componente como elemento secundario en un componente React, debe incluir el nombre del componente escrito como una etiqueta HTML personalizada en el JSX. Por ejemplo, en el método `render`, podría escribir:

```jsx
return (
  <App>
    <Navbar />
    <Dashboard />
    <Footer />
  </App>
);
```

Cuando React encuentra una etiqueta HTML personalizada que hace referencia a otro componente (un nombre de componente envuelto en `< />` como en este ejemplo), muestra el marcado para ese componente en la ubicación de la etiqueta. Esto debería ilustrar la relación padre / hijo entre el componente `App` y la `Navbar`, el `Dashboard` y el `Footer`.

---

En el editor de código, hay un componente funcional simple llamado `ChildComponent` y un componente de clase llamado `ParentComponent`. Componga los dos juntos representando el `ChildComponent` dentro del `ParentComponent`. Asegúrese de cerrar la etiqueta `ChildComponent` con una barra diagonal.

**Nota**: `ChildComponent` se define con una función de flecha ES6 porque esta es una práctica muy común cuando se usa React. Sin embargo, sepa que esto es solo una función. Si no está familiarizado con la sintaxis de la función de flecha, consulte la sección de JavaScript.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/11/my-app)