// CS10 GRADE CALCULATOR

// Input
let S1 = +prompt ("Enter Client-Side 1 Grade: ");
let SP1 = +prompt ("Enter Structured Programming 1 Grade: ");
let SP2 = +prompt ("Enter Structured Programming 2 Grade: ");
let CS2 = +prompt ("Enter Client-Side 2 Grade: ");
let PA = +prompt ("Enter Project A Grade: ");

// Process
let total = (S1 + SP1 + SP2 + CS2 + PA) / 5; 

// Output
alert (`Final CS10 Grade: ${total} % `)