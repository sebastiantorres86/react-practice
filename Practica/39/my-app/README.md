# React: renderizar con una condición If-Else

Otra aplicación del uso de JavaScript para controlar su vista renderizada es vincular los elementos que se representan a una condición. Cuando la condición es verdadera, se visualiza una vista. Cuando es falso, es una vista diferente. Puede hacer esto con una instrucción estándar `if / else` en el método `render()` de un componente React.

---

MyComponent contiene un `boolean` en su state que rastrea si desea mostrar algún elemento en la interfaz de usuario o no. El `button` alterna el estado de este valor. Actualmente, representa la misma IU cada vez. Vuelva a escribir el método `render()` con una instrucción `if / else` para que si el `display` es `true`, devuelva el marcado actual. De lo contrario, devuelva el marcado sin el elemento `h1`.

**Nota**: debe escribir un if / else para pasar las pruebas. El uso del operador ternario no pasará aquí.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/40/my-app)
