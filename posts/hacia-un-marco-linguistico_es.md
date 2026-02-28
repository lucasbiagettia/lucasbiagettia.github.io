# Hacia un marco lingüístico para reflexionar sobre los modelos de lenguaje o ¿Cómo construimos las palabras que nos faltan?

Como los modelos de lenguaje se expresan, precisamente, con lenguaje natural, tendemos a antropomorfizarlos y hablar de ellos como si fueran humanos. Usamos verbos como "aprender", "entrenar", "razonar", a veces sin detenernos a pensar qué significan realmente. En este texto aspiro a ayudar a ordenar esa confusión.

## 1. Algunas metáforas que se nos fueron de las manos

Hace un tiempo, hablando con mi padre, que es un tipo muy inteligente y no tiene ninguna relación con la tecnología, me hizo la siguiente pregunta:

*"Si yo voy a un profesor de tenis a que me entrene, mejoro yo y le pago yo. ¿Cómo es que vos entrenás a tu inteligencia artificial y también le pagás vos?"*

Él estaba tomando la metáfora del entrenamiento como un hecho, como algo literal o un nuevo uso de la palabra. Al hacerlo mostró los límites de la misma. En machine learning, "entrenamiento" no es más que una forma didáctica de explicar un proceso en el que una función matemática optimiza los pesos de una red neuronal para minimizar una función de pérdida. No hay agencia, no hay mejora, no hay sujeto. Hay optimización.

Hablar de entrenamiento es perfecto mientras nos quedemos en el ámbito didáctico, sin dudas, ayuda a acercar conceptos matemáticos difíciles a una intuición. El problema es que esa metáfora está arriba de una pila de metáforas que ya de por sí son simplificaciones y hoy por hoy creo que está generando confusiones relevantes.

"Red neuronal" de por sí es una metáfora que ayuda a entender que hay capas de procesamiento, pero no necesariamente se parece a una red de neuronas biológicas. "Algoritmos genéticos" es otra metáfora biológica para un proceso de optimización. "Bosques aleatorios" lo mismo.

El problema es que estas metáforas escaparon del contexto didáctico y hoy no es infrecuente que una explicación sea "el modelo se **entrena** mediante **algoritmos genéticos** de una **red neuronal**". Lo que es sumamente impreciso.

Esta es la primera capa de confusión lingüística que identifico.

## 2. Las palabras que parecen significar lo mismo

Insistamos con el verbo "aprender". Un ingeniero de machine learning dice que su modelo "aprendió" a clasificar imágenes. Un psicólogo cognitivista dice que un chico "aprendió" a resolver ecuaciones. Un neurocientífico dice que una red neuronal biológica "aprendió" a reconocer caras.

### La misma palabra sin necesariamente hablar de lo mismo.

No me queda claro si para un ingeniero "aprender" es minimizar una función de pérdida sobre un conjunto de datos y generalizar razonablemente datos nuevos, o si simplemente algo relacionado con obtener mejores resultados dada una métrica. Es decir, a nivel ingeniería no me queda claro si el aprendizaje está más cerca de la función de pérdida o de la métrica.

Para el pedagogo (también soy cientista de la educación) el aprendizaje es un proceso subjetivo que involucra cambios internos y externos y que no necesariamente se traduce en una mejora medible. Esta definición es una simplificación muy discutible desde la pedagogía, pero sirve para ilustrar el punto. Vale mencionar que existen dos grandes teorías del aprendizaje que me gustan, la psicología genética y el constructivismo, que discuten cuánto de este proceso es interno y cuánto externo.

Un chico que resuelve un problema de una forma inesperada aprendió algo, aunque no pueda demostrarlo en un examen. Un estudiante que repite la respuesta correcta sin entender por qué quizás no aprendió nada, aunque la métrica diga lo contrario. 

Esta reflexión tiene asidero en un fracaso propio intentando modelar algo no-lingüístico con una transformer. Confié en que podía usar la función de pérdida como métrica, una confusión grave. La función de pérdida es lo que el modelo optimiza internamente durante el entrenamiento: es lo que guía su convergencia. La métrica es lo que nosotros, los humanos, miramos después para decidir si el resultado es bueno. Son dos cosas distintas. Y el hecho de que puedan diverger.

Como ingenieros, vivimos de medir resultados. Diseñamos funciones de pérdida, evaluamos con métricas, optimizamos números. Es lo que sabemos hacer y por lo que nos pagan. 

Esto nos revela una asimetría para resaltar: 
>En ingeniería necesitamos que todo sea medible para considerarlo real, mientras que en educación no nos interesa medirlo. ¿Qué dice eso sobre la diferencia entre los dos procesos que llamamos con la misma palabra?

Hoy por hoy se discute si cuando un modelo converge "aprende" o solo encuentra atajos e imita bien.

¿No será que usamos palabras como "aprender" para ocultar nuestra ignorancia sobre lo que realmente pasa? ¿No será que estamos viendo los modelos desde un punto de vista puramente fenomenológico?

Esta es la segunda capa de confusión lingüística que identifico.

## Lo que (todavía) no podemos nombrar

Veo un nivel más profundo todavía, donde el debate es casi puramente filosófico o, al menos, está en el campo de las ciencias sociales. Y para ilustrarlo miremos lo que están haciendo las empresas que construyen estos modelos.

Me tranquilizó mucho ver que estas dudas atraviesan también a empresas que admiro muchísimo como Anthropic, la que está detrás de Claude. Publicaron un documento que la comunidad terminó llamando el *soul document*: un texto extenso que define cómo debería concebirse a sí mismo su modelo más avanzado. En ese documento aparece una frase que vale la pena detenerse a pensar: Anthropic dice que Claude "puede tener emociones funcionales" no idénticas a las humanas, sino "procesos análogos que emergieron del entrenamiento con texto humano".

*Emociones funcionales*. Esas dos palabras son un parche lingüístico. Son la admisión de que algo ocurre dentro del modelo que se parece a una emoción, que funciona como una emoción en ciertos contextos, pero que no tenemos nombre propio para eso. Entonces juntamos un sustantivo que conocemos con un adjetivo que lo relativiza, y seguimos adelante. Es también admitir que ni los propios creadores de los modelos están seguros de qué está pasando dentro de ellos.

Amanda Askell, la filósofa que trabaja en Anthropic y fue una de las responsables de ese documento, lo dijo con claridad en una [entrevista en Hard Fork en enero de 2026](https://podcasts.apple.com/us/podcast/will-chatgpt-ads-change-openai-amanda-askell-explains/id1528594034?i=1000746333087): no sabemos realmente qué da lugar a la consciencia. Dario Amodei, el CEO, fue aún más lejos un mes después en el podcast [Interesting Times](https://www.iheart.com/podcast/326-interesting-times-with-ros-29972437/episode/anthropics-chief-on-ai-we-dont-322461021/): "No sabemos si los modelos son conscientes. Ni siquiera estamos seguros de saber qué significaría que un modelo fuera consciente".

Detengámonos en esa frase. No dice "no son conscientes" ni "son conscientes". Dice: no tenemos las herramientas conceptuales para siquiera formular la pregunta correctamente.

*Consciencia*, *entender*, *sentir*, *pensar*, *razonar* son términos que usamos todos los días para hablar de LLMs que tienen mucho debate filosófico detrás. Cuando los aplicamos a máquinas, heredamos toda esa carga de ambigüedad y le sumamos una nueva: la de un fenómeno sin precedentes que genuinamente no se parece a nada que hayamos visto antes. Este es un problema clásico de filosofía de la ciencia: pocas palabras para muchos fenómenos. Y estamos tratando de resolver preguntas fundamentales con un vocabulario que no fue diseñado para ellas.

Esta es la última y más profunda capa de confusión que hoy identifico.

## Hacia un mapa, y quizás hacia nuevas palabras

No tengo la respuesta a si los modelos "aprenden" o "memorizan" o hacen algo que todavía no tiene nombre. Pero sí creo que podemos empezar a organizar la confusión. Cuando alguien dice algo sobre lo que un modelo de lenguaje "hace", vale la pena preguntarse en cuál de estos planos está hablando:

Está el plano de la **metáfora didáctica**: "entrenamos el modelo", "la red tiene capas". Son atajos útiles que no confunden a nadie mientras se mantengan en su función didáctica. No hace falta corregirlos; hace falta no confundirlos con descripciones literales.

Está el plano de las **palabras compartidas con significados distintos**: "aprender", "entender", "razonar". Acá es donde la conversación se enturbia, porque cada disciplina ¿o cada persona? entiende algo diferente, y no están siendo suficientes los esfuerzos por aclararlo. La mayoría de las discusiones improductivas sobre IA viven en este plano.

Y está el plano de **lo que no podemos nombrar**: cosas que se parecen a "consciencia", "experiencia subjetiva", "interioridad". Acá no encuentro que las palabras que tengamos ahora alcancen, y las personas más serias trabajando en esto lo admiten abiertamente.

Distinguir estos planos no resuelve ninguno de los problemas de fondo. Pero evita uno muy concreto: creer que estamos teniendo una conversación sobre el mismo tema que nuestro interlocutor, cuando en realidad estamos hablando de cosas completamente distintas con las mismas palabras.

Y creo que ahí está el principio de una respuesta a la pregunta del título. ¿Cómo construimos las palabras que nos faltan? No las vamos a inventar desde la ingeniería sola, ni desde la filosofía sola, ni desde la lingüística sola. Askell misma lo insinúa cuando insiste en que la pregunta de la consciencia "genuinamente es difícil" y que necesitamos más rigor filosófico en el desarrollo de IA, no menos. Amodei lo reconoce cuando dice que no sabe si quiere usar la palabra "consciente" porque no está seguro de qué implica.

Creo que las palabras que nos faltan van a venir de gente dispuesta a pensar entre disciplinas. Gente que entienda la convergencia matemática pero que también se haya preguntado qué significa aprender para un humano. Gente que sepa diseñar una función de pérdida pero que no confunda optimizar una métrica con comprender un fenómeno. Ese cruce tampoco tiene nombre todavía. Quizás construir ese nombre sea el primer paso.

---

*Trabajo como ingeniero de IA/ML y estudié ciencias de la educación y matemática. Construyo sistemas predictivos y enseño en universidades. Algunos de los problemas más importantes de la inteligencia artificial no son técnicos sino lingüísticos, y estoy convencido de que resolverlos va a requerir gente dispuesta a pensar entre disciplinas.*