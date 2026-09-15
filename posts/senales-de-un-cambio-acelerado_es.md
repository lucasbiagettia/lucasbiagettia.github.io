# Señales de un cambio acelerado

En las últimas dos semanas se acumularon varios eventos relacionados con los labs de IA más importantes. Creo que las distintas publicaciones de las que hablaré funcionan como "ventanitas" que nos sirven para ver algo de lo que está sucediendo por dentro. Escribo esto porque me parece que poner en juego y relacionar estos acontecimientos habilita varias lecturas posibles, incluso contradictorias.

Me refiero a:

- El [informe de Anthropic sobre el impacto de la IA en el trabajo](https://www.anthropic.com/institute/econ-scenarios)
- Uno de los [informes de safety de Anthropic](https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents), el de los incidentes de ciberseguridad
- El [anuncio de renuncia de Jacob Coxon](https://x.com/hilbertspaess/status/2097476196791709843) y su hilo sobre self-improvement
- La [resolución parcial del problema de Navier-Stokes](https://openai.com/index/navier-stokes-solution/) publicada por OpenAI
- El [llamado de Naciones Unidas](https://www.unognewsroom.org/story/en/3250/un-high-commissioner-for-human-rights-volker-turks-global-update-to-the-63rd-session-of-the-human-rights-council) a reforzar los controles sobre sistemas avanzados, del 7 de septiembre
- El [comunicado de Darío Amodei sobre el futuro de la IA](https://darioamodei.com/post/we-must-pace-the-frontier), del 12
- El acuerdo de [Sam Altman](https://x.com/sama/status/2098811563415150910) y [Elon Musk](https://x.com/elonmusk/status/2098789109980332057) con ese comunicado
- La [respuesta de Donald Trump](https://www.reuters.com/world/trump-says-there-is-sick-conspiracy-against-ai-data-centers-2026-09-14/), que rechaza desacelerar frente a China

Algunos temas de estos textos son los que quiero poner en juego: capacidades excepcionales, problemas cada vez más difíciles de evaluar, peligros crecientes, auto-mejoramiento recursivo de los modelos.

## Las afirmaciones crecen más rápido que la evidencia

Cuesta encontrar la evidencia detrás de todo eso, y cuando la presentan dificilmente sea capaz de justificar la grandilocuencia de los pronósticos (a excepción de Navier-Stokes)

Empiezo por el informe sobre el futuro del trabajo (leí el informe de la web, no el paper). Plantea un par de preguntas qué no son nuevas, como cuánto de la IA va a ser reemplazo del trabajo humano y cuánto "incrementación", y observa que si aumentan las capacidades de cada trabajador van a hacer falta menos trabajadores. Dice también que el trabajo intelectual va a ser el más afectado. El problema es que el andamiaje argumental es una sucesión de obviedades como  "la economía cambia con el tiempo", "el trabajo está formado por tareas", "muchas tareas podrían automatizarse por completo". Está todo bien pero no aparecen las métricas que lo sostiene, los gráficos son ¿voluntariamente? confusos y termina en un simulador bastante elemental. 

Aunque todos intuimos que sí, nunca aparecen los casos concretos de tareas masivas que se automatizan gracias a la IA.

Eso lo ato a la renuncia de Jacob Coxon. Coxon habla de self-improvement continuo, apoyado en la idea de que no habría un techo físico para las capacidades de los LLMs, y de máquinas capaces de matarnos hacia 2030. Su único argumento público es el incidente de Anthropic. La viralización de este hilo parece responder más a que concide con nuestros prejuicios que a otra cosa. No desconozco que lo dice alguien autorizado, pero siguen sin estar los hechos que sustentan las afirmaciones.

Hago foco en esto, todos sabemos que tienen métricas, lo extraño es que teniéndolas presenten una evidencia notoriamente más débil que las afirmaciones.

## Otra pregunta sería qué se puede medir

El informe de alignment sobre los incidentes de ciberseguridad es curioso por el método de medición que proponen. Privilengian la auditoría manual y paso a paso, lecturas de las cadenas de razonamiento y preguntas de follow-up al modelo. Reconocen que las respuestas cambian si el modelo "sospecha" que está siendo evaluado.

Un eval es un instrumento de medición. Lo primero que se le pide a un instrumento es que no modifique el objeto que mide. Si las respuestas cambian cuando el modelo sospecha que lo están evaluando, el instrumento no está midiendo comportamiento: está midiendo comportamiento bajo observación, que es otra variable.

Lo segundo que se le pide es estabilidad: que dé lo mismo sobre lo mismo. Si reformular la consigna mueve el resultado, la varianza está en el instrumento, no en el sistema. Cualquiera que haya usado un modelo como juez automático sabe que cambiar el orden de las opciones, reescribir una una instrucción o agregar un ejemplo mueve la métrica.

Dos implicancias más. Por un lado usar lectura manual como método de evaluación implica renunciar a la escalabilidad, por otro lado es asumir que un CoT no es un log es un output producido con las mismas condiciones (presiones?) que otros outputs.

En ML clásico, si necesito saber si un clasificador funciona, tengo un conjunto de test, una distribución fija, un error que puedo descomponer y un intervalo de confianza. Acá es difiícil incluso obtener un número de baja confianza.

Esto relativiza que los modelos sean peligrosos, esto confienza que metodológicamente es difícil medir y auditar, hablando en criollo: saber si funciona.

## Hay que tener presente los intereses

Los CEOs de las grandes compañías defienden intereses particulares cuando hablan, y así propongo leer todo lo que digan. No digo que mientan, digo que hablan en base a intereses.

El comunicado de Amodei empieza con un movimiento lingüístico para ponner en duda que la inteligencia artificial sea beneficiosa para la humanidad (cuando se afirma en pasado algo que es obvio...)

Su llamado final es a abandonar la carrera y acordar reglas de juego: evaluadores externos insertos en los laboratorios, coordinación entre compañías de países que le caen bien, foco en evals, safety e interpretabilidad.

Hay que verlo políticamente. Pedir coordinación y límites cuando sos uno de los tres o cuatro jugadores capaces de cumplirlos consolida la posición de los que ya están adentro. Evaluaciones obligatorias, auditorías, restricciones de cómputo e infraestructura de safety son costos fijos altísimos, y los costos fijos altos son barreras de entrada. Las dos cosas pueden ser ciertas al mismo tiempo: puede haber riesgos reales y puede haber un incentivo empresarial para regularlos de una manera determinada.

La adhesión "sorpresiva" de dos de sus mayores competidores nos da más información sobre el estado del ecosistema que sobre la propuesta.

## Las mismas señales permiten lecturas contradictorias

Desde afuera no puedo verificar casi nada de lo que se afirma. No tengo acceso a los modelos internos, a los training runs, a los evals privados ni a los incidentes que no se publican. Cualquier conclusión fuerte sobre qué está pasando adentro es sólo una sospecha

- Puede ser que las capacidades estén creciendo mucho más rápido de lo que se ve desde afuera y que los que tienen acceso a los modelos internos hayan empezado a preocuparse en serio. 

- Puede ser casi lo contrario: que mejorar los modelos se esté volviendo cada vez más difícil y más caro, y que la conversación se esté corriendo desde "modelos cada vez más potentes" hacia agentes, ciencia, impacto económico y regulación, que es un terreno donde todavía hay margen para prometer.

- Puede ser un problema de monetización. Las inversiones son gigantescas y la capacidad de convertir capacidades en negocio no necesariamente crece al mismo ritmo.

- Puede ser que los problemas de evaluación y control sean reales y estén creciendo, con independencia de que haya o no una aceleración hacia algo parecido a AGI. Esta es la única que tiene evidencia técnica sólida.

- Y puede ser una jugada regulatoria de los incumbentes, con motivos de seguridad genuinos y efectos de mercado igual de genuinos.

También es posible que algunas de estas cosas estén sucediendo a la vez.

Lo que a mí me parece, me disculpan el tono conspiranóico, es que nos están "preparando para algo".

Creo que dentro de los labs hay algo que se está moviendo a mayor velocidad de la esperada, lo veo como una entropía creciente que están queriendo poner bajo control.

## Referencias

* Anthropic — *Scenarios for our Economic Future*.
* Anthropic — *An alignment assessment of recent cybersecurity incidents*, 9 de septiembre de 2026.
* OpenAI — *On the Navier–Stokes Millennium Prize Problem*, 8 de septiembre de 2026.
* Jacob Coxon — anuncio de su salida de Anthropic y advertencias sobre self-improving AI, 8 de septiembre de 2026; cobertura de TechCrunch con fragmentos del hilo original.
* United Nations — Global Update de Volker Türk ante la 63.ª sesión del Consejo de Derechos Humanos, 7 de septiembre de 2026.
* Dario Amodei — *We Must Pace the Frontier*, 12 de septiembre de 2026.
* Sam Altman y Elon Musk — reacciones públicas al comunicado de Amodei, 12 de septiembre de 2026.
* Donald Trump — respuesta a los pedidos de desacelerar el desarrollo de IA, con foco en la competencia con China, 13 de septiembre de 2026.