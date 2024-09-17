//kezdőértékek beállítása a csillagok és szóközök rajzolásához
let magassag = 7;
let csillagok = 1;
let szokozok = 6;
let sor = "";

for (i = 1; i <= magassag; i++) {
    sor = " ".repeat(szokozok) + "*".repeat(csillagok);
    console.log(sor);
    csillagok += 2;
    szokozok--;
}

//kezdőértékek beállítása a vonalak és szóközök rajzolásához
const tonkMagassag = 2;
const vonalak = 3 
const tonkSzokozok = 5;

for (i = 1; i <= tonkMagassag; i++) {
    sor = " ".repeat(tonkSzokozok) + "|".repeat(vonalak);
    console.log(sor);
}

