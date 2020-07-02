# React: pasar props a un componente funcional sin estado

Los desafíos anteriores cubrieron mucho sobre la creación y composición de elementos JSX, componentes funcionales y componentes de clase de estilo ES6 en React. Con esta base, es hora de ver otra característica muy común en React: **props**. En React, puede pasar props o propiedades a componentes secundarios. Supongamos que tiene un componente `App` que representa un componente secundario llamado `Welcome`, que es un componente funcional sin estado. Puede pasar `Welcome` a una propiedad `user` escribiendo:

```jsx
<App>
  <Welcome user="Mark" />
</App>
```

Utiliza **atributos HTML personalizados** creados por usted y respaldados por React para pasarlos al componente. En este caso, la propiedad `user` creada se pasa al componente `Welcome`. Dado que `Welcome` es un componente funcional sin estado, tiene acceso a este valor de la siguiente manera:

```jsx
const Welcome = (props) => <h1> Hello, {props.user}! </h1>;
```

Es estándar llamar a este valor `props` y cuando se trata de componentes funcionales sin estado, básicamente lo considera como un argumento para una función que devuelve JSX. Puede acceder al valor del argumento en el cuerpo de la función. Con los componentes de clase, verá que esto es un poco diferente.

---

Hay componentes `Calendar` y `CurrentDate` en el editor de código. Al representar `CurrentDate` desde el componente `Calendar`, pase una propiedad `date` asignada a la fecha actual desde el objeto `Date` de JavaScript. Luego acceda a este `prop` en el componente `CurrentDate`, mostrando su valor dentro de las etiquetas `p`. Tenga en cuenta que para que los valores `prop` se evalúen como JavaScript, deben estar entre corchetes, por ejemplo, `date={Date()}`.

---

[Ir al próximo desafío]()
