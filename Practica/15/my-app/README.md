# React: pasar un array como Props

El último desafío demostró cómo pasar información de un componente primario a un componente secundario como `props` o propiedades. Este desafío analiza cómo se pueden pasar los arrays como `props`. Para pasar un array a un elemento JSX, debe tratarse como JavaScript y envolverse entre llaves.

```jsx
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

El componente hijo tiene acceso a la propiedad array `colors`. Los métodos de array como `join()` se pueden usar al acceder a la propiedad. `const ChildComponent = (props) =><p> {props.colors.join(',')}</p>` Esto unirá todos los elementos del array `colors` en una cadena separada por comas y producirá: `<p>gree, blue, red</p>` Más adelante, aprenderemos sobre otros métodos comunes para representar matrices de datos en React.

---

Hay componentes `List` y `ToDo` en el editor de código. Al renderizar cada `List` desde el componente `ToDo`, pase una propiedad `tasks` asignada a una serie de tareas pendientes, por ejemplo `["walk dog", "workout"]`. Luego acceda al array `tasks` en el componente `List`, mostrando su valor dentro del elemento `p`. Use `join(",")` para mostrar los array `props.tasks` en el elemento `p` como una lista separada por comas. La lista de hoy debe tener al menos 2 tareas y la de mañana debe tener al menos 3 tareas.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/16/my-app)
