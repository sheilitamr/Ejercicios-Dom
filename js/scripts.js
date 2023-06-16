/* EJERCICIO 1 */

/* const titleH3 = document.getElementById('start-point');
const parentElement = titleH3.parentElement;
const secondSiblingElement = titleH3.previousElementSibling;
const firstSiblingElement = titleH3.parentElement.firstElementChild;

console.log(
  `Soy un "${titleH3.tagName}" con el id "${titleH3.id}", la clase "${titleH3.classList}". Mi padre es "${parentElement.tagName}" con el id "${parentElement.id}" y la clase "${parentElement.classList}". Tengo dos hermanos un "${secondSiblingElement.tagName}" que es mi segundo hermano, tiene un id "${secondSiblingElement.id}" y las clases "${secondSiblingElement.classList}" y un texto "${secondSiblingElement.textContent}".Mi primer hermano "${firstSiblingElement.tagName}" tiene un id "${firstSiblingElement.id}" y las clases "${firstSiblingElement.classList}" y un texto "${firstSiblingElement.textContent}" 💕💕.`
); */

//EJERCICIO 2

/* const firstListElement = document.getElementById('first-list');
const secondListElement = document.getElementById('second-list');

const changeTextContent = (element1, element2) => {
  const auxContent = element1.textContent;

  element1.textContent = element2.textContent;
  element2.textContent = auxContent;
};

changeTextContent(firstListElement.children[0], secondListElement.children[0]);

changeTextContent(firstListElement.children[1], secondListElement.children[1]);

changeTextContent(firstListElement.children[2], secondListElement.children[2]); */

//EJERCICIO 3
const headerElement = document.getElementById('header');
const allH1 = document.querySelectorAll('h1');
const allNav = document.querySelectorAll('nav');
const allUl = document.querySelectorAll('ul');
const allLi = document.querySelectorAll('.list-item');
const allA = document.querySelectorAll('a');
const allSection = document.querySelectorAll('section');
const allH2 = document.querySelectorAll('h2');
const allP = document.querySelectorAll('p');
const allImg = document.querySelectorAll('img');
const allSpan = document.querySelectorAll('span');
const allFooter = document.querySelectorAll('footer');

console.log(allH1);
console.log(`Hay 1 ${headerElement.tagName}`);
console.log(`Hay ${allH1.length} ${allH1[0].tagName}`);
console.log(`Hay ${allNav.length} ${allNav[0].tagName}`);
console.log(`Hay ${allUl.length} ${allUl[0].tagName}`);
console.log(`Hay ${allLi.length} ${allLi[0].tagName}`);
console.log(`Hay ${allA.length} ${allA[0].tagName}`);
console.log(`Hay ${allSection.length} ${allSection[0].tagName}`);
console.log(`Hay ${allH2.length} ${allH2[0].tagName}`);
console.log(`Hay ${allP.length} ${allP[0].tagName}`);
console.log(`Hay ${allImg.length} ${allImg[0].tagName}`);
console.log(`Hay ${allSpan.length} ${allSpan[0].tagName}`);
console.log(`Hay ${allFooter.length} ${allFooter[0].tagName}`);
