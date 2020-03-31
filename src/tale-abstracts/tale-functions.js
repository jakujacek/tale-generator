export const taleFunctions = [
    {
      "id": 1,
      "description": 'sytuacja początkowa',
      "variants": [
        {
          "process": 'cards.function.1.process.1',
          "relationIds": [2, 3, 4, 5, 6, 7],
          "maxRepeat": 0,
          "repeated": 0
        }
      ] 
    },
    {
      "id": 2,
      "description": 'Odejście kogoś z rodziny',
      "variants": [
        {
          "process": 'cards.function.2.process.1',
          "relationIds": [3, 6, 7],
          "maxRepeat": 0,
          "repeated": 0
        }
      ] 
    },
    {
      "id": 3,
      "description": 'Zakaz i naruszenie zakazu',
      "variants": [
        {
          "process": 'cards.function.3.process.1',
          "relationIds": [6, 7],
          "maxRepeat": 0,
          "repeated": 0
        },
        {
          "process": 'cards.function.3.process.2',
          "relationIds": [6],
          "maxRepeat": 0,
          "repeated": 0
        }
      ] 
    },
    {
      "id": 4,
      "description": 'Poszukiwanie i otrzymanie informacji bohater/złoczyńca',
      "variants": [
        {
          "process": 'cards.function.4.process.1',
          "relationIds": [6, 7, 8],
          "maxRepeat": 0,
          "repeated": 0
        }
      ] 
    },
    {
      "id": 5,
      "description": 'Podstęp złoczyńcy i mimowolna pomoc bohatera',
      "variants": [
        {
          "process": 'cards.function.5.process.1',
          "relationIds": [6],
          "maxRepeat": 0,
          "repeated": 0
        }
      ] 
    },
    {
      "id": 6,
      "description": 'Szkodzenie',
      "variants": [
        {
          "process": 'cards.function.6.process.1',
          "relationIds": [8, 9],
          "maxRepeat": 2,
          "repeated": 0
        }
      ] 
    },
    {
      "id": 7,
      "description": 'Brak',
      "variants": [
        {
          "process": 'cards.function.7.process.1',
          "relationIds": [8, 9],
          "maxRepeat": 2,
          "repeated": 0
        }
      ] 
    },
    {
      "id": 8,
      "description": 'apel o pomoc bohatera',
      "variants": [
        {
          "process": 'cards.function.8.process.1',
          "relationIds": [9],
          "maxRepeat": 0,
          "repeated": 0
        }
      ] 
    },
    {
      "id": 9,
      "description": 'Wyruszenie bohatera z domu',
      "variants": [
        {
          "process": 'cards.function.9.process.1',
          "relationIds": [10, 10 ,10, 11, 12],
          "maxRepeat": 2,
          "repeated": 0
        }
      ] 
    },
    {
      "id": 10,
      "description": 'Pierwsza funkcja darczyńcy',
      "variants": [
        {
          "process": 'cards.function.10.process.1',
          "relationIds": [11, 13, 14],
          "maxRepeat": 2,
          "repeated": 0
        },
        {
          "process": 'cards.function.10.process.2',
          "relationIds": [11, 13, 14],
          "maxRepeat": 2,
          "repeated": 0
        },
        {
          "process": 'cards.function.10.process.3',
          "relationIds": [10, 8],
          "maxRepeat": 2,
          "repeated": 0
        }
      ]
    },
    {
      "id": 11,
      "description": 'Przemieszczenie do celu',
      "variants": [
        {
          "process": 'cards.function.11.process.1',
          "relationIds": [12, 13],
          "maxRepeat": 0,
          "repeated": 0
        }
      ] 
    },
    {
      "id": 12,
      "description": 'Walka ze złoczyńcą / trudne zadanie',
      "variants": [
        {
          "process": "cards.function.12.process.1",
          "relationIds": [13, 14, 17, 19, 20],
          "maxRepeat": 0,
          "repeated": 0
        },
        {
          "process":  "cards.function.12.process.2",
          "relationIds": [13, 14, 17, 19, 20],
          "maxRepeat": 0,
          "repeated": 0
        },
        {
          "process": "cards.function.12.process.3",
          "relationIds": [13, 14, 16, 17, 18, 19, 20],
          "maxRepeat": 0,
          "repeated": 0
        },
        {
          "process": "cards.function.12.process.4",
          "relationIds": [13, 14, 16, 17, 18, 19, 20],
          "maxRepeat": 0,
          "repeated": 0
        },
      ]
    },
    {
      "id": 13,
      "description": 'Usunięcie nieszczęścia lub braku',
      "variants": [
        {
          "process": 'cards.function.13.process.1',
          "relationIds": [6, 14, 18, 19, 20],
          "maxRepeat": 0,
          "repeated": 0
        }
      ]
    },
    {
      "id": 14,
      "description": 'Powrót',
      "variants": [
        {
          "process": 'cards.function.14.process.1',
          "relationIds": [null, 6, 15],
          "maxRepeat": 1,
          "repeated": 0
        }
      ]
    },
    {
      "id": 15,
      "description": 'Ściganie bohatera i ratunek bohatera',
      "variants": [
        {
          "process": 'cards.function.15.process.1',
          "relationIds": [null, 6, 17, 19, 20],
          "maxRepeat": 0,
          "repeated": 0
        }
      ]
    },
    {
      "id": 16,
      "description": 'Nierozpoznane przybycie',
      "variants": [
        {
          "process": 'cards.function.16.process.1',
          "relationIds": [18, 19],
          "maxRepeat": 0,
          "repeated": 0
        }
      ]
    },
    {
      "id": 17,
      "description": 'Roszczenia fałszywego bohatera i zdemaskowanie',
      "variants": [
        {
          "process": "cards.function.17.process.1",
          "relationIds": [19],
          "maxRepeat": 0,
          "repeated": 0
        },
        {
          "process": "cards.function.17.process.2",
          "relationIds": [19],
          "maxRepeat": 0,
          "repeated": 0
        }
      ]
    },
    {
      "id": 18,
      "description": 'Transfiguracja',
      "variants": [
        {
          "process": 'cards.function.18.process.1',
          "relationIds": [16, 20],
          "maxRepeat": 0,
          "repeated": 0
        }
      ]
    },
    {
      "id": 19,
      "description": 'Ukaranie fałszywego bohatera lub złoczyńcy',
      "variants": [
        {
          "process": 'cards.function.19.process.1',
          "relationIds": [20],
          "maxRepeat": 0,
          "repeated": 0
        }
      ]
    },
    {
      "id": 20,
      "description": 'Wesele i objecie tronu',
      "variants": [
        {
          "process": 'cards.function.20.process.1',
          "relationIds": [null],
          "maxRepeat": 0,
          "repeated": 0
        }
      ] 
    }
]

