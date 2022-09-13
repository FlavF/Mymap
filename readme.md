# My Map

## Table of Contents

1. [General Info](#general-info)
2. [Stacks](#stacks)
3. [Installation](#installation)
4. [Use](#use)
5. [FAQs](#faqs)

<br/>

### General Info

---
Get the coordinates from an address and then get the map marker.
<br/>

### Stacks

---

Architecture MVC

- [TypeScript](https://www.typescriptlang.org/) Version 4.7.4
- [JavaScript]()
- [CSS]()
- [Node.js](https://nodejs.org/en/): Version 18.2.0
- [Express.js](https://expressjs.com/fr/): Version 4.16.1


Modules / Librairies :

- [Webpack](https://webpack.js.org/) Version 5.74.0
- [webpack-cli]() Version 4.10.0
- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) Version 4.10.0
- [axios](https://www.npmjs.com/package/axios) Version 0.27.2
- [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack)

<br/>

### Installation

---

Install TypeScript, Webpack and modules.

You need to create an account to get the coordinates (long, lat) from the address :  https://www.geoapify.com/geocoding-api

And for the map, I used : https://github.com/mapbox/mapbox-gl-js 

Copy the folders or the repository :
- tsconfig.son
- src/app.ts
- app.css
- index.html
- webpack.config.js

Just need to do on terminal :
- npm run build
- npm start
- and check on http://localhost:8080/

<br/>

#### Folders to update

- .env :  put you API_KEY and MAP_KEY in the folder


### Use

---

Just give your address in the form and validate the button with a click.

<br/>

### FAQs

---

1. Can I use others maps and coordinates locator ? 

=> of course, you can use leaflet, google map, google geocoding, and others and create more.
