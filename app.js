const menu=document.querySelector('.menu')
const list=document.querySelector('.list')
const secText=document.querySelector('.sec-text')


menu.addEventListener('click',(event)=>{

    list.style.display='block'
    menu.style.display='none'


    setTimeout(() => {

        list.style.display='none'
        menu.style.display='block'


        
    }, 5000);

})


setTimeout(() => {

    secText.textContent='Content Writer'
    
}, 2000);


setTimeout(() => {

    secText.textContent='Web Developer'
    
}, 4000);

setTimeout(() => {

    secText.textContent='Seo-Expert'
    
}, 6000);

setTimeout(() => {

    secText.textContent='Content Writer'
    
}, 8000);



