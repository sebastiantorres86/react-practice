# React: crear un formulario controlado

El último desafío mostró que React puede controlar el state interno de ciertos elementos como `input` y `textarea`, lo que los convierte en componentes controlados. Esto también se aplica a otros elementos de formulario, incluido el elemento `form` HTML normal.

---

El componente `MyForm` se configura con un `form` vacío con un controlador de envío. Se llamará al controlador de envío cuando se envíe el formulario.

Hemos agregado un botón que envía el formulario. Puede ver que tiene el `type` establecido en `submit`, lo que indica que es el botón que controla el formulario. Agregue el elemento `input` en el formulario y establezca su `value` y los atributos `onChange()` como el último desafío. Luego, debe completar el método `handleSubmit` para que establezca la propiedad de state del componente `submit` al valor de entrada actual en el `state` local.

**Nota**: También debe llamar a `event.preventDefault()` en el controlador de envío para evitar el comportamiento de envío de formulario predeterminado que actualizará la página web.

Finalmente, cree una etiqueta `h1` después del `form` que represente el valor de envío desde el `state` del componente. Luego puede escribir el formulario y hacer clic en el botón (o presionar enter), y debería ver su entrada en la página.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/30/my-app)
