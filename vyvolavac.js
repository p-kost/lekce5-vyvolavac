let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];

function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    }

    // Generujeme náhodný index
    let vyherniIndex = Math.floor(Math.random() * jmena.length);

    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];

    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vyherniIndex, 1);

    // Výherní jméno si uložíme do pole k ostatním výherním
    tazenaJmena.push(vyherniJmeno);

    let vyherce = document.querySelector('#vyherka');
    vyherce.textContent = vyherniJmeno;


//  jmena se radi od prvního, ale pak skáčou na konec seznamu
    let seznam = document.querySelector('#seznam');
    seznam.textContent = tazenaJmena.reverse();

    let pocitadlo = document.querySelector('#pocitadlo');
    pocitadlo.textContent = tazenaJmena.length;

    if (tazenaJmena.length % 2 == 0) {
        seznam.textContent = tazenaJmena;
    }

/*  další pokusy, aby se jména řadila od prvního a pak postupně a ne odzadu

    tazenaJmenaPozpatku = [];
        for (let i = tazenaJmena.length - 1; i >= 0; i--) {        
    tazenaJmenaPozpatku.push(tazenaJmena[i]);
    console.log(tazenaJmenaPozpatku);
    seznam.textContent = tazenaJmenaPozpatku;

    for (let i = 0; i < Math.floor(tazenaJmena.length / 2); i++) {
    [tazenaJmena[i], tazenaJmena[tazenaJmena.length - 1 - i]] = [tazenaJmena[tazenaJmena.length - 1 - i], tazenaJmena[i]];
    }
    seznam.textContent = tazenaJmena;
*/

}


function resetVyvolavace() {
    document.location.reload(true);
}