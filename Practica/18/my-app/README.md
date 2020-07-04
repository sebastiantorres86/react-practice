# React: usa PropTypes para definir los props que esperas

React proporciona funciones útiles de tipo-verificación para verificar que los componentes reciban props del tipo correcto. Por ejemplo, su aplicación realiza una llamada a la API para recuperar los datos que espera que estén en un array, que luego se pasa a un componente como prop. Puede configurar `propTypes` en su componente para requerir que los datos sean de tipo `array`. Esto arrojará una advertencia útil cuando los datos sean de cualquier otro tipo.

Se considera una práctica recomendada establecer `propTypes` cuando conoce el tipo de prop con anticipación. Puede definir una propiedad `propTypes` para un componente de la misma manera que definió `defaultProps`. Hacer esto verificará que los accesorios de una clave dada estén presentes con un tipo dado. Aquí hay un ejemplo para requerir el tipo `function` para un prop llamado `handleClick`:

`MyComponent.propTypes = {handleClick: PropTypes.func.isRequired}`

En el ejemplo anterior, la parte `PropTypes.func` comprueba que `handleClick` es una función. Agregar `isRequired` le dice a React que `handleClick` es una propiedad requerida para ese componente. Verá una advertencia si no se proporciona ese accesorio. Observe también que `func` representa `function`. Entre los siete tipos primitivos de JavaScript, `function` y `boolean` (escrito como `bool`) son los únicos dos que usan ortografía inusual. Además de los tipos primitivos, hay otros tipos disponibles. Por ejemplo, puede verificar que un prop sea un elemento React. Consulte la [documentación](https://reactjs.org/docs/jsx-in-depth.html#specifying-the-react-element-type) para todas las opciones.

**Nota**: A partir de React v15.5.0, `PropTypes` es importado independientemente de React, de esta manera: `import PropTypes from 'prop-types';`

---

Defina `propTypes` para que el componente `Items` requiera `quantity` como prop y verifique que sea de tipo `number`.

---

[Ir al próximo desafío](https://github.com/sebastiantorres86/react-practice/tree/master/Practica/19/my-app)
