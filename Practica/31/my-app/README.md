# React: pasar un callback como props

Puede pasar el `state` como props a componentes secundarios, pero no está limitado a pasar datos. También puede pasar funciones de controlador o cualquier método que esté definido en un componente React a un componente secundario. Así es como permite que los componentes secundarios interactúen con sus componentes principales. Pasas métodos a un hijo como un prop normal. Se le asigna un nombre y usted tiene acceso a ese nombre de método en `this.props` en el componente secundario.

---

Hay tres componentes descritos en el editor de código. El componente `MyApp` es el padre que representará los componentes secundarios `GetInput` y `RenderInput`. Agregue el componente `GetInput` al método render en `MyApp`, luego pásele un prop llamado `input` asignado a `inputValue` desde el `state` de `MyApp`. También cree un accesorio llamado `handleChange` y pásele el manejador de entrada `handleChange`.

A continuación, agregue `RenderInput` al método de renderizado en `MyApp`, luego cree un prop llamado `input` y pase el `inputValue` del `state` a él. Una vez que haya terminado, podrá escribir el campo de `input` en el componente `GetInput`, que luego llama al método de controlador en su padre a través de `props`. Esto actualiza la entrada en el `state` del padre, que se pasa como props a ambos hijos. Observe cómo fluyen los datos entre los componentes y cómo la única fuente de verdad sigue siendo el `state` del componente principal. Es cierto que este ejemplo es un poco artificial, pero debería servir para ilustrar cómo se pueden pasar los datos y las devoluciones de llamada entre los componentes de React.

---

[Ir al próximo desafío]()
