# Formato Esperado de Markdown

Este documento explica las reglas de formato obligatorias y opcionales que debes seguir al crear un nuevo post para este blog en Vanilla JS. Esta misma oración es el 'excerpt' (extracto) que será automáticamente extraído y mostrado en la página principal.

## Reglas Obligatorias (Para el Parser)

Como la lógica en Javascript descarga este archivo `.md` crudo para construir el sitio visualmente, espera que dos cosas estén **siempre** en la parte superior del archivo:

1. **El Título**: La primerísima línea del archivo debe ser una etiqueta `H1` comenzando con exactamente un `#` y un espacio.
2. **El Extracto**: El primer párrafo de texto normal que no esté vacío y que aparezca después del título, se utilizará como texto de previsualización en el `index.html`.

*No coloques imágenes (`![img]`), citas (`>`), o bloques de código (` ``` `) antes de tu primer párrafo normal, porque el parser los va a ignorar al buscar el extracto.*

## Traducciones (El sufijo `_en` y `_es`)

Para crear un post bilingüe, debes crear dos archivos idénticos que difieran únicamente por el sufijo del idioma:
- `posts/mi-tema_en.md` (Inglés)
- `posts/mi-tema_es.md` (Español)

Luego, abre el archivo `posts.js` e incluye el ID común (`"mi-tema"`) en el arreglo. El sitio web se encarga del resto automáticamente.

## Elementos de Markdown Soportados

Este blog usa `marked.js` y CSS personalizado para formatear todo específicamente con una legibilidad tipo "investigación" (research-ready). Sentite libre de usar:

- **Negritas** e *Itálicas*.
- [Enlaces dentro del texto](https://lucasbiagetti.com.ar).
- Bloques de código (automáticamente tendrán resaltado de sintaxis si especificas el lenguaje, ej., ` ```python `).
- Citas `>` para referencias.
- Listas con viñetas `-` y numéricas `1.`.

### Renderizado de Matemáticas

Si necesitas escribir ecuaciones, este blog soporta KaTeX nativamente.
Puedes escribir matemáticas en línea así $E = mc^2$, o usar `$$` para bloques matemáticos:

$$
f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2 \pi i \xi x} \,d\xi
$$

¡Feliz escritura!
