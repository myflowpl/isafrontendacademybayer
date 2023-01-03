/**

Ćwiczenie 1

Intro:

   Nasz program obsługuję listę wyników z ankiety. Respondenci odpowadają w skali 1-6.
   W zmiennej `surveyResults` znajdują się odpowiedzi kolejnych respondentów.

Ćwiczenie:

   Uzupełnij treść poniższych funkcji wraz z ich typowaniem. Pamiętaj o zmianie typowań `unknown`.
   
   Funkcje mają realizować następujące cele:
   - getMaxIndex: Zwraca index (pozycję w tablicy) z najwyżej punktowaną odpowiedzią
   - getMinIndex: Zwraca index (pozycję w tablicy) z najniżej punktowaną odpowiedzią
   - getMaxElement: Zwraca wartość z najwyżej punktowaną odpowiedzią
   - getMinElement: Zwraca wartość z najniżej punktowaną odpowiedzią
   - getAvarage: Zwraca średnią arytmetyczną wyników ankiety

*/

const surveyResults = [2, 5, 3, 4, 1, 6, 6, 4, 3, 5];

const getMaxIndex = (surveyResults) => {
    if (surveyResults.length === 0) {
        return -1;
    }

    let maxIndex = 0;
    surveyResults.forEach((surveyResult, index) => {
        if (surveyResult > surveyResults[maxIndex]) {
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
        if (surveyResult < surveyResults[minIndex]) {
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

    const sum = surveyResults.reduce((previousSum, surveyResult) => previousSum + surveyResult, 0);
    return sum / surveyResults.length;
};

console.log(getMaxIndex(surveyResults)); // 5
console.log(getMinIndex(surveyResults)); // 4

console.log(getMaxElement(surveyResults)); // 6
console.log(getMinElement(surveyResults)); // 1

console.log(getAverage(surveyResults)); // 3.9
