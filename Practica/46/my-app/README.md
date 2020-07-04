# React: utilice Array.filter () para filtrar dinámicamente una matriz

El método de matriz `map` es una herramienta poderosa que usará a menudo cuando trabaje con React. Otro método relacionado con `map` es `filter`, que filtra el contenido de una matriz en función de una condición y luego devuelve una nueva matriz. Por ejemplo, si tiene una serie de usuarios que tienen una propiedad `online` que se puede establecer en `true` o `false`, puede filtrar solo aquellos usuarios que están en línea escribiendo:

`let onlineUsers = users.filter(user => user.online);`

---

En el editor de código, el `state` de `MyComponent` se inicializa con una matriz de usuarios. Algunos usuarios están en línea y otros no. Filtre la matriz para que solo vea los usuarios que están en línea. Para hacer esto, primero use `filter` para devolver una nueva matriz que contenga solo los usuarios cuya propiedad `online` sea `true`. Luego, en la variable `renderOnline`, mapee sobre la matriz filtrada y devuelva un elemento `li` para cada usuario que contenga el texto de su `username`. Asegúrese de incluir también una `key` única, como en los últimos desafíos.

---

[Ir al próximo desafío]()
