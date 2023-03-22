/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe


BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede
 */



const myteam = [
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela',
        surname: 'Caroll',
        role: 'Founder & CEOChief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter',
        surname: 'Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela',
        surname: 'Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]

const card = document.querySelector('.row');

function createCards() {

    //creo la colonna
    let myCol = document.createElement('div');
    myCol.className = 'col-4 card';

    //creo l'immagine
    let userImg = document.createElement('img');
    userImg.className = 'card-img-top';
    userImg.src = '...';
    userImg.alt = '...';

    //creo la card body
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    //creo il titolo della card con dentro il nome dell'utente
    let titleName = document.createElement('h5')
    titleName.className = 'card-title';
    titleName.textContent = 'Nome e cognome'
    //creo la card text
    let cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = 'Role'
    //collego la col alla row
    card.append(myCol);

    myCol.append(userImg, cardBody)

    cardBody.append(titleName, cardText)
    console.log(card);
}






for (let i = 0; i < myteam.length; i++) {
    console.log(myteam[i].name);
    console.log(myteam[i].surname);
    console.log(myteam[i].role);
    console.log(myteam[i].image);



    //titleName.textContent = myteam[i].name;
    //titleName.textContent += myteam[i].surname;
    //cardText.textContent += myteam[i].role;
    //cardText.textContent += myteam[i].image;

}
console.log(card);