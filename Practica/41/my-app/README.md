# React: Use una expresión ternaria para la representación condicional

Antes de pasar a las técnicas de representación dinámica, hay una última forma de usar condicionales JavaScript incorporados para representar lo que desea: el _operador ternario_. El operador ternario a menudo se utiliza como acceso directo para sentencias `if / else` en JavaScript. No son tan robustas como las declaraciones tradicionales `if / else`, pero son muy populares entre los desarrolladores de React. Una razón para esto es por cómo se compila JSX, las declaraciones `if / else` no se pueden insertar directamente en el código JSX. Es posible que haya notado esto hace un par de desafíos: cuando se requería una declaración `if / else`, siempre estaba _fuera_ de la declaración `return`. Las expresiones ternarias pueden ser una excelente alternativa si desea implementar lógica condicional dentro de su JSX. Recuerde que un operador ternario tiene tres partes, pero puede combinar varias expresiones ternarias juntas. Aquí está la sintaxis básica:

```jsx
condition ? expressionIfTrue : expressionIfFalse;
```

---

El editor de código tiene tres constantes definidas dentro del método `render()` del componente `CheckUserAge`. Se llaman `buttonOne`, `buttonTwo` y `buttonThree`. A cada uno de estos se le asigna una expresión JSX simple que representa un elemento de botón. Primero, inicialice el estado de `CheckUserAge` con `input` y `userAge`, ambos establecidos en valores de una cadena vacía.

Una vez que el componente muestra información en la página, los usuarios deben tener una forma de interactuar con él. Dentro de la declaración `return` del componente, configure una expresión ternaria que implemente la siguiente lógica: cuando la página se carga por primera vez, muestre el botón de envío, `buttonOne`, en la página. Luego, cuando un usuario ingresa su edad y hace clic en el botón, renderice un botón diferente según la edad. Si un usuario ingresa un número menor que `18`, renderiza el `buttonThree`. Si un usuario ingresa un número mayor o igual a `18`, renderiza el `buttonTwo`.

---

[Ir al próximo desafío]()
