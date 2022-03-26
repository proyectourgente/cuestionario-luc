## Datos Abiertos

Entre Diciembre del 2021 y Marzo del 2022 se disponibilizaron 5 cuestionarios, o conversaciones, que concultaban sobre enunciados referentes a la LUC. Una de las conversaciones, que cuenta con la mayor cantidad de participantes, recibió tráfico de origenes no especificados. Las demás fueron orientadas, mediante avisos, a ciertos públicos según se detalla a continuación.

El software utilizado para los cuestionario se basa en el proyecto open source Pol.is.

Las opiniones de cada participante sobre cada enunciado se almacenaron en una matriz dispersa de opiniones. Decimos que la matriz es dispersa porque no fue obligatorio que cada participante opinara sobre todos los enunciados. Los enunciados fueron mostrados a los participantes en un modo pseudo aleatorio.


```
convs = {
    5: {
        'desc': 'Publico General',
        'short': 'pg',
        'site': 'luc.com.uy',
        'file': 'lucprodv2-5.zip'
    },
    6: {
        'desc': 'Jóvenes Interior',
        'short': 'a',
        'site': 'a.luc.com.uy',
        'file': 'lucprodv2-6.zip'
    },
    7: {
        'desc': 'Jóvenes Área Metropolitana',
        'short': 'b',
        'site': 'b.luc.com.uy',
        'file': 'lucprodv2-7.zip'
    },
    8: {
        'desc': 'Adultos y Mayores Interior',
        'short': 'c',
        'site': 'c.luc.com.uy',
        'file': 'lucprodv2-8.zip'
    },
    9: {
        'desc': 'Adultos y Mayores Área Metropolitana',
        'short': 'd',
        'site': 'd.luc.com.uy',
        'file': 'lucprodv2-9.zip'
    }
}
```

En `comments.csv`, `participants_votes.csv`, `votes.csv` se consolida la información de todas las conversaciones -que comparten la mayoría de los enunciados-. También se encuentran disponibles, en cada una de los archivos comprimidos, los datos en bruto para cada conversación por separado.

En `comments.csv` se listan los enunciados que fueron utilizados en los cuestionarios. A medida que pasaron las semanas, algunos enunciados se desactivaron (`mod=-1`) y se agregaron nuevos activos (`mod=1`). Cada enunciado pertenece a una categoría (`category`), y algunos de ellos son metadatos (enunciados de control que fueron mostrados a los participantes más frecuentemente que el resto). La columna `side` establece la orientación del enunciado respecto al contenido de la LUC. El acuerdo con un enunciado marcado como "SI" implicaría (teóricamente y en general) el desacuerdo con el artículo relacionado de la LUC.

En `participants_votes.csv` se encuentra la matriz de votos por participante. La primer columna tiene los identificadores de los participantes por conversación. La columna `conv` tiene el identificador de la conversación. Cada una de las columnas númericas hacen referencia a los enunciados identificados con `general-id`. Los valores de la matriz se identifican como sigue:


* `0   -  Paso`
* `1   -  Acuerdo`
* `-1  -  Desacuerdo`
* `NaN -  No Contesta`

En `votes.csv` se encuentra una lista de cada voto hecho por cada participante. Es información redundante con respecto a la matriz anterior a excepción de la fecha y la hora de cada voto. Es importante notar que el `comment-id` hace referencia a un identificador interno a cada conversación y no al `general-id` utilizado para los enunciados para todas las conversaciones.