# y vos, ¿QUÉ PENSÁS?

Este repositorio contiene el código y datos del cuestionario que estuvo abierto durante los meses previos a la votación del referéndum sobre la LUC en Uruguay.

## Organización

* En `/analisis` se encontrarán notebooks para analizar los datos en la medida que estén disponibles.

* En `/datos` se ecnontrarán los datos en formato csv, y los metadatos correspondientes.

## ¿Cómo Funciona?

El software utilizado para el cuestionario y análisis de datos se basa en el proyecto open source Pol.is.

Las opiniones de cada participante sobre cada afirmación se almacenan en una gran matriz (participantes * afirmaciones = matriz dispersa de opiniones). Decimos que la matriz es dispersa porque no es obligatorio que cada participante opine sobre todas las afirmaciones.

Luego, sobre esta matriz se computan indicadores y se aplican algoritmos. Entre éstos últimos se destaca el uso de Análisis de Componentes Principales (PCA por sus siglas en inglés) para comparar y posicionar a cada participante respecto a los demás en el espacio de las opiniones. Quienes se encuentran cercanos en este espacio tienden a estar de acuerdo, y más alejados si tienden a estar en desacuerdo.

También se utilizan técnicas de agrupamiento (clustering) para detectar grupos de participantes que opinan en forma similar.

## Privacidad y Datos

El cuestionario puede responderse de forma anónima o logueandose con facebook o twitter.

Cuando una persona se loguea con redes sociales Pol.is almacena algunos datos como el correo electrónico o el nombre.

Cuándo los usuarios responden de forma anónima se guardan en la sesión del navegador las respuestas ya contestadas.

En ningún caso estos datos serán usados con otro objetivo que no sea brindar una mejor experiencia de usuario.

Contestar este cuestionario en una ventana de incógnito maximiza la privacidad de las personas.

Uno de los objetivos de este proyecto es el de disponibilizar, como datos abiertos, la matriz de opiniones para permitir que quien tenga interés pueda acceder a ella.

En todos los casos, cualquier información que se haga pública, ya sean visualizaciones, análisis o datos en crudo, se mantendrá la anonimidad de los y las participantes, aún si usaron redes sociales para responder.

## ¿Quiénes Somos?

Somos un grupo de mujeres y hombres del ámbito académico y profesional que buscan aplicar ciencia y tecnología al debate público con acciones que nos parecen importantes.

La primera iniciativa del grupo fue disponibilizar un sitio web que comparaba palabra a palabra los cambios introducidos por la Ley de Urgente Consideración para transparentar las consecuencias de una ley extensa y compleja.

Ahora nos planteamos recolectar, mediante un cuestionario en internet, las opiniones de las y los uruguayos sobre los diferentes temas de la LUC, intentando comprender las complejidades que construyen posiciones en un debate que nos afecta a todas y todos.