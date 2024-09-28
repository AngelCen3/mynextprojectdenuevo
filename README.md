# Curso de Nextjs desde Cero (Nextjs 13)

## Aqui lo que vemos es

![Tenia dudas de que si se habia creado el repositorio en github](./images/1.png)

---

## Uso del comando npx create-next-app mynextproject

```bash
npx create-next-app mynextproject
```

---

![Uso del comando npx create-next-app mynextproject](./images/2.png)

---

## Extructura del project

---

- **Carpeta App**: Aqui tendremos las multiples paginas de nuestra aplicacion, cualquier pagina que quieras que se vea aqui ira

- **images**: Esta carpeta yo la cree por que aqui guardare las capturas de

- **node_modules**: Es una carpeta que se utiliza para tener las bibliotecas que usa Next

- **public**: aqui van los archivos que el frontend puede acceder (Pero por lo que veo en la nueva version del project no aparece)

- **.eslintrc.json**: Esto sirve para formatear el codigo

- **.gitignore**: Este es un archivo del control de version

- **jsconfig.json**: Archivo de configuracion de Next js se puede especificar como se van a importar las rutas

- **next.config.mjs**: Aqui ponemos configuraciones para que se ejecute en la ejecucion de la aplicacion

- **package-lock.json**: Archivo para manejar dependencias de dependencias

- **package.json**: Archivo para que podamos ejecutar nuestros propios script y tambien las dependencias que usamos

- **README.md**: Aqui podemos describir el documento o aplicacion

---

![Extructura del project](./images/3.png)

## El uso del command **npm run dev**

El command _npm run dev_ es para correr un sevidor en el puerto 3000

```bash
npm run dev # El command _npm run dev_ es para correr un sevidor en el puerto http://localhost:3000/
```

## Carpeta **app** son las rutas que podemos visitar

Borraremos la carpeta app y crearemos una nueva

Crearemos una archivo --> Page.jsx y page es la ruta inicial (./)

Todos los archivos con nombre -> page.jsx se tomaran como ruta

## Como crear paginas

Por defecto la ruta app\page.jsx es `http://localhost:3000/` pero que pasa

siqueremos tener una pagina about como por ejemplo `http://localhost:3000/about`

tendriamos que crear esta ruta app\about\page.jsx osea una carpeta llamada about con un archivo page.jsx

y si queremos crear una ruta dentro de otra ruta bastaria con crear esta ruta app\tienda\categoria\page.jsx

![Como crear paginas](./images/4.png)

## Atajos y tips

- Es una abreviacion que nos van ayudar

    -**rfce**

    ```tsx
        import React from 'react'

        function TiendaHola() {
        return (
            <div></div>
        )
        }

        export default TiendaHola
    ```

    -**cgl** --> console.log("Este es el resultado0")

    -**shift+Alt Gr**

## El archivo layout.js es el contenedor de toda la aplicacion

---

Como es un componente resive promts en este caso clildren osea son las paginas que creamos

```jsx
/** Este es el contenedor raiz*/
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
```

---

En el ejemplo que nos proporciona next no nos aparace

`<head><title>My app</title></head>` ya que Next lo agrega de otra manera con metadata
