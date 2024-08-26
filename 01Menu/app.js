var div=document.getElementById("info");


var btnAn=document.getElementById("btnAn");
var btnEti=document.getElementById("btnEti");
var btnTex=document.getElementById("btnTex");

var btnLis=document.getElementById("btnLis");
var btnTab=document.getElementById("btnTab");
var btnImg=document.getElementById("btnImg");

var btnVi=document.getElementById("btnVi");
var btnAu=document.getElementById("btnAu");
var btnHip=document.getElementById("btnHip");

var btnSem=document.getElementById("btnSem");
var btnFor=document.getElementById("btnFor");
var btnFra=document.getElementById("btnFra");

var btnEs=document.getElementById("btnEs");
var btnMe=document.getElementById("btnMe");
var btnEx=document.getElementById("btnEx");


//BOTÓN DE ANTECEDENTES
btnAn.onclick=()=>{
    let inf=`

    <h2>ANTECEDENTES</h2>
    <br>
<p>
Hablar de la historia de HTML sin mencionar el nombre Tim Berners Lee es imposible. A principios de la década de los 90, el físico Tim Berners Lee, investigador de la Organización Europea para la Investigación Nuclear (CERN), realizó una publicación titulada «HTML Tags», conocida como el origen de HTML. </p>

<p>Además, unos años después, fundó la W3C, que es uno de los principales agentes en la historia de HTML.
Si bien el origen de HTML se remonta a la primera versión de html y sus características en 1991 ( html 1.0 ), el año 1995 también tiene especial relevancia. </p>

<p>Esto se debe a que en 1995 se publicó la segunda versión o HTML 2.0, que en realidad era una petición de estandarización. Es decir, HTML 2.0 fue la primera propuesta oficial de estandarización de HTML.
Dos años después, en 1997, se generaron dos nuevas versiones: a principios de año se publicó la versión HTML 3.2 y, a finales del mismo año, se publicó la actualización HTML 4.0. </p>

<p>Posteriormente, a finales del año 1999, se publicó una nueva especificación oficial: la versión HTML 4.01, que marcó otro hito para la evolución de HTML.

Hasta 2008 no recibimos una nueva entrega, el borrador de la versión HTML 5 que es, en realidad, el sustento de todas la versiones actuales.

Desde el año 2014, HTML 5 es estándar y, aunque siguen surgiendo nuevas modificaciones y actualizaciones, los cambios son mínimos y fáciles de asimilar.
</p>
`;
div.innerHTML=inf;
}



// BOTÓN DE ETIQUETA
btnEti.onclick = () => {
    let inf = `
    <h2>ETIQUETA (SINTAXIS BÁSICA)</h2>
    <br>
    <p>Las etiquetas HTML son códigos utilizados para estructurar y definir el contenido en una página web. Cada etiqueta tiene una estructura básica que indica al navegador cómo mostrar el contenido.</p>
    <p>Las etiquetas HTML se escriben entre corchetes angulares (&lt; y &gt;). La estructura básica de una etiqueta HTML es la siguiente:</p>
    <ul>
        <li><code>&lt;nombre&gt;</code>: Etiqueta de apertura.</li>
        <li><code>&lt;/nombre&gt;</code>: Etiqueta de cierre.</li>
    </ul>
    <p>Por ejemplo, la etiqueta para un encabezado de nivel 1 se escribe como <code>&lt;h1&gt;Contenido&lt;/h1&gt;</code>. Aquí, <code>&lt;h1&gt;</code> es la etiqueta de apertura, y <code>&lt;/h1&gt;</code> es la etiqueta de cierre.</p>
    <br>
    <h2>EJEMPLOS</h2>
    <br>
    <p>A continuación, se muestra un ejemplo básico de una estructura HTML:</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Mi Página Web&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hola Mundo&lt;/h1&gt;
    &lt;p&gt;Este es un párrafo de ejemplo.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    <br>
    <h3>Explicación:</h3>
    <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code>: Declara el tipo de documento y la versión de HTML.</li>
        <li><code>&lt;html&gt;</code>: Etiqueta raíz que envuelve todo el contenido de la página.</li>
        <li><code>&lt;head&gt;</code>: Contiene metadatos, como el título de la página.</li>
        <li><code>&lt;title&gt;</code>: Define el título que aparece en la pestaña del navegador.</li>
        <li><code>&lt;body&gt;</code>: Contiene el contenido visible de la página.</li>
        <li><code>&lt;h1&gt;</code>: Encabezado de nivel 1, utilizado para títulos principales.</li>
        <li><code>&lt;p&gt;</code>: Etiqueta de párrafo, utilizada para definir bloques de texto.</li>
    </ul>
    <br>
    <h2>Ejemplo Visual</h2>
    <p>En la siguiente área se muestra una vista previa visual del código HTML:</p>
    <iframe srcdoc="
    <!DOCTYPE html>
    <html>
    <head>
        <title>Mi Página Web</title>
    </head>
    <body>
        <h1>Hola Mundo</h1>
        <p>Este es un párrafo de ejemplo.</p>
    </body>
    </html>" style="width: 100%; height: 200px; border: 1px solid black;"></iframe>
    `;

    div.innerHTML = inf;
}

// BOTÓN DE TEXTO
btnTex.onclick = () => {
    let inf = `
    <h2>TEXTO</h2>
    <br>
    <p>El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos. Como lo sugiere el título, este artículo te dará una comprensión básica de HTML y cúal es su función.</p>
    <p>La etiqueta HTML &lt;text&gt; se utiliza para definir el campo de texto de una sola línea en una página web.</p>
    <p>La forma más básica de añadir un texto a una página web es usando la etiqueta &lt;p&gt;.</p>

    <h2>EJEMPLOS</h2>
    <br>
        <h2>Ejemplos de Etiquetas de Texto en HTML</h2>
    <br>
    
    <h3>&lt;p&gt; (Párrafo)</h3>
    <p>La etiqueta &lt;p&gt; se utiliza para definir un párrafo de texto. Aquí hay un ejemplo:</p>
    <pre>
&lt;p&gt;Este es un párrafo de ejemplo.&lt;/p&gt;
    </pre>
    <p>Este es un párrafo de ejemplo.</p>
    
    <h3>&lt;h1&gt; a &lt;h6&gt; (Encabezados)</h3>
    <p>Las etiquetas &lt;h1&gt; a &lt;h6&gt; se utilizan para definir encabezados de diferentes niveles. Ejemplo:</p>
    <pre>
&lt;h1&gt;Encabezado Nivel 1&lt;/h1&gt;
&lt;h2&gt;Encabezado Nivel 2&lt;/h2&gt;
&lt;h3&gt;Encabezado Nivel 3&lt;/h3&gt;
    </pre>
    <h1>Encabezado Nivel 1</h1>
    <h2>Encabezado Nivel 2</h2>
    <h3>Encabezado Nivel 3</h3>
    
    <h3>&lt;strong&gt; y &lt;b&gt; (Negrita)</h3>
    <p>La etiqueta &lt;strong&gt; se usa para resaltar texto importante, mientras que &lt;b&gt; se usa solo para estilizar el texto en negrita:</p>
    <pre>
&lt;strong&gt;Texto importante&lt;/strong&gt;
&lt;b&gt;Texto en negrita&lt;/b&gt;
    </pre>
    <strong>Texto importante</strong>
    <b>Texto en negrita</b>
    
    <h3>&lt;em&gt; y &lt;i&gt; (Cursiva)</h3>
    <p>La etiqueta &lt;em&gt; se usa para enfatizar el texto, y &lt;i&gt; se usa para estilizar el texto en cursiva:</p>
    <pre>
&lt;em&gt;Texto enfatizado&lt;/em&gt;
&lt;i&gt;Texto en cursiva&lt;/i&gt;
    </pre>
    <em>Texto enfatizado</em>
    <i>Texto en cursiva</i>
    
   

    <h3>&lt;code&gt; (Código)</h3>
    <p>La etiqueta &lt;code&gt; se usa para mostrar fragmentos de código en línea:</p>
    <pre>
&lt;code&gt;var x = 10;&lt;/code&gt;
    </pre>
    <code>var x = 10;</code>
    
    <h3>&lt;pre&gt; (Texto Preformateado)</h3>
    <p>La etiqueta &lt;pre&gt; se usa para mostrar texto con espacios y saltos de línea preservados:</p>
    <pre>
&lt;pre&gt;
Línea 1
Línea 2
&lt;/pre&gt;
    </pre>
    <pre>
Línea 1
Línea 2
    </pre>

    `;
    div.innerHTML = inf;
}



// BOTÓN DE LISTAS
btnLis.onclick = () => {
    let inf = `
    <h2>LISTAS</h2>
    <br>

    <p>En HTML, podemos enumerar elementos en forma ordenada o desordenada.</p>
    
    <p>Una lista ordenada utiliza números o algún tipo de notación que indica una serie de elementos. Por ejemplo, una lista ordenada puede comenzar con el número 1 y continuar por el 2, 3, 4, etc. Tu lista ordenada también puede comenzar con la letra A y pasar por B, C, D, etc.</p>

    <p>Por otro lado, tenemos listas desordenadas, como una lista de tareas. Hay un tipo más de lista llamada lista de descripción que también aprenderemos a continuación.</p>

    <br>

    <h2>EJEMPLOS</h2>
    <br>

    <h3>1. Lista Ordenada</h3>
    <p>Una lista ordenada se define con la etiqueta <code>&lt;ol&gt;</code> y los elementos con la etiqueta <code>&lt;li&gt;</code>:</p>
    <pre>
&lt;ol&gt;
    &lt;li&gt;Primer elemento&lt;/li&gt;
    &lt;li&gt;Segundo elemento&lt;/li&gt;
    &lt;li&gt;Tercer elemento&lt;/li&gt;
&lt;/ol&gt;
    </pre>
    <p>Esto se verá en el navegador como:</p>
    <ol>
        <li>Primer elemento</li>
        <li>Segundo elemento</li>
        <li>Tercer elemento</li>
    </ol>

    <h3>2. Lista Desordenada</h3>
    <p>Una lista desordenada se define con la etiqueta <code>&lt;ul&gt;</code> y los elementos con la etiqueta <code>&lt;li&gt;</code>:</p>
    <pre>
&lt;ul&gt;
    &lt;li&gt;Elemento A&lt;/li&gt;
    &lt;li&gt;Elemento B&lt;/li&gt;
    &lt;li&gt;Elemento C&lt;/li&gt;
&lt;/ul&gt;
    </pre>
    <p>Esto se verá en el navegador como:</p>
    <ul>
        <li>Elemento A</li>
        <li>Elemento B</li>
        <li>Elemento C</li>
    </ul>

    <h3>3. Lista de Descripción</h3>
    <p>Una lista de descripción se define con la etiqueta <code>&lt;dl&gt;</code>, los términos con la etiqueta <code>&lt;dt&gt;</code>, y las descripciones con la etiqueta <code>&lt;dd&gt;</code>:</p>
    <pre>
&lt;dl&gt;
    &lt;dt&gt;Término 1&lt;/dt&gt;
    &lt;dd&gt;Descripción del término 1&lt;/dd&gt;
    &lt;dt&gt;Término 2&lt;/dt&gt;
    &lt;dd&gt;Descripción del término 2&lt;/dd&gt;
&lt;/dl&gt;
    </pre>
    <p>Esto se verá en el navegador como:</p>
    <dl>
        <dt>Término 1</dt>
        <dd>Descripción del término 1</dd>
        <dt>Término 2</dt>
        <dd>Descripción del término 2</dd>
    </dl>
    `;

    div.innerHTML = inf;
}


// BOTÓN DE TABLAS
btnTab.onclick = () => {
    let inf = `
    <h2>TABLAS</h2>
    <br>
    <p>Las tablas HTML son ideales para mostrar grandes cantidades de datos de manera estructurada. Son elementos dentro del diseño web que permiten a los desarrolladores organizar datos como texto, imágenes y enlaces en filas y columnas.</p>
    <p>Dentro del lenguaje de diseño web, las tablas HTML se crean usando las etiquetas &lt;table&gt; y &lt;/table&gt;. En ella se incluyen dos etiquetas importantes: <code>&lt;tr&gt;</code>, que es para crear filas de tablas, y <code>&lt;td&gt;</code>, para crear celdas de datos. Todo lo que esté dentro de ambas etiquetas es el contenido de la celda de la tabla.</p>
    <p>El uso de tablas HTML en el diseño se ha vuelto muy común, pues las etiquetas permiten la creación de contenido web de una forma menos compleja, brindando más oportunidades de diseño.</p>
    <br>
    <h2>EJEMPLO DE TABLA BÁSICA</h2>
    <br>
    <p>Para crear una tabla simple con dos filas y dos columnas, utiliza el siguiente código HTML:</p>
    <pre>
&lt;table border="1" align="center"&gt;
    &lt;tr&gt;
        &lt;th&gt;Encabezado 1&lt;/th&gt;
        &lt;th&gt;Encabezado 2&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Celda 1&lt;/td&gt;
        &lt;td&gt;Celda 2&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Celda 3&lt;/td&gt;
        &lt;td&gt;Celda 4&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
    </pre>

    <p>Esto se verá en el navegador como:</p>
    <table border="1" align="center">
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
        </tr>
        <tr>
            <td>Celda 1</td>
            <td>Celda 2</td>
        </tr>
        <tr>
            <td>Celda 3</td>
            <td>Celda 4</td>
        </tr>
    </table>
    `;

    div.innerHTML = inf;
}



// BOTÓN DE IMÁGEN
btnImg.onclick = () => {
    let inf = `
    <h2>IMAGEN</h2>
    <br>
    <p>Al principio, la web solo era texto y resultaba más bien aburrido. Afortunadamente, no pasó mucho tiempo antes de que se añadiera la capacidad de insertar imágenes (y otros tipos de contenido más interesantes) en las páginas web. Hay otros tipos de elementos multimedia que tener en cuenta, pero es lógico comenzar con el humilde elemento <code>&lt;img&gt;</code> utilizado para insertar una imagen simple en una página web.</p>
    <p>Para poner una imagen simple en una página web, utilizamos el elemento <code>&lt;img&gt;</code>. Se trata de un elemento vacío (lo que significa que no contiene texto o etiqueta de cierre) que requiere al menos un atributo para ser utilizado: <code>src</code> (a veces denominado por su nombre completo, source). El atributo <code>src</code> contiene una ruta que apunta a la imagen que quieres poner en la página, que puede ser una URL relativa o absoluta. El atributo <code>alt</code> proporciona una descripción alternativa de la imagen, lo cual es importante para la accesibilidad y en caso de que la imagen no se cargue.</p>
    <br>
    <h2>EJEMPLOS</h2>
    <br>
    <h3>Ejemplo Básico</h3>
    <p>Para insertar una imagen en una página web, utiliza el siguiente código HTML:</p>
    <pre>
&lt;img src="ruta/a/tu/imagen.jpg" alt="Descripción de la imagen"&gt;
    </pre>
    <p>Esto se verá en el navegador como:</p>
    <img src="img/canada.jpg" alt="Descripción de la imagen" style="width:400px; height: auto;">
  
    <br><br>

    <h3>Ejemplo con Imagen en Tamaño Completo</h3>
    <p>Si deseas que la imagen ocupe todo el ancho del contenedor, puedes usar el siguiente código:</p>
    <pre>
&lt;img src="ruta/a/tu/imagen.jpg" alt="Descripción de la imagen" style="width:100%; height:auto;"&gt;
    </pre>
    <p>Esto se verá en el navegador como:</p>
    <img src="img/canada.jpg" alt="Descripción de la imagen en tamaño completo" style="width:100%; height: auto;">

    <br><br>
    <h3>Ejemplo con Imagen con Bordes y Sombra</h3>
    <p>Para añadir un borde y una sombra a la imagen, usa el siguiente código:</p>
    <pre>
&lt;img src="ruta/a/tu/imagen.jpg" alt="Descripción de la imagen" style="border:5px solid black; box-shadow: 10px 10px 5px grey;"&gt;
    </pre>
    <p>Esto se verá en el navegador como:</p>
    <img src="img/canada.jpg" alt="Descripción de la imagen con borde y sombra" style="border:5px solid black; box-shadow: 10px 10px 5px grey; width:400px; height: auto;">

    <br><br>
    <h3>Ejemplo con Imagen Redondeada</h3>
    <p>Para mostrar una imagen con bordes redondeados, utiliza el siguiente código:</p>
    <pre>
&lt;img src="ruta/a/tu/imagen.jpg" alt="Descripción de la imagen" style="border-radius:15px;"&gt;
    </pre>
    <p>Esto se verá en el navegador como:</p>
    <img src="img/canada.jpg" alt="Descripción de la imagen redondeada" style="border-radius:15px; width:400px; height: auto;">
    `;

    div.innerHTML = inf;
}



// BOTÓN DE VÍDEO
btnVi.onclick = () => {
    let inf = `
    <h2>VÍDEO</h2>
    <br>
    <p>Los videos son una herramienta poderosa en el diseño web y se utilizan con diversos propósitos. Estos resultan útiles al hacer un sitio web para varios propósitos:</p>
    <ul>
        <li><strong>Presentación de productos o servicios:</strong> Muestran de manera clara cómo funcionan tus productos o servicios. Los demos o tutoriales en video funcionan para explicar características clave, proporcionar ejemplos de uso y demostrar el valor de lo que ofreces.</li>
        <li><strong>Contenido educativo:</strong> Son una excelente manera de enseñar conceptos complejos de forma visual y fácil de entender. Los videos educativos, conferencias o cursos en línea te ayudarán a compartir información valiosa a tus visitantes.</li>
        <li><strong>Testimonios y reseñas:</strong> Grabar e incluir testimonios de clientes satisfechos puede tener un impacto significativo en la confianza y credibilidad de tu negocio. Mostrar personas reales que hablen de manera positiva sobre tu producto o servicio impactará en las decisiones de compra de otros usuarios.</li>
        <li><strong>Historia de la marca:</strong> Los videos son ideales para contar la historia de tu marca de una forma atractiva y emocional. Estos pueden presentar el origen de tu empresa, tus valores, el equipo detrás de ella o cualquier otro aspecto relevante que desees destacar.</li>
        <li><strong>Fondos de video:</strong> Otra posibilidad es utilizarlos como fondos en lugar de imágenes estáticas y, con ello, brindar un aspecto más dinámico y atractivo a tu sitio web. Este recurso funciona bien para portafolios, páginas de inicio o landing pages.</li>
        <li><strong>Entretenimiento y contenido viral:</strong> Si tu objetivo es captar la atención y el compromiso de los visitantes, los videos entretenidos, virales o humorísticos pueden ser útiles. Podrás compartir contenido relevante y divertido para mantener a los clientes interesados y aumentar el tiempo que pasan en tu página.</li>
    </ul>
    <br>
    <h2>EJEMPLOS</h2>
    <br>
    <h3>Ejemplo de Video Local</h3>
    <p>Para insertar un video local en una página web, utiliza el siguiente código HTML:</p>
    <pre>
&lt;video width="200" controls&gt;
    &lt;source src="video/ssstik.io_1724567054187.mp4" type="video/mp4"&gt;
    Tu navegador no soporta el elemento &lt;video&gt;.
&lt;/video&gt;
    </pre>
    <p>Esto se verá en el navegador como:</p>
    <video width="200" controls>
        <source src="video/ssstik.io_1724567054187.mp4" type="video/mp4">
        Tu navegador no soporta el elemento <code>&lt;video&gt;</code>.
    </video>
    <br><br>
    <h3>Ejemplo de Video de YouTube</h3>
    <p>Para insertar un video de YouTube, utiliza el siguiente código HTML para un iframe:</p>
    <pre>
&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/ScMzIvxBSi4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;
    </pre>
    <p>Esto se verá en el navegador como:</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ScMzIvxBSi4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;

    div.innerHTML = inf;
}



// BOTÓN DE AUDIO
btnAu.onclick = () => {
    let inf = `
    <h2>AUDIO</h2>
    <br>
    <p>La etiqueta <code>&lt;audio&gt;</code> en HTML es utilizada para reproducir audio en una página web. Es un elemento de bloque que permite mostrar un reproductor de audio en el navegador, permitiendo al usuario reproducir, detener, avanzar y retroceder el audio.
    Es importante mencionar que esta etiqueta es compatible con la mayoría de los navegadores modernos, y es una forma eficaz de agregar audio a una página web.
    
    Sin embargo, es importante tener en cuenta que no todos los navegadores soportan todos los formatos de audio, por lo que es recomendable proporcionar varios formatos de audio para garantizar la compatibilidad con la mayoría de los navegadores.</p>
    <br>
    <h2>EJEMPLOS</h2>
    <br>
    <h3>Ejemplo de Audio Local</h3>
    <p>Para insertar un archivo de audio local, utiliza el siguiente código HTML:</p>
    <pre>
&lt;audio controls&gt;
&lt;source src="ruta/a/tu/audio.mp3" type="audio/mp3"&gt;
&lt;source src="ruta/a/tu/audio.ogg" type="audio/ogg"&gt;
Tu navegador no soporta el elemento &lt;audio&gt;.
&lt;/audio&gt;
    </pre>
    <p>Esto se verá en el navegador como:</p>
    <audio controls>
        <source src="audio/Jung Kook 'Hate You' Official Visualizer.mp3" type="audio/mp3">
        <source src="ruta/a/tu/audio.ogg" type="audio/ogg">
        Tu navegador no soporta el elemento <code>&lt;audio&gt;</code>.
    </audio>
    <br><br>
    <h3>Ejemplo de Audio en Línea</h3>
    <p>Para insertar un archivo de audio en línea, puedes usar una URL directa:</p>
    <pre>
&lt;audio controls&gt;
&lt;source src="https://www.example.com/audio.mp3" type="audio/mp3"&gt;
&lt;source src="https://www.example.com/audio.ogg" type="audio/ogg"&gt;
Tu navegador no soporta el elemento &lt;audio&gt;.
&lt;/audio&gt;
    </pre>
    <p>Esto se verá en el navegador como:</p>
    <audio controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.ogg" type="audio/ogg">
        Tu navegador no soporta el elemento <code>&lt;audio&gt;</code>.
    </audio>
    `;

    div.innerHTML = inf;
};



// BOTÓN DE HIPERVÍNCULOS
btnHip.onclick = () => {
    let inf = `
    <h2 id="seccion1">HIPERVÍNCULOS</h2>
    <br>
    <p>Los hipervínculos (o enlaces) son elementos verdaderamente importantes — son los que hacen que la web sea web. 
    Para insertar un link en un texto HTML se utiliza el comando <code>&lt;a&gt;</code> (de anchor). Este comando tiene modificadores, es decir, no basta con colocar el comando, es necesario especificarle ciertos parámetros. Uno de estos parámetros es <code>href</code> con el cual le indicamos hacia dónde debe seguir el link.
    El atributo <code>href</code> de un enlace (abreviatura de “Hypertext REFerence”) indica la relación entre páginas a los motores de búsqueda. <code>href</code> es un atributo de la etiqueta anchor y contiene dos componentes: La URL (el enlace) y el texto u objeto clicable que los usuarios verán en la página (conocido como "texto de anclaje").
    </p>
    <br>
    <h2>EJEMPLOS</h2>
    <br>
    <h3>Ejemplo de Hipervínculo Externo</h3>
    <p>Para enlazar a una página web externa:</p>
    <pre>
&lt;a href="https://ibighit.com/bts/eng"&gt;Visitar el sitio oficial de BTS&lt;/a&gt;
    </pre>
    <p>Este código crea un enlace que lleva a la página oficial de BTS. Puedes probarlo haciendo clic en el siguiente enlace:</p>
    <a href="https://ibighit.com/bts/eng">Visitar el sitio oficial de BTS</a>
    <br><br>
    <h3>Ejemplo de Hipervínculo con Atributo Target</h3>
    <p>Para abrir un enlace en una nueva pestaña del navegador:</p>
    <pre>
&lt;a href="https://ibighit.com/bts/eng" target="_blank"&gt;Abrir en nueva pestaña&lt;/a&gt;
    </pre>
    <p>Este código crea un enlace que se abrirá en una nueva pestaña del navegador. Puedes probarlo haciendo clic en el siguiente enlace:</p>
    <a href="https://ibighit.com/bts/eng" target="_blank">Abrir en nueva pestaña</a>
    <br><br>
    <h3>Ejemplo de Hipervínculo a un Correo Electrónico</h3>
    <p>Para crear un enlace que abre el cliente de correo electrónico:</p>
    <pre>
&lt;a href="mailto:info@bighitmusic.com"&gt;Enviar un correo a Big Hit Music&lt;/a&gt;
    </pre>
    <p>Este código crea un enlace que abre el cliente de correo electrónico con la dirección <code>info@bighitmusic.com</code>. Puedes probarlo haciendo clic en el siguiente enlace:</p>
    <a href="mailto:info@bighitmusic.com">Enviar un correo a Big Hit Music</a>
    <br><br>
    <h3>Ejemplo de Hipervínculo con Texto de Anclaje</h3>
    <p>Para enlazar a un sitio web con un texto descriptivo:</p>
    <pre>
&lt;a href="https://www.youtube.com/user/BANGTANTV"&gt;Visita el canal oficial de BTS en YouTube&lt;/a&gt;
    </pre>
    <p>Este código crea un enlace con el texto "Visita el canal oficial de BTS en YouTube". Puedes probarlo haciendo clic en el siguiente enlace:</p>
    <a href="https://www.youtube.com/user/BANGTANTV">Visita el canal oficial de BTS en YouTube</a>
    <br>
    <br>
    <h3>Ejemplo de Hipervínculo Interno</h3>
    <p>Para enlazar a otra sección dentro de la misma página:</p>
    <pre>
&lt;a href="#seccion1"&gt;Arriba&lt;/a&gt;
    </pre>
    <a href="#seccion1">Arriba</a>
    <br>
    <p>Este código enlaza a un elemento con el id <code>seccion1</code> dentro de la misma página. Asegúrate de tener un elemento con ese id en tu HTML.</p>
    <br>
    <br>
    `;

    div.innerHTML = inf;
};

// BOTÓN DE FORMULARIOS
btnFor.onclick = () => {
    let inf = `
    <h2>FORMULARIOS</h2>
    <br>
    <p>Los formularios en HTML son utilizados para recopilar información del usuario y enviarla al servidor para su procesamiento. 
    Son estructuras que permiten a los usuarios ingresar y enviar datos a un servidor web para ser procesados. Se utilizan en diversas aplicaciones web, como registros, inicios de sesión, búsquedas, y encuestas.
    Un formulario HTML se define con la etiqueta <code>&lt;form&gt;</code>. Dentro de esta etiqueta, se pueden incluir diferentes tipos de controles, como:</p>
    
    <ul>
        <li>Campos de texto (<code>&lt;input type="text"&gt;</code>): Permiten a los usuarios ingresar texto libre.</li>
        <li>Botones de envío (<code>&lt;input type="submit"&gt;</code>): Envían los datos del formulario al servidor.</li>
        <li>Casillas de verificación (<code>&lt;input type="checkbox"&gt;</code>): Permiten seleccionar una o varias opciones.</li>
        <li>Botones de opción (<code>&lt;input type="radio"&gt;</code>): Permiten seleccionar solo una opción de un grupo.</li>
        <li>Menús desplegables (<code>&lt;select&gt;</code>): Ofrecen una lista de opciones.</li>
        <li>Textareas (<code>&lt;textarea&gt;</code>): Permiten ingresar textos largos en varias líneas.</li>
        <li>Contraseñas (<code>&lt;input type="password"&gt;</code>): Los caracteres ingresados se muestran como puntos o asteriscos para ocultar el contenido.</li>
        <li>Campos de archivo (<code>&lt;input type="file"&gt;</code>): Permiten a los usuarios seleccionar y cargar archivos.</li>
        <li>Campos de fecha y hora (<code>&lt;input type="date"&gt;</code>, <code>&lt;input type="time"&gt;</code>): Permiten seleccionar fechas y horas.</li>
        <li>Campos de color (<code>&lt;input type="color"&gt;</code>): Permiten seleccionar un color.</li>
    </ul>
    <br>

    <h2>EJEMPLOS</h2>
    <br>
    
    <h3>Ejemplo de Campo de Texto</h3>
    <form>
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name">
        <input type="submit" value="Enviar">
    </form>
    <p>Este formulario crea un campo de texto para ingresar un nombre y un botón de envío.</p>
<br>

    <h3>Ejemplo de Casilla de Verificación</h3>
    <form>
        <label><input type="checkbox" name="subscribe"> Suscribirse al boletín</label>
        <input type="submit" value="Enviar">
    </form>
    <p>Este formulario incluye una casilla de verificación para suscribirse a un boletín.</p>
<br>

    <h3>Ejemplo de Botones de Opción</h3>
    <form>
        <label><input type="radio" name="gender" value="male"> Hombre</label><br>
        <label><input type="radio" name="gender" value="female"> Mujer</label><br>
        <input type="submit" value="Enviar">
    </form>
    <p>Este formulario tiene botones de opción para seleccionar el género.</p>
<br>

    <h3>Ejemplo de Menú Desplegable</h3>
    <form>
        <label for="country">País:</label>
        <select id="country" name="country">
            <option value="usa">Estados Unidos</option>
            <option value="uk">Reino Unido</option>
            <option value="canada">Canadá</option>
        </select>
        <input type="submit" value="Enviar">
    </form>
    <p>Este formulario incluye un menú desplegable para seleccionar un país.</p>
<br>

    <h3>Ejemplo de Textarea</h3>
    <form>
        <label for="message">Mensaje:</label>
        <textarea id="message" name="message"></textarea>
        <input type="submit" value="Enviar">
    </form>
    <p>Este formulario tiene un área de texto para ingresar un mensaje largo.</p>
<br>

    <h3>Ejemplo de Campo de Contraseña</h3>
    <form>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password">
        <input type="submit" value="Enviar">
    </form>
    <p>Este formulario incluye un campo de contraseña para ingresar una contraseña oculta.</p>
<br>

    <h3>Ejemplo de Formulario con Acción</h3>
    <form action="submit_form.php" method="post">
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" name="email">
        <input type="submit" value="Enviar">
    </form>
    <p>Este formulario envía los datos a "submit_form.php" mediante el método POST.</p>
<br>

    <h3>Ejemplo de Formulario con Método GET</h3>
    <form action="search_results.html" method="get">
        <label for="query">Buscar:</label>
        <input type="text" id="query" name="query">
        <input type="submit" value="Buscar">
    </form>
    <p>Este formulario realiza una búsqueda y envía los datos a "search_results.html" mediante el método GET.</p>
<br>

    <h3>Ejemplo de Formulario con Elemento Hidden</h3>
    <form>
        <input type="hidden" name="form_id" value="12345">
        <label for="feedback">Comentarios:</label>
        <textarea id="feedback" name="feedback"></textarea>
        <input type="submit" value="Enviar">
    </form>
    <p>Este formulario incluye un campo oculto con un identificador y un área de texto para comentarios.</p>
<br>

    <h3>Ejemplo de Formulario con Botón Reset</h3>
    <form>
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username">
        <input type="submit" value="Enviar">
        <input type="reset" value="Restablecer">
    </form>
    <p>Este formulario incluye un campo de texto, un botón de envío y un botón para restablecer los campos a sus valores predeterminados.</p>
<br>

    <h3>Ejemplo de Formulario con Autocompletar</h3>
    <form>
        <label for="address">Dirección:</label>
        <input type="text" id="address" name="address" autocomplete="on">
        <input type="submit" value="Enviar">
    </form>
    <p>Este formulario tiene un campo de texto para ingresar una dirección, con autocompletado activado.</p>
<br>

    <h3>Ejemplo de Campo de Archivo</h3>
    <form>
        <label for="fileUpload">Seleccionar archivo:</label>
        <input type="file" id="fileUpload" name="fileUpload">
        <input type="submit" value="Subir Archivo">
    </form>
    <p>Este formulario permite seleccionar y cargar un archivo.</p>
<br>

    <h3>Ejemplo de Campo de Fecha</h3>
    <form>
        <label for="date">Fecha:</label>
        <input type="date" id="date" name="date">
        <input type="submit" value="Enviar">
    </form>
    <p>Este formulario permite seleccionar una fecha.</p>
<br>

    <h3>Ejemplo de Campo de Hora</h3>
    <form>
        <label for="time">Hora:</label>
        <input type="time" id="time" name="time">
        <input type="submit" value="Enviar">
    </form>
    <p>Este formulario permite seleccionar una hora.</p>
<br>

    <h3>Ejemplo de Campo de Color</h3>
    <form>
        <label for="color">Color:</label>
        <input type="color" id="color" name="color">
        <input type="submit" value="Enviar">
    </form>
    <p>Este formulario permite seleccionar un color.</p>
    `;

    div.innerHTML = inf;
};



// BOTÓN DE SEMÁNTICAS
btnSem.onclick = () => {
    let inf = `
    <h2>SEMÁNTICAS</h2>
    <br>

    <p>En HTML, los elementos semánticos son etiquetas que no solo definen la estructura del contenido en una página web, sino que también transmiten el significado del contenido que envuelven. Estos elementos permiten que tanto los desarrolladores como los navegadores y motores de búsqueda comprendan mejor la estructura y la importancia de las diferentes partes de un documento.</p>
    
    <p>Por ejemplo, antes de HTML5, se utilizaban principalmente etiquetas genéricas como <code>&lt;div&gt;</code> y <code>&lt;span&gt;</code> para estructurar el contenido, lo que no ofrecía ninguna información sobre el propósito o la función del contenido. HTML5 introdujo una serie de elementos semánticos que mejoran la claridad y la accesibilidad del código.</p>

    <p>El uso de estos elementos semánticos no solo mejora la legibilidad del código, sino que también facilita la accesibilidad y la optimización en motores de búsqueda (SEO). Los motores de búsqueda y las tecnologías de asistencia (como lectores de pantalla) pueden interpretar mejor el contenido y su estructura, lo que resulta en una mejor experiencia para todos los usuarios.</p>
    <br>
    <h2>EJEMPLOS</h2>
    <br>

    <!-- Ejemplos de código HTML que se interpretará y mostrará como contenido semántico real -->

    <h3>Ejemplo de Elemento <code>&lt;header&gt;</code></h3>
    <p>Este código crea una sección de encabezado para una página o una sección:</p>
    <div>
        <header>
            <h1>Bienvenido a Mi Sitio Web</h1>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </header>
    </div>
    <p>Este ejemplo crea una sección de encabezado con un título y un menú de navegación.</p>
<br>

    <h3>Ejemplo de Elemento <code>&lt;article&gt;</code></h3>
    <p>Este código define un artículo independiente en una página web:</p>
    <div>
        <article>
            <h2>La Importancia del HTML Semántico</h2>
            <p>Los elementos semánticos proporcionan un significado claro a las partes del documento, mejorando la accesibilidad y el SEO.</p>
        </article>
    </div>
    <p>Este ejemplo muestra un artículo con un título y un párrafo.</p>
<br>

    <h3>Ejemplo de Elemento <code>&lt;section&gt;</code></h3>
    <p>Este código define una sección temática en un documento:</p>
    <div>
        <section>
            <h2>Servicios</h2>
            <p>Ofrecemos una variedad de servicios para satisfacer sus necesidades.</p>
        </section>
    </div>
    <p>Este ejemplo muestra una sección temática con un título y una descripción.</p>
<br>

    <h3>Ejemplo de Elemento <code>&lt;footer&gt;</code></h3>
    <p>Este código define el pie de página para un documento o una sección:</p>
    <div>
        <footer>
            <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        </footer>
    </div>
    <p>Este ejemplo crea un pie de página con información de copyright.</p>
<br>

    <h3>Ejemplo de Elemento <code>&lt;aside&gt;</code></h3>
    <p>Este código define contenido secundario relacionado con el contenido principal:</p>
    <div>
        <aside>
            <h3>Noticias Recientes</h3>
            <p>Actualizaciones y noticias relevantes relacionadas con el tema principal del sitio.</p>
        </aside>
    </div>
    <p>Este ejemplo muestra una barra lateral con noticias recientes.</p>
<br>

    <h3>Ejemplo de Elemento <code>&lt;nav&gt;</code></h3>
    <p>Este código define una sección de navegación:</p>
    <div>
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    </div>
    <p>Este ejemplo crea un menú de navegación con enlaces a diferentes secciones del sitio.</p>
<br>

    <h3>Ejemplo de Elemento <code>&lt;figure&gt;</code></h3>
    <p>Este código define una figura ilustrativa con una leyenda:</p>
    <div>
        <figure>
            <img src="img/canada.jpg" height="50px" alt="Descripción de la imagen">
            <figcaption>Old Montreal Photo</figcaption>
        </figure>
    </div>
    <p>Este ejemplo muestra una imagen con una leyenda descriptiva.</p>
<br>

    <h3>Ejemplo de Elemento <code>&lt;main&gt;</code></h3>
    <p>Este código define el contenido principal del documento:</p>
    <div>
        <main>
            <h2>Contenido Principal</h2>
            <p>Este es el contenido principal de la página web.</p>
        </main>
    </div>
    <p>Este ejemplo define la sección principal del contenido de la página.</p>
<br>

    <h3>Ejemplo de Elemento <code>&lt;blockquote&gt;</code></h3>
    <p>Este código define una cita en bloque:</p>
    <div>
        <blockquote>
            <p>El HTML semántico ayuda a mejorar la accesibilidad y el SEO.</p>
            <footer>- Autor Desconocido</footer>
        </blockquote>
    </div>
    <p>Este ejemplo muestra una cita con el nombre del autor.</p>
<br>

    <h3>Ejemplo de Elemento <code>&lt;details&gt;</code></h3>
    <p>Este código define un elemento de detalles que el usuario puede expandir:</p>
    <div>
        <details>
            <summary>Más Información</summary>
            <p>Aquí está la información adicional que se muestra cuando el usuario expande el elemento.</p>
        </details>
    </div>
    <p>Este ejemplo muestra un elemento que se puede expandir para mostrar información adicional.</p>
    <br>
    <img src="img/frame.JPG" alt="Descripción de la imagen" style="width:800px; height: auto;">
  
    `;

    div.innerHTML = inf;
};



// BOTÓN DE FRAMES
btnFra.onclick = () => {
    let inf = `
    <h2>FRAMES</h2>
    <br>
    <p>En HTML, un frame o marco es una manera de dividir la ventana del navegador en varias secciones, cada una capaz de mostrar un documento HTML diferente. Sin embargo, los frames ya no se utilizan en HTML5 y están obsoletos. Actualmente, se recomienda usar otras técnicas, como CSS Flexbox, CSS Grid o el uso de <code>&lt;iframe&gt;</code> para insertar contenido externo. Esto puede ser increíblemente útil para mostrar diferentes tipos de contenido de forma simultánea, como un menú de navegación a un lado, un título en la parte superior y el contenido principal en el centro.</p>

    <p>Los frames en HTML se implementan a través de la etiqueta <code>&lt;frame&gt;</code>, que se coloca dentro de una etiqueta <code>&lt;frameset&gt;</code>. La etiqueta <code>&lt;frameset&gt;</code> se utiliza para especificar cuántos marcos se deben crear en la página web y las dimensiones de estos marcos. Estas dimensiones se pueden establecer en términos de porcentajes o píxeles. Los frames nos permiten tener diferentes páginas web, que se muestran en la misma ventana del navegador, lo que es útil para, por ejemplo, los menús de navegación.</p>
    <br>
    <h2>EJEMPLOS</h2>
    <br>

    <h3>Ejemplo Básico de <code>&lt;frameset&gt;</code> y <code>&lt;frame&gt;</code></h3>
    <p>Este código muestra cómo dividir la ventana del navegador en dos marcos: uno para el menú de navegación y otro para el contenido principal.</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Ejemplo de Frameset&lt;/title&gt;
&lt;/head&gt;
&lt;frameset cols="25%, 75%" frameborder="1"&gt;
    &lt;frame src="menu.html" name="menu"&gt;
    &lt;frame src="contenido.html" name="contenido"&gt;
&lt;/frameset&gt;
&lt;/html&gt;</code></pre>
    <p>En este ejemplo, el navegador se divide en dos columnas. El marco de la izquierda carga el contenido de <code>menu.html</code>, y el marco de la derecha carga el contenido de <code>contenido.html</code>.</p>
    <br>
    <!-- Simulación de Frames con iframes -->
    <div style="display: flex;">
        <iframe src="data:text/html;charset=UTF-8,<h1>Menú</h1><p>Contenido del menú aquí.</p>" style="width: 25%; height: 300px; border: 1px solid black;"></iframe>
        <iframe src="data:text/html;charset=UTF-8,<h1>Contenido</h1><p>Contenido principal aquí.</p>" style="width: 75%; height: 300px; border: 1px solid black;"></iframe>
    </div>
    <br><br>

    <h3>Ejemplo de <code>&lt;frameset&gt;</code> con Fila</h3>
    <p>Este código muestra cómo dividir la ventana del navegador en dos filas: una para un encabezado y otra para el contenido principal.</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Ejemplo de Frameset Vertical&lt;/title&gt;
&lt;/head&gt;
&lt;frameset rows="100px, *" frameborder="1"&gt;
    &lt;frame src="header.html" name="header"&gt;
    &lt;frame src="main.html" name="main"&gt;
&lt;/frameset&gt;
&lt;/html&gt;</code></pre>
    <p>En este ejemplo, el navegador se divide en dos filas. El marco superior carga el contenido de <code>header.html</code>, y el marco inferior carga el contenido de <code>main.html</code>.</p>
    <br>
    <!-- Simulación de Frames con iframes -->
    <div style="display: flex; flex-direction: column;">
        <iframe src="data:text/html;charset=UTF-8,<h1>Encabezado</h1><p>Contenido del encabezado aquí.</p>" style="width: 100%; height: 100px; border: 1px solid black;"></iframe>
        <iframe src="data:text/html;charset=UTF-8,<h1>Contenido Principal</h1><p>Contenido principal aquí.</p>" style="width: 100%; height: 200px; border: 1px solid black;"></iframe>
    </div>
    <br><br>

    <h3>Ejemplo de <code>&lt;frameset&gt;</code> con <code>&lt;noframes&gt;</code></h3>
    <p>Este código muestra una alternativa para los navegadores que no soportan frames, usando la etiqueta <code>&lt;noframes&gt;</code>.</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Ejemplo de Frameset con Noframes&lt;/title&gt;
&lt;/head&gt;
&lt;frameset cols="50%, 50%" frameborder="1"&gt;
    &lt;frame src="left.html" name="left"&gt;
    &lt;frame src="right.html" name="right"&gt;
&lt;/frameset&gt;
&lt;noframes&gt;
    &lt;body&gt;
        &lt;p&gt;Su navegador no soporta frames. Por favor, actualice su navegador o visite <a href="left.html">este enlace</a> para la información principal.&lt;/p&gt;
    &lt;/body&gt;
&lt;/noframes&gt;
&lt;/html&gt;</code></pre>
    <p>En este ejemplo, el contenido dentro de <code>&lt;noframes&gt;</code> se muestra solo si el navegador no soporta frames.</p>
    <br>
    <!-- Simulación de Frames con iframes -->
    <div style="display: flex;">
        <iframe src="data:text/html;charset=UTF-8,<h1>Izquierda</h1><p>Contenido del lado izquierdo aquí.</p>" style="width: 50%; height: 300px; border: 1px solid black;"></iframe>
        <iframe src="data:text/html;charset=UTF-8,<h1>Derecha</h1><p>Contenido del lado derecho aquí.</p>" style="width: 50%; height: 300px; border: 1px solid black;"></iframe>
    </div>
    <br>
    <p>Contenido alternativo para navegadores sin soporte de frames.</p>
    `;

    div.innerHTML = inf;
};



// BOTÓN DE ESTRUCTURA BÁSICA HTML
btnEs.onclick = () => {
    let inf = `
    <h2>ESTRUCTURA BÁSICA DE UNA PÁGINA HTML</h2>
    <br>
    <p>Una estructura HTML se empieza con la etiqueta <code>&lt;html&gt;</code> y acaba con <code>&lt;/html&gt;</code>. Todo lo que esté en medio será la página web. Dentro de <code>&lt;html&gt;&lt;/html&gt;</code> se encuentran dos partes diferenciadas. La primera, <code>&lt;head&gt;&lt;/head&gt;</code>, es la cabecera de la página. Aquí irán cierta información que no es directamente el contenido de la página. Aquí se pone el título de la página, los metadatos, estilos, código JavaScript (todo esto se estudiará en capítulos venideros). La primera que se suele estudiar es <code>&lt;title&gt;&lt;/title&gt;</code>, que indica el título de la página (lo que el navegador pone en la parte superior izquierda).</p>

    <p>Observad el título en la parte superior izquierda de la página. Además, dentro de <code>&lt;body&gt;&lt;/body&gt;</code> distinguimos varias etiquetas:</p>
    <ul>
        <li><code>&lt;br&gt;</code> => Indica salto de línea. En HTML un salto de línea normal (pulsando la tecla Enter) no produce un salto de línea en el resultado. Es necesario escribir <code>&lt;br&gt;</code> (u otra etiqueta similar).</li>
        <li><code>&lt;b&gt;&lt;/b&gt;</code> => Indica comienzo y fin de negrita.</li>
        <li><code>&lt;i&gt;&lt;/i&gt;</code> => Itálica.</li>
    </ul>
    <p>Es importante mencionar que las etiquetas se pueden escribir indistintamente en mayúsculas o minúsculas, es decir <code>&lt;b&gt;Esto es negrita.&lt;/b&gt;</code> y <code>&lt;B&gt;Esto es negrita.&lt;/B&gt;</code> producen el mismo resultado. Por otro lado, toda etiqueta que se abre (es decir, se pone la etiqueta sin la barra <code>/</code>) debe cerrarse (es decir, poner su equivalente con el símbolo <code>/</code>), si no, el navegador podría dar resultados inesperados. Excepciones a esto son algunas etiquetas que no lo necesitan, como <code>&lt;br&gt;</code> o <code>&lt;hr&gt;</code>.</p>
    <br>

    <h2>EJEMPLOS</h2>
    <br>

    <h3>Ejemplo de Código de la Estructura Básica de una Página HTML</h3>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;title&gt;Título de la Página&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;Bienvenido a Mi Página&lt;/h1&gt;
        &lt;p&gt;Este es un párrafo de ejemplo.&lt;/p&gt;
        &lt;b&gt;Este texto está en negrita.&lt;/b&gt;
        &lt;i&gt;Este texto está en itálica.&lt;/i&gt;
        &lt;br&gt;
        &lt;p&gt;Este es otro párrafo después de un salto de línea.&lt;/p&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>

    <h3>Ejemplo Visual de la Estructura Básica de una Página HTML</h3>
    <div style="border: 1px solid #ddd; padding: 10px;">
        <h1>Bienvenido a Mi Página</h1>
        <p>Este es un párrafo de ejemplo.</p>
        <b>Este texto está en negrita.</b>
        <i>Este texto está en itálica.</i>
        <br>
        <p>Este es otro párrafo después de un salto de línea.</p>
    </div>
    `;

    div.innerHTML = inf;
};


// BOTÓN DE META
btnMe.onclick = () => {
    let inf = `
    <h2>META</h2>
    <br>
    <p>Las etiquetas <code>&lt;meta&gt;</code> en HTML se utilizan para proporcionar metadatos sobre el documento HTML. Estos metadatos no son visibles para los usuarios, pero son cruciales para los motores de búsqueda, navegadores web y otros servicios que procesan la página. Las etiquetas <code>&lt;meta&gt;</code> se colocan dentro del <code>&lt;head&gt;</code> del documento. Aquí están algunos de los usos más comunes de la etiqueta <code>&lt;meta&gt;</code>:</p>
    <ul>
        <li>Codificación de caracteres</li>
        <li>Meta descripción</li>
        <li>Palabras clave (keywords)</li>
        <li>Autor</li>
        <li>Viewport</li>
        <li>Refresh (actualización automática)</li>
        <li>Compatibilidad con Internet Explorer</li>
        <li>Robots</li>
        <li>Open Graph (para redes sociales)</li>
    </ul>
    <p>Las meta etiquetas ayudan a mejorar la accesibilidad, el SEO y la presentación de tu página web en diferentes dispositivos y plataformas.</p>
    <br>
    <h2>EJEMPLOS</h2>
    <br>

    <h3>Ejemplo de Código de Etiquetas <code>&lt;meta&gt;</code></h3>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="description" content="Descripción de la página para motores de búsqueda"&gt;
    &lt;meta name="keywords" content="HTML, meta tags, ejemplos"&gt;
    &lt;meta name="author" content="Nombre del Autor"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;meta http-equiv="refresh" content="30"&gt;
    &lt;meta name="robots" content="index, follow"&gt;
    &lt;meta property="og:title" content="Título para Redes Sociales"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Ejemplo de Etiquetas Meta&lt;/h1&gt;
    &lt;p&gt;Estos son ejemplos de cómo usar las etiquetas meta en HTML.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

        <p>Estos son ejemplos de cómo usar las etiquetas meta en HTML.</p>
        <p><strong>Nota:</strong> El contenido de las etiquetas <code>&lt;meta&gt;</code> no es visible directamente en el contenido de la página, pero es esencial para los motores de búsqueda y la configuración del navegador.</p>
    </div>
    `;

    div.innerHTML = inf;
};




// BOTÓN DE EXTRAS/OTROS
btnEx.onclick = () => {
    let inf = `
    <h2>EXTRAS/OTROS</h2>
    <br>
    <p>En HTML, además de las etiquetas básicas, existen varias etiquetas adicionales que permiten personalizar y añadir funcionalidades a tus páginas web. Aquí veremos algunas de las más comunes y útiles:</p>
    <ul>
        <li><code>&lt;style&gt;</code>: Para incluir CSS directamente en el documento HTML.</li>
        <li><code>&lt;script&gt;</code>: Para incluir JavaScript directamente en el documento HTML.</li>
        <li><code>&lt;link&gt;</code>: Para vincular hojas de estilo externas.</li>
    </ul>
    <br>
    <h2>EJEMPLOS</h2>
    <br>

    <h3>Ejemplo de <code>&lt;style&gt;</code></h3>
    <p>La etiqueta <code>&lt;style&gt;</code> se usa para definir estilos CSS directamente en el documento HTML. Estos estilos se aplican a los elementos del documento.</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }
        h1 {
            color: #333;
        }
        p {
            color: #555;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Ejemplo de Estilo&lt;/h1&gt;
    &lt;p&gt;Este texto se muestra con un estilo definido en la etiqueta &lt;style&gt;.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    <div style="border: 1px solid #ddd; padding: 10px; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <h1>Ejemplo de Estilo</h1>
        <p>Este texto se muestra con un estilo definido en la etiqueta <code>&lt;style&gt;</code>.</p>
    </div>
    <br>

    <h3>Ejemplo de <code>&lt;script&gt;</code></h3>
    <p>La etiqueta <code>&lt;script&gt;</code> se usa para incluir JavaScript en el documento HTML. Puede ser código JavaScript inline o enlazado desde un archivo externo.</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Ejemplo de Script&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Ejemplo de Script&lt;/h1&gt;
    &lt;p id="demo"&gt;Este párrafo se actualizará con JavaScript.&lt;/p&gt;
    &lt;script&gt;
        document.getElementById("demo").innerHTML = "¡El contenido ha sido modificado por JavaScript!";
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    <div style="border: 1px solid #ddd; padding: 10px; font-family: Arial, sans-serif;">
        <h1>Ejemplo de Script</h1>
        <p id="demo">Este párrafo se actualizará con JavaScript.</p>
        <script>
            document.getElementById("demo").innerHTML = "¡El contenido ha sido modificado por JavaScript!";
        </script>
    </div>
    <br>

    <h3>Ejemplo de <code>&lt;link&gt;</code></h3>
    <p>La etiqueta <code>&lt;link&gt;</code> se usa para vincular hojas de estilo externas, que pueden definir estilos CSS que se aplican a la página.</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;link rel="stylesheet" href="styles.css"&gt;
    &lt;title&gt;Ejemplo de Link&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Ejemplo de Link&lt;/h1&gt;
    &lt;p&gt;Este texto se estiliza usando una hoja de estilos externa.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    <div style="border: 1px solid #ddd; padding: 10px; font-family: Arial, sans-serif; background-color: #e0e0e0; color: #007bff;">
        <h1>Ejemplo de Link</h1>
        <p>Este texto se estiliza usando una hoja de estilos externa.</p>
    </div>
    <br>
    <h3>Contenido Simulado de <code>styles.css</code></h3>
    <pre><code>/* styles.css */
body {
    font-family: 'Verdana', sans-serif;
    background-color: #e0e0e0;
}
h1 {
    color: #007bff;
}
p {
    color: #333;
}</code></pre>
    `;
    
    div.innerHTML = inf;
};
