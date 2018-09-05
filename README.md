# MiCongreso
**MiCongreso **es un proyecto orientado a mejorar la relación de la ciudadanía con el congreso de nuestro país. Mediante iniciativas como compartir información relevante y herramientas como esta, buscamos lograr nuestro cometido.
Esta herramienta es una forma de conocer a nuestros diputados federales, senadores y diputados locales para así poder cominicarnos con ellos.

## ¿Puedo contribuir?
Claro, no necesitas ser programador ni ser parte del club de Toby, todos son bienvenidos a contribuir. Nuestra recomendación para iniciar es visitar la lista de issues y encontrar alguna que creas que se adapta a ti y que disfrutarás hacer, además hemos taggeado algunas issues que podrían ser sencillas para empezar.  Si quieres proponer algo, igual es bueno crear una issue y prometemos verla; si eres más apenado nos lo puedes mandar por privado a [contacto@micongreso.com.mx.](http://mailto:contacto@micongreso.com.mx)

## ¿Como escribir código?
El código está hecho para ser sencillo, por eso no usamos nada que requiera conocimientos muy profundos.
Simplemente es HTML, JS y CSS. La trifecta perfecta para que casi todos podamos contribuir, e incluimos un script de Python pero si no quieres moverle a esa parte, en realidad no ocurre nada. 

## Python Script, ¿qué hace?
Tenemos un script llamado scrapping.py dentro del root del repositorio, al llamarlo este llamará a más scripts dentro de la carpeta de scrappers. La idea es que esto te debe generar todos los archivos necesarios directamente de los sitios de los congresos (locales y federal). Puedes contribuir haciendo un scrapper para tu localidad o creando un archivo de python que ya regrese los datos en caso de tenerlos en un csv, excel u otro medio que no requiera un scrapper. La idea es que todo se regrese en formato json y esto nos ayude a facilitar el proceso de obtener información.

## Sitio web, ¿cómo lo instalo?
Hay tecnologías como webpack o la que estamos usando Gulp que es un poco más vieja, que nos van a ayudar a desarrollar sitios web de manera más eficiente y a tener todo minificado para reducir el tiempo de carga del sitio.
Instalarlo es muy sencillo, solo hay que seguir los siguientes pasos:
- Tener instalado npm, una sencilla busqueda de Google nos dará las instrucciones.
- Escribir lo siguiente en nuestra terminal:  npm install -g gulp bower
- Dentro de nuestra carpeta del repositorio correr: "npm install" & "bower install"
- Ahora ya podemos usar "gulp" para compilar el sitio, "gulp watch" para compilar al cambiar cosas y tener un live server, "gulp --production" para compilar con todo listo para usarlo en producción.

## Cosas a saber
Este proyecto es un WIP, habrá veces que verán cosas raras y código mal hecho por hacerlo rápido pero nuestro enfoque es sacar las cosas lo más pronto cuando es necesario y después retomar para limpiar el código.
Nuestra enfoque actual es agregar los congresos locales lo más pronto posible.