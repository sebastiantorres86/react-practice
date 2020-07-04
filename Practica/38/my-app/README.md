# React: use JavaScript avanzado en el método render de React

En desafíos anteriores, aprendió cómo inyectar código JavaScript en código JSX usando llaves, `{}`, para tareas como acceder a `props`, pasar `props`, acceder al `state`, insertar comentarios en su código y, más recientemente, diseñar sus componentes. Todos estos son casos de uso comunes para poner JavaScript en JSX, pero no son la única forma en que puede utilizar el código JavaScript en sus componentes React.

También puede escribir JavaScript directamente en sus métodos `render`, antes de la declaración `return`, **_sin_** insertarlo dentro de llaves. Esto se debe a que aún no está dentro del código JSX. Cuando desee utilizar una variable más adelante en el código JSX _dentro_ de la declaración `return`, coloque el nombre de la variable dentro de llaves.

---

En el código provisto, el método `render` tiene una matriz que contiene 20 frases para representar las respuestas encontradas en el clásico juguete Magic Eight Ball de los años 80. El evento de clic del botón está vinculado al método `ask`, por lo que cada vez que se hace clic en el botón, se generará un número aleatorio y se almacenará como el índice `randomIndex` en el estado. En la línea 52, elimine la cadena `"change me!"` y reasigne el `answe`r constante para que su código acceda aleatoriamente a un índice diferente de la matriz `possibleAnswers` cada vez que se actualiza el componente. Finalmente, inserte `answer` const dentro de las etiquetas `p`.

---

[Ir al próximo desafío]()
