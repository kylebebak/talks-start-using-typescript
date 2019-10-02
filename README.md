### Sumario
TypeScript está ganando cada vez más adeptos en el mundo de JS. Yo estuve escéptico al principio, porque dudaba que usar TS en vez de JS aumentaría la productividad, y al final no hay que usar algo sólo porque esté de moda.

Este año empecé a usarlo, en librerías que he escrito y en proyectos con clientes, y debo reconocer que ya me convenció.

Me gustaría platicar un poco de mi acercamiento a TypeScript, porqué considero que usarlo es un "win" para productividad en cualquier proyecto medianamente complejo, y poner ejemplos claros de cómo usarlo con el mayor efecto y menor esfuerzo posible.


### Outline
- resumen básico de TypeScript
  + interfaces, types, inheritance, indexers
- cómo empezar a usar TypeScript en tus proyectos
  + `.d.ts` para agregar type annotations a librerías ya escritas en JS, sin tocar el source code
    * un ejemplo con `request-dot-js`
    * union types y type narrowing
  + agregar TypeScript a web apps y mobile apps (específicamente los de React/React Native)
    * cómo agregar types para todos los datos que vienen de HTTP APIs
    * cómo agregar types para 3rd-party librerías
    * cómo usar TS con React (una breve introducción a props, state)
