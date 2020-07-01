# React: aprender sobre las etiquetas JSX de cierre automático

Hasta ahora, ha visto cómo JSX difiere de HTML en una forma clave con el uso de `className` vs. `class` para definir clases HTML.

Otra forma importante en la que JSX difiere de HTML es en la idea de la etiqueta de cierre automático.

En HTML, casi todas las etiquetas tienen una etiqueta de apertura y una de cierre: `<div></div>`; la etiqueta de cierre siempre tiene una barra diagonal antes del nombre de la etiqueta que está cerrando. Sin embargo, hay instancias especiales en HTML llamadas "etiquetas de cierre automático", o etiquetas que no requieren una etiqueta de apertura y una de cierre antes de que otra etiqueta pueda comenzar.

Por ejemplo, la etiqueta de salto de línea se puede escribir como `<br>` o como `<br /`>, pero nunca se debe escribir como `<br></br>`, ya que no contiene ningún contenido.

En JSX, las reglas son un poco diferentes. Cualquier elemento JSX puede escribirse con una etiqueta de cierre automático, y cada elemento debe cerrarse. La etiqueta de salto de línea, por ejemplo, siempre debe escribirse como `<br />` para que sea JSX válido que se pueda transpilar. Un `<div>`, por otro lado, se puede escribir como `<div />` o `<div></div>`. La diferencia es que en la primera versión de sintaxis no hay forma de incluir nada en `<div />`. Verá en desafíos posteriores que esta sintaxis es útil al representar componentes React.

---

Solucione los errores en el editor de código para que sea JSX válido y se transpile correctamente. Asegúrese de no cambiar ninguno de los contenidos, solo necesita cerrar las etiquetas donde se necesitan.

---

[Ir al próximo desafío]()
