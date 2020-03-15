export const taleFunctions = [
    {
      "id": 1,
      "description": 'sytuacja początkowa',
      "variants": [
        {
          "process": 'sytuacja początkowa',
          "relationIds": [2, 3, 4, 5, 6, 6, 6, 7, 7]
        }
      ] 
    },
    {
      "id": 2,
      "description": 'Odejście kogoś z rodziny',
      "variants": [
        {
          "process": 'Odejście kogoś z rodziny',
          "relationIds": [3, 6, 7]
        }
      ] 
    },
    {
      "id": 3,
      "description": 'Zakaz i naruszenie zakazu',
      "variants": [
        {
          "process": 'Zakaz i naruszenie zakazu',
          "relationIds": [6, 7]
        },
        {
          "process": 'Nakaz i wykonanie nakazu',
          "relationIds": [6]
        }
      ] 
    },
    {
      "id": 4,
      "description": 'Poszukiwanie i otrzymanie informacji bohater/złoczyńca',
      "variants": [
        {
          "process": 'Poszukiwanie i otrzymanie informacji bohater/złoczyńca',
          "relationIds": [6, 7, 8]
        }
      ] 
    },
    {
      "id": 5,
      "description": 'Podstęp złoczyńcy i mimowolna pomoc bohatera',
      "variants": [
        {
          "process": 'Podstęp złoczyńcy i mimowolna pomoc bohatera',
          "relationIds": [6]
        }
      ] 
    },
    {
      "id": 6,
      "description": 'Szkodzenie',
      "variants": [
        {
          "process": 'Szkodzenie',
          "relationIds": [8, 9]
        }
      ] 
    },
    {
      "id": 7,
      "description": 'Brak',
      "variants": [
        {
          "process": 'Brak czegoś / kogoś',
          "relationIds": [8, 9]
        }
      ] 
    },
    {
      "id": 8,
      "description": 'apel o pomoc bohatera',
      "variants": [
        {
          "process": 'apel o pomoc | wysłanie bohatera',
          "relationIds": [9]
        }
      ] 
    },
    {
      "id": 9,
      "description": 'Wyruszenie bohatera z domu',
      "variants": [
        {
          "process": 'Wyruszenie bohatera z domu',
          "relationIds": [10, 10 ,10, 11, 12]
        }
      ] 
    },
    {
      "id": 10,
      "description": 'Pierwsza funkcja darczyńcy',
      "variants": [
        {
          "process": 'poddanie bohatera próbie, przejście próby otrzymanie magicznego pomocnika',
          "relationIds": [11, 13, 14]
        },
        {
          "process": 'poddanie bohatera próbie, przejście próby otrzymanie magicznego środka',
          "relationIds": [11, 13, 14]
        },
        {
          "process": 'poddanie bohatera próbie, nie przejście próby dar nie zostaje przekazany',
          "relationIds": [10, 8]
        }
      ]
    },
    {
      "id": 11,
      "description": 'Przemieszczenie do celu',
      "variants": [
        {
          "process": 'Przemieszczenie do celu',
          "relationIds": [12, 13]
        }
      ] 
    },
    {
      "id": 12,
      "description": 'Walka ze złoczyńcą / trudne zadanie',
      "variants": [
        {
          "process": "walka ze złoczyńcą | nacechowanie | wygrana",
          "relationIds": [13, 14, 17, 19, 20]
        },
        {
          "process":  "walka ze złoczyńcą | wygrana",
          "relationIds": [13, 14, 17, 19, 20]
        },
        {
          "process": "trudne zadanie | nacechowanie | wykonanie zadania",
          "relationIds": [13, 14, 16, 17, 18, 19, 20]
        },
        {
          "process": "trudne zadanie | wykonanie zadania",
          "relationIds": [13, 14, 16, 17, 18, 19, 20]
        },
      ]
    },
    {
      "id": 13,
      "description": 'Usunięcie nieszczęścia lub braku',
      "variants": [
        {
          "process": 'Usunięcie nieszczęścia lub braku',
          "relationIds": [6, 14, 18, 19, 20]
        }
      ]
    },
    {
      "id": 14,
      "description": 'Powrót',
      "variants": [
        {
          "process": 'Powrót',
          "relationIds": [null, 6, 15, 20]
        }
      ]
    },
    {
      "id": 15,
      "description": 'Ściganie bohatera i ratunek bohatera',
      "variants": [
        {
          "process": 'Ściganie bohatera i ratunek bohatera',
          "relationIds": [null, 6, 17, 19, 20]
        }
      ]
    },
    {
      "id": 16,
      "description": 'Nierozpoznane przybycie',
      "variants": [
        {
          "process": 'Nierozpoznane przybycie',
          "relationIds": [6, 18, 19]
        }
      ]
    },
    {
      "id": 17,
      "description": 'Rroszczenia fałszywego bohatera i zdemaskowanie',
      "variants": [
        {
          "process": "roszczenia fałszywego bohatera | rozpoznanie bohatera, zdemaskowanie fałszywego",
          "relationIds": [19]
        },
        {
          "process": "rozpoznanie bohatera, zdemaskowanie fałszywego",
          "relationIds": [19]
        }
      ]
    },
    {
      "id": 18,
      "description": 'Transfiguracja',
      "variants": [
        {
          "process": 'Transfiguracja',
          "relationIds": [16, 20]
        }
      ]
    },
    {
      "id": 19,
      "description": 'Ukaranie fałszywego bohatera lub złoczyńcy',
      "variants": [
        {
          "process": 'Ukaranie fałszywego bohatera lub złoczyńcy',
          "relationIds": [20]
        }
      ]
    },
    {
      "id": 20,
      "description": 'Wesele i objecie tronu',
      "variants": [
        {
          "process": 'Wesele i objecie tronu',
          "relationIds": [null]
        }
      ] 
    }
]

