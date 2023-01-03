/**

Ćwiczenie 4

Intro:

   Prowadzący ankiete potrzebuje jakieś prostej formy prezentacji wyników.
   Do pobierania wyników ankiety zasymulujemy użycie backendu do pobrania danych o typie `SurveyResultsExtended`

Ćwiczenie:

   Przygotuj funckje, która:
   - zasymuluje pobieranie wyników ankiety
   - pokaże wszystkie wyniki z ankiety
   - zawiera odpowiednie typowanie

   Dla czytelności ćwiczenia cały kod został umieszczony w jednym pliku.

*/

const fetchSurveyResults = () => {
    // Symulacja pobierania wyników ankiety z API
    return [
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
};

/**

Przykład wyniku komponentu:

<h1>Wyniki ankiety</h1>
<h2>Odpowiedź Jan Kowalski to 2 (Lublin)</h2>
<h2>Odpowiedź Marian Kowalski to 5 (Lublin)</h2>
<h2>Odpowiedź Karol Malinowski to 3 (Warszawa)</h2>
<h2>Odpowiedź Maria Malinowska to 4 (Warszawa)</h2>
<h2>Odpowiedź Darek Kowal to 1</h2>

*/

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];

async function renderSurveyResults() {
    const surveyResults = await fetchSurveyResults();

    const heading = document.createElement('h1');
    heading.innerText = 'Wyniki ankiety';

    body.appendChild(heading);
    surveyResults.forEach(survey => {
        const surveyElement = document.createElement('h2');
        surveyElement.innerText = `Odpowiedź ${survey.user} to ${survey.result} ${survey.city ? "(" + survey.city + ")" : ""}`;
        body.appendChild(surveyElement);
    });
}
