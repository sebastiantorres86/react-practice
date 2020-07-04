# React: Review usando props con componentes funcionales sin estado

Excepto por el último desafío, has pasado props a componentes funcionales sin estado. Estos componentes actúan como funciones puras. Aceptan props como entrada y devuelven la misma vista cada vez que pasan los mismos props. Tal vez se pregunte qué es estado, y el próximo desafío lo cubrirá con más detalle. Antes de eso, aquí hay una revisión de la terminología de los componentes.

Un *componente funcional sin estado* es cualquier función que escriba que acepte props y devuelva JSX. Un *componente sin estado*, por otro lado, es una clase que extiende `React.Component`, pero no usa el estado interno (cubierto en el próximo desafío). Finalmente, un *componente con estado* es un componente de clase que mantiene su propio estado interno. Puede ver componentes con estado referidos simplemente como componentes o componentes React.

Un patrón común es tratar de minimizar la capacidad de estado y crear componentes funcionales sin estado siempre que sea posible. Esto ayuda a contener la gestión de su estado en un área específica de su aplicación. A su vez, esto mejora el desarrollo y el mantenimiento de su aplicación al facilitar el seguimiento de cómo los cambios de estado afectan su comportamiento.

---

El editor de código tiene un componente `CampSite` que representa un componente `Camper` como hijo. Defina el componente `Camper` y asígnele props predeterminados de `{ name: 'CamperBot' }`. Dentro del componente `Camper`, renderice el código que desee, pero asegúrese de tener un elemento `p` que incluya solo el valor de `name` que se pasa como prop. Finalmente, defina `propTypes` en el componente `Camper` para requerir que se proporcione el `name` como accesorio y verifique que sea de tipo `string`.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/21/my-app)
