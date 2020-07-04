# React: Dele a los elementos hermanos un atributo clave único

El último desafío mostró cómo se usa el método `map` para representar dinámicamente una serie de elementos en función de la entrada del usuario. Sin embargo, faltaba una pieza importante en ese ejemplo. Cuando crea una matriz de elementos, cada uno necesita un conjunto de atributos `key` con un valor único. React utiliza estas keys para realizar un seguimiento de los elementos que se agregan, cambian o eliminan. Esto ayuda a que el proceso de renderizado sea más eficiente cuando la lista se modifica de alguna manera.

**Nota**: Las claves solo deben ser únicas entre los elementos hermanos, no necesitan ser globalmente únicas en su aplicación.

---

El editor de código tiene una matriz con algunos front end frameworks y un componente funcional sin estado llamado `Frameworks()`. `Frameworks()` necesita asignar la matriz a una lista desordenada, como en el último desafío. Termine de escribir el callbak del `map` para devolver un elemento `li` para cada framework en la matriz `frontEndFrameworks`. Esta vez, asegúrese de dar a cada `li` un atributo `key`, establecido en un valor único. Los elementos `li` también deben contener texto de `frontEndFrameworks`.

Normalmente, desea que la clave sea algo que identifique de forma exclusiva el elemento que se representa. Como último recurso, se puede usar el índice de matriz, pero normalmente debe intentar usar una identificación única.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/46/my-app)
