# Coincapp

Este proyecto es un challenge el cual consta de hacer un pequeño clone de este sitio [coincap.io](https://coincap.io/)

# Getting Started

Pasos a seguir:

1. `git clone https://github.com/vzpintor/coincapp.git`
2. Instalar las dependencias `yarn install`
3. `yarn ios` o `yarn android`
4. Para el caso de `ios` es necesario instalar los `pods` por lo que debe ir a la carpeta del proyecto nativo `ios` desde la raíz del proyecto, `cd ios/` y ejecutar `pod install`

# Prerequisites

Revisar documentación relacionada a la [API](https://docs.coincap.io/#37dcec0b-1f7b-4d98-b152-0217a6798058) que estaremos ocupando, dado que estaremos ocupando esta API es necesario tener un token, el cual tendremos que crear desde la siguiente liga: [https://coincap.io/api-key](https://coincap.io/api-key)

# Configuration

Cuando tengamos el token previamente configurado es necesario reemplazarlo en el archivo `env.dev.js` o `env.prod.js` que se encuentra en `./src/environment`.

Cuando abran el archivo `env` verá un código parecido al siguiente:

```bash
module.exports = {
  production: false,
  socket: 'wss://ws.coincap.io/prices?assets=',
  api: {
    baseUrl: 'https://api.coincap.io/v2',
    baseLogoUrl: 'https://assets.coincap.io/assets/icons/',
    apikey: '{YOUR_KEY}',  // <--- deben reemplazar por su KEY
    ...api,
  },
};
```

Este archivo contiene la configuración necesaria para poder consumir la API y para poder configurar un Socket que de igual manera estaremos utilizando.

Los endpoints que ocuparemos particularmente para este challenge son:

- Prices
- History

Los endpoints de estos servicios se encuentran configurados en el archivo `api.ts` aquí puedes agregar cualquier otro endpoint que desees implementar, este archivo se encuentra en la ruta `./src/app/services/config`.

El webSocket que estaremos utilizando será el de prices, el cual nos traerá la información actualizada cada vez que el precio de un asset cambie, la respuesta de este socket es parecida a la siguiente:

```bash
{
   "bitcoin":"6389.06534240",
   "ethereum":"192.93111286",
   "monero":"108.90302506",
   "litecoin":"52.25484165"
}
```
