# React: Render condicionalmente desde props

Hasta ahora, ha visto cómo usar `if / else`, `&&`, `null` y el operador ternario (`condition ? ExpressionIfTrue: expressionIfFalse`) para tomar decisiones condicionales sobre qué renderizar y cuándo. Sin embargo, queda un tema importante para discutir que le permite combinar cualquiera o todos estos conceptos con otra poderosa característica de React: props. El uso de props para renderizar condicionalmente el código es muy común con los desarrolladores de React, es decir, usan el valor de un prop determinado para tomar automáticamente decisiones sobre qué renderizar.

En este desafío, configurará un componente secundario para tomar decisiones de representación basadas en props. También usará el operador ternario, pero puede ver cómo varios de los otros conceptos que se cubrieron en los últimos desafíos podrían ser tan útiles en este contexto.

---

El editor de código tiene dos componentes que están parcialmente definidos para usted: un padre llamado `GameOfChance` y un hijo llamado `Results`. Se utilizan para crear un juego simple donde el usuario presiona un botón para ver si gana o pierde.

Primero, necesitará una expresión simple que devuelva aleatoriamente un valor diferente cada vez que se ejecute. Puedes usar `Math.random()`. Este método devuelve un valor entre `0` (inclusive) y `1` (exclusivo) cada vez que se llama. Entonces, para probabilidades de 50/50, use `Math.random()> = .5` en su expresión. Estadísticamente hablando, esta expresión devolverá `true` el 50% del tiempo y `false` el otro 50%. En la línea 30, reemplace el comentario con esta expresión para completar la declaración de variable.

Ahora tiene una expresión que puede usar para tomar una decisión aleatoria en el código. A continuación, debe implementar esto. Renderice el componente `Results` como hijo de `GameOfChance` y pase la `expression` como un prop llamado `fiftyFifty`. En el componente `Results`, escriba una expresión ternaria para representar el texto `"You Win!"` o `"You Lose!"` basado en el prop `fiftFifty` que se pasa de `GameOfChance`. Finalmente, asegúrese de que el método `handleClick()` cuente correctamente cada turno para que el usuario sepa cuántas veces ha jugado. Esto también sirve para que el usuario sepa que el componente se ha actualizado en caso de que gane o pierda dos veces seguidas.

---

[Ir al próximo desafío]()
