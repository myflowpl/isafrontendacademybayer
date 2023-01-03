/**

Ćwiczenie 2

Intro:

   W poprzednim ćwiczeniu przygotowaliśmy zestaw funkcji, który pomaga nam w analizie wyników ankiety.
   Prowadzący ankietę tym razem przygotowali nam znacznie więcej informacji związanych z odpowiedzią respondentów.

Ćwiczenie:

   Odpowiedź została rozszerzona o następujące informacje:
   - user: Imię i nazwisko respondenta
   - result: Odpowiedź respondenta w skali 1-6
   - city: (opcjonalne) Miasto respondenta
   
   Zaktualizuj treść istniejących funkcji wraz z ich typowaniem.

*/


const surveyResults = [
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

const getMaxIndex = (surveyResults) => {
    if (surveyResults.length === 0) {
        return -1;
    }

    let maxIndex = 0;
    surveyResults.forEach((surveyResult, index) => {
        if (surveyResult.result > surveyResults[maxIndex].result) {
            maxIndex = index;
        }
    });

    return maxIndex;
};

const getMinIndex = (surveyResults) => {
    if (surveyResults.length === 0) {
        return -1;
    }

    let minIndex = 0;
    surveyResults.forEach((surveyResult, index) => {
        if (surveyResult.result < surveyResults[minIndex].result) {
            minIndex = index;
        }
    });

    return minIndex;
};

const getMaxElement = (surveyResults) => {
    const maxIndex = getMaxIndex(surveyResults);
    return maxIndex !== -1 ? surveyResults[maxIndex] : null;
};

const getMinElement = (surveyResults) => {
    const minIndex = getMinIndex(surveyResults);
    return minIndex !== -1 ? surveyResults[minIndex] : null;
};

const getAverage = (surveyResults) => {
    if (surveyResults.length === 0) {
        return null;
    }

    const sum = surveyResults.reduce((previousSum, surveyResult) => previousSum + surveyResult.result, 0);
    return sum / surveyResults.length;
};

console.log(getMaxIndex(surveyResults)); // 5
console.log(getMinIndex(surveyResults)); // 4

console.log(getMaxElement(surveyResults)); // {user: "Mariusz Kowal", result: 6, city: "Gdańsk"}
console.log(getMinElement(surveyResults)); // {user: "Darek Kowal", result: 1}

console.log(getAverage(surveyResults)); // 3.9
