const vardi=['Pēteris Bērziņš', 'Jānis Ozoliņš', 'Anna Krūze', 'Madara Apse', 'Kristīne Vējone']; // balvu saņēmēji, ierakstīti masīvos
const balvas=['viedtālrunis', 'tējkanna', 'treniņbikses', 'ceļojums uz Bali', 'čipsi']; // balvas, ierakstītas masīvos

let uzvaretajuSkaits=5; // ir pieņemts, ja ir 2 vārdi - pirmo raksta ar mazo burtu un otru ar lielo
let rand=Math.random()*5; // tiek izmantota matemātikas izteiksme, lai izlozes kārtībā noteiktu balvu katram cilvēkam (tas*5 parāda, ka ir 5 balvas, no kā notiek izvēle)

rand=Math.floor(rand); // tiek noapaļots uz leju

console.log(vardi[rand]); // izvada iegūtos rezultātus (vārds+randomā iegūto balvu) konsolē

