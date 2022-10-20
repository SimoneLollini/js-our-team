// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1: Trasformare la stringa foto in una immagine effettiva
// BONUS 2: Organizzare i singoli membri in card/schede

// Name: Wayne Barnett
// Role: Founder & CEO
// Image: wayne-barnett-founder-ceo.jpg
// ___________________________________
// Name: Angela 
// Role: Chief Editor
// Image: angela-caroll-chief-editor.jpg
// ____________________________________
// Name: Waleter gordon
// Role: Chief Editor
// Image: walter-gordon-office-manager.jpg
// ____________________________________
// Name: Waleter gordon
// Role: Social Media Manager
// Image: angela-lopez-social-media-manager.jpg
// _________________________________
// Name: Scott Estrada
// Role: Developer
// Image: scott-estrada-developer.jpg
// _________________________________
// Name: Barbara Ramos
// Role: Grafic designer
// Image: barbara-ramos-graphic-designer.jpg

const containerElement = document.querySelector('.container')

// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    }, {
        name: 'Angela',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    }, {
        name: 'Waleter gordon',
        role: 'Chief Editor',
        img: 'walter-gordon-office-manager.jpg',
    }, {
        name: 'Waleter gordon',
        role: 'Chief Editor',
        img: 'angela-lopez-social-media-manager.jpg',
    }, {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg',
    }, {
        name: 'Barbara Ramos',
        role: 'Grafic designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    }
]
console.log(team);


// MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto

for (let i = 0; i < team.length; i++) {
    const person = team[i];
    // console.log(person);
    for (const key in person) {
        const personKeys = person[key];
        // console.log(personKeys);
        // containerElement.insertAdjacentElement('beforeend', cardEl)
        // containerElement.insertAdjacentHTML('beforeend', personKeys)
    }
    const cardEl = document.createElement('div')
    cardEl.classList.add('card')
    containerElement.append(cardEl)
    cardEl.append(Object.values(person))
}



// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe


