/**

Ćwiczenie 3

Intro:

   Poprzednie ćwiczenia pokazały, że możemy otrzymać różne typy danych w ramach odpowedzi respondentów.
   Prowadzący ankietę chciałby w łatwy sposób móc porównać średnie ankiet z różnymi typami danych

Ćwiczenie:

   Przygotuj funkcję `getAverage`, która wylicza średnią i obsługuje różne typy danych respondentów.
   Nie ograniczaj się do istniejących już typów SurveyResults i SurveyResultsExtended.
   Przygotuj funkcję `getAverage` w taki sposób, aby mogła obsłużyć dowolny typ danych.

Wskazówka:

   https://www.typescriptlang.org/docs/handbook/generics.html

*/

const surveyResults = [2, 5, 3, 4, 1, 6, 6, 4, 3, 5];
const surveyResults2 = [1, 2, 5, 4, 6];

const surveyResultsExtended = [
    {
        user: "Jan Kowalski",
        result: 2,
        city: "Lublin",
    },
    {
        user: "Marian Kowalski",
        result: 5,
        city: "Lublin",
    },
    {
        user: "Karol Malinowski",
        result: 3,
        city: "Warszawa",
    },
    {
        user: "Maria Malinowska",
        result: 4,
        city: "Warszawa",
    },
    {
        user: "Darek Kowal",
        result: 1,
    },
    {
        user: "Mariusz Kowal",
        result: 6,
        city: "Gdańsk",
    },
    {
        user: "Aneta Kowal",
        result: 6,
    },
    {
        user: "Maria Ryś",
        result: 4,
    },
    {
        user: "Maria Kowalska",
        result: 3,
        city: "Szczecin",
    },
    {
        user: "Marcin Bobik",
        result: 5,
    },
];

const getAverage = (surveyResults, resultFunction) => {
    if (surveyResults.length === 0) {
        return null;
    }

    const sum = surveyResults
        .map(result => resultFunction(result))
        .reduce((previousSum, surveyResult) => previousSum + surveyResult, 0);
    return sum / surveyResults.length;
};

// Poniższy kod również będzie wymagał aktualizacji
console.log(getAverage(surveyResults, (surveyResult) => surveyResult)); // 3.9
console.log(getAverage(surveyResults2, (surveyResult) => surveyResult)); // 3.6
console.log(getAverage(surveyResultsExtended, (surveyResult) => surveyResult.result)); // 3.9
