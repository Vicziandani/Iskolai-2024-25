
//prompt adatbekérés csak weboldalon használható, így a példát fájllal azonos nevű HTML fájllal együtt kell használni
let OsszMagassag = parseInt(prompt("Add meg a fa összmagasságát:"));
const tonkMagassag = 2;
const vonalak = 3;
let magassag = OsszMagassag - tonkMagassag;

for (let i = 1; i <= magassag; i++) {
    let szokozok = magassag - i;
    let stars = 2 * i - 1;

    let sor = ' '.repeat(szokozok) + '*'.repeat(stars);

    console.log(sor);
}

for (let i = 0; i < tonkMagassag; i++) {
    let szokozok = magassag - vonalak;

    console.log(' '.repeat(szokozok) + '|'.repeat(vonalak));
}
//a feladat megoldása a böngésző Console részén fog megjelnni (F12)