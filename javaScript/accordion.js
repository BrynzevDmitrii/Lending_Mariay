function accardion(){
    const accordionItem = document.querySelectorAll('.accordion__item');
    accordionItem.forEach((item)=>item.addEventListener('click', ()=>{
       item.classList.toggle("active_accordion");
       let panel = item.nextElementSibling;
       if(panel.style.display === "block"){
        // panel.style.display = "none";
        return;
       }else{
        panel.style.display = "block";
       }
    }))


}
accardion();