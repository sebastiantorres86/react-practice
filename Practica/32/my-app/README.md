# React: Renderizar state en la interfaz de usuario de otra manera

Hay otra forma de acceder al `state` en un componente. En el método `render()`, antes de la declaración `return`, puede escribir JavaScript directamente. Por ejemplo, podría declarar funciones, acceder a datos desde `state` o `props`, realizar cálculos sobre estos datos, etc. Luego, puede asignar cualquier dato a las variables, a las que tiene acceso en la declaración `return`.

---

En el método render de `MyComponent`, defina un `const` llamado `name` y configúrelo igual al valor del nombre en el `state` del componente. Debido a que puede escribir JavaScript directamente en esta parte del código, no tiene que encerrar esta referencia entre llaves.

Luego, en la declaración return, renderice este valor en una etiqueta `h1` usando la variable `name`. Recuerde, debe usar la sintaxis JSX (llaves para JavaScript) en la declaración return.

---

[Ir al próximo desafío]()
