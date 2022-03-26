## Datos Abiertos

Entre Diciembre del 2021 y Marzo del 2022 se disponibilizaron 5 cuestionarios, o conversaciones, referentes a la LUC. Una de las conversaciones, que cuenta con la mayor cantidad de participantes, recibió tráfico de origenes no especificados. Las demás fueron orientadas, mediante avisos, a ciertos públicos según se detalla a continuación:

```
convs = {
    5: {
        'desc': 'Publico General',
        'short': 'pg',
        'site': 'luc.com.uy'
    },
    6: {
        'desc': 'Jóvenes Interior',
        'short': 'a',
        'site': 'a.luc.com.uy'
    },
    7: {
        'desc': 'Jóvenes Área Metropolitana',
        'short': 'b',
        'site': 'b.luc.com.uy'
    },
    8: {
        'desc': 'Adultos y Mayores Interior',
        'short': 'c',
        'site': 'c.luc.com.uy'
    },
    9: {
        'desc': 'Adultos y Mayores Área Metropolitana',
        'short': 'd',
        'site': 'd.luc.com.uy'
    }
}
```

En `comments.csv`, `participants_votes.csv`, `votes.csv` se consolida la información de todas las conversaciones -que comparten la mayoría de los enunciados-. También se encuentran disponibles, en cada una de las carpetas, los datos en bruto para cada conversación por separado.

En `comments.csv` se listan los enunciados que fueron utilizados en los cuestionarios. A medida que pasaron las semanas, algunos enunciados se desactivaron (mod=-1) y se agregaron nuevos activos (mod=1). Cada enunciado pertenece a una categoría (category), y algunos de ellos son metadatos (enunciados de control que fueron mostrados a los participantes más frecuentemente que el resto).

En `participants_votes.csv` se encuentra la matriz de votos por participante. La primer columna tiene los identificadores de los participantes por conversación. La columna `conv` tiene el identificador de la conversación. Cada una de las columnas númericas hacen referencia a los enunciados identificados con `general-id`. Los valores de la matriz se identifican como sigue:


* `0   -  Paso`
* `1   -  Acuerdo`
* `-1  -  Desacuerdo`
* `NaN -  No Contesta`

En `votes.csv` se encuentra una lista de cada voto hecho por cada participante. Es información redundante con respecto a la matriz anterior a excepción de la fecha y la hora de cada voto. Es importante notar que el `comment-id` hace referencia a un identificador interno a cada conversación y no al `general-id` utilizado para los enunciados para todas las conversaciones.