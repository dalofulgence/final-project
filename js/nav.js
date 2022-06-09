const nav = document.getElementById('navigation');
//Create elements <li>
let li0 = document.createElement('li');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
let li5 = document.createElement('li');

//Dropdown link
let lu = document.createElement('lu');
let li4_1 = document.createElement('li');
let li4_2 = document.createElement('li');
let li4_3 = document.createElement('li');

let a4_1 = document.createElement('a');
let a4_2 = document.createElement('a');

a4_1.textContent = 'Reception';
a4_2.textContent = 'Full-Time Missionary';

a4_1.className = 'active';
a4_2.className = 'active';

a4_1.setAttribute('href', '../html/reception.html');
a4_2.setAttribute('href', '../html/full-time.html');

li4_2.appendChild(a4_1);
li4_3.appendChild(a4_2);

lu.appendChild(li4_1);
lu.appendChild(li4_2);
lu.appendChild(li4_3);

li4.appendChild(lu);

//create element <a> 
let a0 = document.createElement('a');
let a1 = document.createElement('a');
let a2 = document.createElement('a');
let a3 = document.createElement('a');
let a4 = document.createElement('a');
let a5 = document.createElement('a');

//Add names to <a> 
a0.textContent = '&#9776;';
a1.textContent = 'Home';
a2.textContent = 'Temples';
a3.textContent = 'Reservation';
a4.textContent = 'Services';
a5.textContent = 'Contact';
//Add class to <a> 
a0.className = 'ham';
a1.className = 'active';
a2.className = 'active';
a3.className = 'active';
a4.className = 'active';
a5.className = 'active';

//Add link to <a>
a0.setAttribute('href', '#');
a1.setAttribute('href', '../html/home.html');
a2.setAttribute('href', '../html/temple.html');
a3.setAttribute('href', '../html/reservation.html');
a4.setAttribute('href', '../html/services.html');
a5.setAttribute('href', '../html/contact.html');

//Add <a> element to <li>
li0.appendChild(a0);
li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
li4.appendChild(a4);
li5.appendChild(a5);

//Add navigation to the document
nav.appendChild(li0);
nav.appendChild(li1);
nav.appendChild(li2);
nav.appendChild(li3);
nav.appendChild(li4);
nav.appendChild(li5);
