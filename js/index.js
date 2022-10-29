import { html} from "./modules/HTML.js";
import {data} from './modules/data.js'
import PrintText from "./modules/printText.js";

const links = document.querySelectorAll('.menu__link')
const {about, offers, myWorks} = html
const {name, offerTitle, backgrounds} = data
console.log(links);

// link.classList.remove('menu__link_active')
links.forEach(link => {
   link.addEventListener('click', e => {
      e.preventDefault()
      links.forEach(item=>{
         item.classList.remove('menu__link_active')
      })
      e.target.classList.add('menu__link_active')
      const currAttr = e.target.dataset.href
      if (currAttr === 'about') {
         renderContent(about, backgrounds[1])
         setTimeout(()=>{
            PrintText()
         },1000)
      }
      if (currAttr === 'offers') {
         renderContent(offers)
         setTimeout(()=>{
            PrintText()
         },1000)
      }
      if (currAttr === 'myWorks') {
         renderContent(myWorks)
      }
   })
})


document.addEventListener("click", function(event){
   const el = event.target;
   if(el.closest("[data-burger]")){
      document.querySelectorAll("[data-burger]").forEach(item=>{
         item.classList.toggle("toggle");
      })
   }
}, true)

function renderContent(htmlProp, cssProp){
   const container = document.querySelector('.intro__container')
   container.innerHTML = htmlProp
   container.style.backgroundImage = `url(${cssProp})`
   return container
}

document.addEventListener('DOMContentLoaded',()=>{
   
})