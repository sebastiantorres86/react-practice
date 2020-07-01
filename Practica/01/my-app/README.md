# React: crear un elemento JSX simple

**_Introducción_**: React es una librería de vista de código abierto creada y mantenida por Facebook. Es una gran herramienta para representar la interfaz de usuario (UI) de las aplicaciones web modernas.

React utiliza una extensión de sintaxis de JavaScript llamada JSX que le permite escribir HTML directamente dentro de JavaScript. Esto tiene varios beneficios. Le permite utilizar toda la potencia programática de JavaScript dentro de HTML y le ayuda a mantener su código legible. En su mayor parte, JSX es similar al HTML que ya ha aprendido, sin embargo, hay algunas diferencias clave que se cubrirán a lo largo de estos desafíos.

Por ejemplo, debido a que JSX es una extensión sintáctica de JavaScript, en realidad puede escribir JavaScript directamente dentro de JSX. Para hacer esto, simplemente incluya el código que desea que se trate como JavaScript entre llaves: `{ 'esto se trata como código JavaScript' }`. Tenga esto en cuenta, ya que se usa en varios desafíos futuros.

Sin embargo, debido a que JSX no es JavaScript válido, el código JSX debe compilarse en JavaScript. El transpilador Babel es una herramienta popular para este proceso. Para su conveniencia, ya se agregó detrás de escena para estos desafíos. Si usted escribe JSX sintácticamente inválido, verá que falla la primera prueba en estos desafíos.

Vale la pena señalar que, bajo el capó, los desafíos están llamando a `ReactDOM.render (JSX, document.getElementById ('root'))`. Esta llamada de función es lo que coloca su JSX en la representación ligera del DOM del propio React. React luego utiliza instantáneas de su propio DOM para optimizar la actualización solo de partes específicas del DOM real.

---

**Instrucciones**: El código actual usa JSX para asignar un elemento `div` a la constante `JSX`. Reemplace el `div` con un elemento `h1` y agregue el texto `¡Hola JSX!` dentro de eso.

---
[Ir al próximo desafío]()
