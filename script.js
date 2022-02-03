const vardi = ['Pēteris Bērziņš', 'Jānis Ozoliņš', 'Anna Krūze', 'Madara Apse', 'Kristīne Vējone']; // balvu saņēmēji, ierakstīti masīvos
const balvas = ['Viedtālrunis', 'Tējkanna', 'Treniņbikses', 'Ceļojums uz Bali', 'Čipsi']; // balvas, ierakstītas masīvos

let uzvaretajuSkaits = 5; // ir pieņemts, ja ir 2 vārdi - pirmo raksta ar mazo burtu un otru ar lielo
let rindas = document.querySelector('.rindas'); // tiks ievietots rindās

rindas.innerHTML = ' ';

for (let i = 0; i < uzvaretajuSkaits; i++) {

    let rand = Math.random() * 5; // tiek izmantota matemātikas izteiksme, lai izlozes kārtībā noteiktu balvu katram cilvēkam (tas *5 parāda, ka ir 5 balvas, no kā notiek izvēle)
    rand = Math.floor(rand); // tiek noapaļots uz leju

    let uzvaretajs = vardi[rand]; // izvada iegūtos rezultātus (vārds+randomā iegūto balvu) konsolē
    let davana = balvas[rand];
    rindas.innerHTML += `

    <tr>
    <td> ${i+1} </td>
    <td> ${uzvaretajs} </td>
    <td> ${davana} </td>
    </tr>`

}