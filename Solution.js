// Question 1

document.querySelector('.crayons-subtitle-2').innerHTML = `MY NAME`;
document.querySelector('.color-base-70').innerHTML = 'Excited to learn new things'


// Question 3

const newsec = document.createElement('section');
newsec.setAttribute('class', 'parent');
const h3 = document.createElement('h3');
let text = document.createTextNode(`My New FAQ`);
h3.appendChild(text);
newsec.appendChild(h3);
const nav = document.querySelector('.accordion-homepage');
nav.appendChild(newsec);


// Question 5

const button= document.querySelector('.my-recommended-product__card-item .my-recommended-product__card-cta a');
button.innerHTML ='Check out';


// Question 6

const search= document.querySelector('._header_bottom_558sn_1 ._auxiliary_menu_558sn_31 ._wrapper_1f3oz_1 input');
search.addEventListener('mouseover',()=>{search. style.backgroundColor='red'});


//Question 7

const formSearch = document.querySelector('.top-navigation-main .header-search form input');
const searchText ='CSS:Selector';
formSearch.value= searchText;
const submit = document.querySelector('.top-navigation-main .header-search form .search-button');
submit.click();

// Question 8

const lang = document.querySelector('#SIvCob .z4hgWe');
for (let i = lang.children.length - 1; i >= 0; i -= 2){

    lang.removeChild(lang.children[i]);


}

//  Question 9

const heading = document.querySelector('header .text-align-center h1');
heading.style.fontFamily= 'monospace';
heading.style.color= '#ff4d4d';

//  Question 10

const startbutton = document.querySelector('main .w-full .signup-btn .login-btn-text');

startbutton.addEventListener(`mouseover`, function (){
    startbutton.style.backgroundColor='red';
} );

startbutton.addEventListener(`mouseout`, function (){
    startbutton.style.backgroundColor='';
} );



//  Question 11

// 	https://neurolab.ineuron.ai/images/ineuron-logo-white.png

const logo = document.querySelector(' header .wrapper a');
logo.removeChild(logo.children[0]);
let img = document.createElement('img');
img.src='https://neurolab.ineuron.ai/images/ineuron-logo-white.png';
logo.appendChild(img);


//  Question 12

const button = document.querySelector('.FormControl-spacingWrapper button'); 
button.style.backgroundColor='blue';

// Question 14
const HotDeals = document.querySelector('.HotDealsAll__HotCampaignsEventsContainer__FK0V2 .HotDealsAll__Heading__2fIbe');
HotDeals.style.fontSize ='80px';


// Question 15

const pctitle = document.querySelector('#gn5530d83m6001orb1 .ps-top .ps-system-title-container h3');
pctitle.style.textAlign='right';



// Question 17
const btn = document.querySelector('.ProductSummaryModels__Content .ProductSummaryModels__ButtonContainer a');
btn.setAttribute('style',"background-color: transparent; color: black;");
btn.innerText= new Date();

// Question 18

const footer =document.querySelector('.footerpage .p-f03v2__container .p-f03v2__bottom-section');
footer.style.backgroundColor='#FEBE10';

// Question 19

let src =document.querySelector('.navbar-header a img').src;
src;



// Question 20

const ele = document.querySelector('.hero-banner .cmp__hero-banner-v2 .hero-banner-kv .content-container .bottom-layout .desc');
ele.style.color='orange';




