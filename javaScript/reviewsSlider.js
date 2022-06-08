function reviews (){
 let ofset = 0;
 const leftarrow = document.querySelector(".reviews__leftarrow");
 const rightarrow = document.querySelector(".reviews__rightarrow");
 const slideList = document.querySelector(".reviews__slider-list");
 let lengsSlider = document.querySelectorAll('.reviews__slider-item');
 let endArrow = (lengsSlider.length-2)*660;
 let btnMore = document.querySelectorAll(".slider__button-more")
 for(i = 0;i < btnMore.length;i++ ){
    btnMore[i].addEventListener('click', (e)=>{
        
            if(e.target.className ==='slider__button-more activeder'){
               return;
            }else{
                for(b = 0; b< btnMore.length; b++){
                    btnMore[b].classList.remove('activeder')
                }
                if(e.target.className ==='button-more-href'){
                    return;
                }
                e.target.classList.add('activeder')
            }
        
           
        })
 }

         
     

 
 leftarrow.addEventListener('click', ()=>{
     leftarrow.classList.add('arrow-active');
     rightarrow.classList.remove('arrow-active')
    ofset += 660; 
    if(ofset > endArrow){
        ofset = 0;
    }
    slideList.style.left = -ofset + 'px';
    
 });

 rightarrow.addEventListener('click', ()=>{
    leftarrow.classList.remove('arrow-active');
    rightarrow.classList.add('arrow-active');
    ofset -= 660;
    if( ofset <= 0){
        ofset = 0;
    }
    slideList.style.left = -ofset + 'px';
    
    
 });
 rightarrow.addEventListener('click' ,()=>{
    
    console.log(slideList.className)
 })
 

}
reviews();