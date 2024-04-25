// Question 1

document.querySelector('.crayons-subtitle-2').innerHTML = `SAKSHI PANDEY`;
document.querySelector('.color-base-70').innerHTML = 'Exited to learn new things'

// Question 2



// Question 3

const newsec= document.createElement('section');
newsec.setAttribute('class','parent');
const h3 = document.createElement('h3');
let text = document.createTextNode(`My New FAQ`);
h3.appendChild(text);
newsec.appendChild(h3);
const nav = document.querySelector('.accordion-homepage');
nav.appendChild(newsec);

