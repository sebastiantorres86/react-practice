# React: crear un componente con estado

Uno de los temas más importantes en React es el `state`. El state consta de los datos que su aplicación necesita conocer, que pueden cambiar con el tiempo. Desea que sus aplicaciones respondan a los cambios de state y presenten una IU actualizada cuando sea necesario. React ofrece una buena solución para la gestión del state de las aplicaciones web modernas.

Puede crear state en un componente React declarando una propiedad `state` en la clase de componente en su `constructor`. Esto inicializa el componente con `state` cuando se crea. La propiedad `state` debe establecerse en un `object` JavaScript. Declarandola se ve así:

```jsx
this.state = {
   // describe tu estado aquí
}
```

Tiene acceso al objeto `state` durante toda la vida de su componente. Puede actualizarlo, representarlo en su interfaz de usuario y pasarlo como prop a los componentes secundarios. El objeto `state` puede ser tan complejo o tan simple como lo necesite. Tenga en cuenta que debe crear un componente de clase extendiendo `React.Component` para crear un `state` como este.

---

Hay un componente en el editor de código que intenta representar una propiedad `name` desde su `state`. Sin embargo, no hay un `state` definido. Inicialice el componente con `state` en el `constructor` y asigne su nombre a una propiedad `name`.

---

[Ir al próximo desafío]()
