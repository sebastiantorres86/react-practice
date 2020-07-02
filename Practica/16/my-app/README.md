# React: usar props predeterminados

React también tiene una opción para establecer accesorios predeterminados. Puede asignar props predeterminados a un componente como una propiedad en el componente mismo y React asigna el accesorio predeterminado si es necesario. Esto le permite especificar cuál debería ser un valor de apoyo si no se proporciona ningún valor explícitamente. Por ejemplo, si declara `MyComponent.defaultProps = { location: 'San Francisco' }`, ha definido un accesorio de ubicación que se establece en la cadena `San Francisco`, a menos que especifique lo contrario. React asigna props predeterminados si los props no están definidos, pero si pasa `null` como el valor de un accesorio, seguirá siendo `null`.

---

El editor de código muestra un componente `ShoppingCart`. Defina props predeterminados en este componente que especifiquen un prop `items` con un valor de `0`.

---

[Ir al próximo desafío]()
