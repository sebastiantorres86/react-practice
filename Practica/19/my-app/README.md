# React: acceder a los props con this.props

Los últimos desafíos cubrieron las formas básicas de pasar props a los componentes secundarios. Pero, ¿qué pasa si el componente hijo al que le estás pasando un prop es un componente de clase ES6, en lugar de un componente funcional sin estado? El componente de clase ES6 utiliza una convención ligeramente diferente para acceder a los props.

Cada vez que se refiere a un componente de clase dentro de sí mismo, utiliza la palabra clave `this`. Para acceder a los props dentro de un componente de clase, debe introducir el código que usa para acceder a él con `this`. Por ejemplo, si un componente de clase ES6 tiene un accesorio llamado `data`, usted escribe `{this.props.data`} en JSX.

---

Renderice una instancia del componente `ReturnTempPassword` en el componente primario `ResetPassword`. Aquí, proporcione a `ReturnTempPassword` un prop de `tempPassword` y asígnele un valor de una cadena que tenga al menos 8 caracteres de longitud. Dentro del elemento secundario, `ReturnTempPassword`, acceda al prop `tempPassword` dentro de las etiquetas `strong` para asegurarse de que el usuario vea la contraseña temporal.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/20/my-app)
