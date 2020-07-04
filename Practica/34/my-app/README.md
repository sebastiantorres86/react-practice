# React: Add Event Listener

El método `componentDidMount()` también es el mejor lugar para adjuntar cualquier event linstener que necesite agregar para una funcionalidad específica. React proporciona un sistema de eventos sintético que envuelve el sistema de eventos nativo presente en los navegadores. Esto significa que el sistema de eventos sintéticos se comporta exactamente igual independientemente del navegador del usuario, incluso si los eventos nativos pueden comportarse de manera diferente entre los diferentes navegadores.

Ya ha estado utilizando algunos de estos controladores de eventos sintéticos como `onClick()`. El sistema de eventos sintéticos de React es excelente para usar en la mayoría de las interacciones que administrará en elementos DOM. Sin embargo, si desea adjuntar un controlador de eventos al documento u objetos de ventana, debe hacerlo directamente.

---

Adjunte un event listener en el método `componentDidMount()` para eventos `keydown` y haga que estos eventos activen la devolución de llamada `handleKeyPress()`. Puede usar `document.addEventListener()` que toma el evento (entre comillas) como primer argumento y la devolución de llamada como segundo argumento.

Luego, en `componentWillUnmount()`, elimine este mismo detector de eventos. Puede pasar los mismos argumentos a `document.removeEventListener()`. Es una buena práctica utilizar este método de ciclo de vida para limpiar los componentes React antes de desmontarlos y destruirlos. Eliminar oyentes de eventos es un ejemplo de una de esas acciones de limpieza.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/35/my-app)
