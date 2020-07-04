# Reaccionar: pasar el estado como accesorios para componentes secundarios

Viste muchos ejemplos que pasaron props a elementos JSX secundarios y componentes secundarios de React en desafíos anteriores. Tal vez se pregunte de dónde provienen esos props. Un patrón común es tener un componente con state que contenga el `state` importante para su aplicación, que luego represente los componentes secundarios. Desea que estos componentes tengan acceso a algunas partes de ese `state`, que se pasan como props.

Por ejemplo, quizás tenga un componente `App` que renderice un `Navbar`, entre otros componentes. En su `App`, tiene un `state` que contiene mucha información del usuario, pero el `Navbar` solo necesita acceso al username del usuario para que pueda mostrarlo. Pasas esa parte del `state` al componente `Navbar` como prop.

Este patrón ilustra algunos paradigmas importantes en React. El primero es el *flujo de datos unidireccional*. El state fluye en una dirección hacia abajo en el árbol de los componentes de su aplicación, desde el componente primario con estado hasta los componentes secundarios. Los componentes secundarios solo reciben los datos de state que necesitan. El segundo es que las aplicaciones complejas con state se pueden dividir en unos pocos, o tal vez en un solo componente con state. El resto de sus componentes simplemente reciben el state del padre como prop y representan una interfaz de usuario de ese state. Comienza a crear una separación donde la gestión del state se maneja en una parte del código y la representación de la interfaz de usuario en otra. Este principio de separar la lógica de state de la lógica de la interfaz de usuario es uno de los principios clave de React. Cuando se usa correctamente, hace que el diseño de aplicaciones complejas y con state sea mucho más fácil de administrar.

---

El componente `MyApp` tiene state y representa un componente `Navbar` como hijo. Pase la propiedad `name` en su `state` al componente secundario, luego muestre el `name` en la etiqueta `h1` que forma parte del método render del `Navbar`.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/31/my-app)
