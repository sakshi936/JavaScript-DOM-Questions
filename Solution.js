// Question 1

document.querySelector('.crayons-subtitle-2').innerHTML = `MY NAME`;
document.querySelector('.color-base-70').innerHTML = 'Exited to learn new things'

// Question 2



// Question 3

const newsec = document.createElement('section');
newsec.setAttribute('class', 'parent');
const h3 = document.createElement('h3');
let text = document.createTextNode(`My New FAQ`);
h3.appendChild(text);
newsec.appendChild(h3);
const nav = document.querySelector('.accordion-homepage');
nav.appendChild(newsec);


// Question 4


// Question 5

const button= document.querySelector('.my-recommended-product__card-item .my-recommended-product__card-cta a');
button.innerHTML ='Check out';


// Question 6

const search= document.querySelector('._header_bottom_558sn_1 ._auxiliary_menu_558sn_31 ._wrapper_1f3oz_1 input');
search.addEventListener('mouseover',()=>{search. style.backgroundColor='red'});



