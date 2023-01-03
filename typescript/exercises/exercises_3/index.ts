/**

Complete the following functions with their typing.

*/
interface User {
    type: 'user';
    name: string;
    languages: string[];
}

interface Admin {
    type: 'admin';
    name: string;
    role: string;
}

type Person = User | Admin;

var peoples: Person[] = [
    {
        name: 'Jan',
        type: 'user',
        languages: ['php', 'js']
    },
    {
        name: 'Marek',
        type: 'admin',
        role: 'security'
    },
];
function isUser(person: Person): person is User {
    return person.type === 'user';
}
function isAdmin(person: Person): person is Admin {
    return person.type === 'admin';
}

function showIntro(person: Person) {
    var additionalInformation = '';
    if (isUser(person)) {
        additionalInformation = person.languages.join(',');
    }
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    console.log("".concat(person.name, " - ").concat(additionalInformation));
}
