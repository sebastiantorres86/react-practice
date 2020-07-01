# React: crear un elemento complejo JSX

El último desafío fue un ejemplo simple de JSX, pero JSX también puede representar HTML más complejo.

Una cosa importante que debe saber sobre JSX anidado es que debe devolver un solo elemento.

Este elemento principal envolvería todos los demás niveles de elementos anidados.

Por ejemplo, varios elementos JSX escritos como hermanos sin elemento contenedor primario no se transpilarán.

Aquí hay un ejemplo:

**JSX válido**:

```jsx
<div>
  <p> Párrafo uno </p>
  <p> Párrafo dos </p>
  <p> Párrafo tres </p>
</div>
```

**JSX inválido**:

```jsx
<p> Párrafo uno </p>
<p> Párrafo dos </p>
<p> Párrafo tres </p>
```

---

Defina una nueva constante `JSX` que represente un `div` que contenga los siguientes elementos en orden:

Un `h1`, un `p`, y una lista desordenada que contiene tres elementos `li`. Puede incluir cualquier texto que desee dentro de cada elemento.

**Nota**: Al representar múltiples elementos como este, puede envolverlos todos entre paréntesis, pero no es estrictamente necesario. Observe también que este desafío utiliza una etiqueta `div` para envolver todos los elementos secundarios dentro de un único elemento primario. Si elimina el `div`, el JSX ya no se transpilará. Tenga esto en cuenta, ya que también se aplicará cuando devuelva elementos JSX en componentes React.

---

[Ir al próximo desafío]()
