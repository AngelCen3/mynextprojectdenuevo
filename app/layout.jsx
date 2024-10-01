/** Este es el contenedor raiz*/
import Navbar from '../components/Navbar'    /** Primero lo importamos desde la carpeta components*/

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><title>My app</title></head>
      <body>
        <Navbar/>                         {/**Y ya pusimos a Navbar en la carpeta components*/}
        <hr/>
        {children}
      </body>
    </html>
  );
}
