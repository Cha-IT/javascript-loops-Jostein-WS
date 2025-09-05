// oppgave 1
// a
// while løkke
let a = 0;
while (a < 11) {
    console.log(a);
    a++;
}


// b
// for løkke
for (let b = 0; b < 11; b++) {
    console.log(b);
}

// oppgave 2
// a
/* let passord = prompt("Skriv inn passordet ditt");
while (passord != "hemmelig") {
    passord = prompt("Feil passord, prøv igjen");
} */

// b
/* let passord;
let forsøk = 0;
for (forsøk = 0; forsøk < 3; forsøk++) {
    passord = prompt("Skriv inn passordet ditt");
    if (passord === "hemmelig") {
        alert("Riktig passord");
    }else if (forsøk === 3) {
        alert("For mange forsøk, kontoen er sperret");
    }
}   */

// oppgave 3
/* let tall = prompt("Skriv inn enten oddetall eller partall");
let oddetall = 1
let partall = 2
if (tall === "oddetall") { 
    while (oddetall < 100) {
        console.log(oddetall);
        oddetall += 2;
    }
    
}  else if (tall === "partall") { 
        while (partall < 101) {
            console.log(partall);
            partall += 2;
        }
    } */

// oppgave 4
for (let i = 1; i <= 10; i++) {
    console.log("Tabell for " + i);
    for (let j = 1; j <= 10; j++) {
        let produkt = i * j;
        console.log(i + " * " + j + " = " + produkt);
    }
}
