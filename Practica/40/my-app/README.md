# React: Use && para un condicional más conciso

Las declaraciones if / else funcionaron en el último desafío, pero hay una forma más concisa de lograr el mismo resultado. Imagine que está rastreando varias condiciones en un componente y desea representar diferentes elementos según cada una de estas condiciones. Si escribe muchas instrucciones `else if` para devolver interfaces de usuario ligeramente diferentes, puede repetir código que deja margen para el error. En su lugar, puede usar el operador lógico `&&` para realizar la lógica condicional de una manera más concisa. Esto es posible porque desea verificar si una condición es `true` y, si lo es, devolver algún marcado. Aquí hay un ejemplo:

`{condition && <p> marcado </p>}`

Si `condition` es `true`, se devolverá el marcado. Si la condición es `false`, la operación devolverá inmediatamente `false` después de evaluar `condition` y no devolverá nada. Puede incluir estas declaraciones directamente en su JSX y encadenar varias condiciones juntas escribiendo `&&` después de cada una. Esto le permite manejar una lógica condicional más compleja en su método `render()` sin repetir mucho código.

---

Resuelva el ejemplo anterior nuevamente, para que `h1` solo se muestre si `display` es `true`, pero use el operador lógico `&&` en lugar de una instrucción `if / else`.

---

[Ir al próximo desafío]()
