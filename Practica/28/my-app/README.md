# React: crear una entrada controlada

Su aplicación puede tener interacciones más complejas entre el `state` y la IU representada. Por ejemplo, los elementos de control de formulario para la entrada de texto, como `input` y `textarea`, mantienen su propio state en el DOM a medida que el usuario escribe. Con React, puede mover este state mutable al `state` de un componente React. La entrada del usuario se convierte en parte del `state` de la aplicación, por lo que React controla el valor de ese campo de entrada. Normalmente, si tiene componentes React con campos de entrada en los que el usuario puede escribir, será un formulario de entrada controlado.

---

El editor de código tiene el esqueleto de un componente llamado `ControlledInput` para crear un elemento de `input` controlado. El `state` del componente ya está inicializado con una propiedad de `input` que contiene una cadena vacía. Este valor representa el texto que un usuario escribe en el campo de `input`.

Primero, cree un método llamado `handleChange()` que tenga un parámetro llamado `event`. Cuando se llama al método, recibe un objeto de `event` que contiene una cadena de texto del elemento `input`. Puede acceder a esta cadena con `event.target.value` dentro del método. Actualice la propiedad de `input` del `state` del componente con esta nueva cadena.

En el método render, cree el elemento `input` sobre la etiqueta `h4`. Agregue un atributo `value` que sea igual a la propiedad de `input` del `state` del componente. A continuación, agregue un conjunto de controladores de eventos `onChange()` al método `handleChange()`.

Cuando escribe en el cuadro de entrada, ese texto se procesa mediante el método `handleChange()`, se establece como la propiedad de `input` en el `state` local y se representa como el valor en el cuadro de `input` en la página. El `state` del componente es la única fuente de verdad con respecto a los datos de entrada.

Por último, pero no menos importante, no olvides agregar los enlaces necesarios en el constructor.

---

[Ir al próximo desafío]()
