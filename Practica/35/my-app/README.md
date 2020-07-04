# React: optimice los Re-Renders con shouldComponentUpdate

Hasta ahora, si algún componente recibe un nuevo `state` o nuevos `props`, se re-renderiza a sí mismo y a todos sus elementos secundarios. Esto generalmente está bien. Pero React proporciona un método de ciclo de vida al que puede llamar cuando los componentes secundarios reciben un nuevo `state` o `props`, y declara específicamente si los componentes deben actualizarse o no. El método es `shouldComponentUpdate()`, y toma `nextProps` y `nextState` como parámetros.

Este método es una forma útil de optimizar el rendimiento. Por ejemplo, el comportamiento predeterminado es que su componente se re-renderizar cuando recibe nuevos `props`, incluso si los `props` no han cambiado. Puede usar `shouldComponentUpdate(`) para evitar esto comparando los `props`. El método debe devolver un valor `boolean` que le dice a React si actualizar o no el componente. Puede comparar los props actuales (`this.props`) con los siguientes accesorios (`nextProps`) para determinar si necesita actualizar o no, y devolver `true` o `false` en consecuencia.

---

El método `shouldComponentUpdate()` se agrega en un componente llamado `OnlyEvens`. Actualmente, este método devuelve `true`, por lo que `OnlyEvens` re-renderiza cada vez que recibe nuevos `props`. Modifique el método para que `OnlyEvens` se actualice solo si el `value` de sus nuevos `props` es par. Haga clic en el botón `Add` y observe el orden de los eventos en la consola de su navegador a medida que se activan los enlaces del ciclo de vida.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/36/my-app)
