# React: utilizar el método del ciclo de vida componenteDidMount

La mayoría de los desarrolladores web, en algún momento, necesitan llamar a un endpoint API para recuperar datos. Si está trabajando con React, es importante saber dónde realizar esta acción.

La mejor práctica con React es realizar llamadas API o cualquier llamada a su servidor en el método de ciclo de vida `componenteDidMount()`. Este método se llama después de que un componente se monte en el DOM. Cualquier llamada a `setState()` aquí activará una nueva representación de su componente. Cuando llama a una API en este método, y establece su estado con los datos que devuelve la API, se activará automáticamente una actualización una vez que reciba los datos.

---

Hay una llamada simulada de API en `componentDidMount()`. Establece el estado después de 2.5 segundos para simular llamar a un servidor para recuperar datos. Este ejemplo solicita el total de usuarios activos actuales para un sitio. En el método de renderizado, renderice el valor de `activeUsers` en el `h1`. Mire lo que sucede en la vista previa y siéntase libre de cambiar el tiempo de espera para ver los diferentes efectos.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/34/my-app)
