function sliderVector (){
let ofset = 0;
 const leftarrow = document.querySelector(".leftarrow");
 const rightarrow = document.querySelector(".rightarrow");
 const slideList = document.querySelector(".sliderwork__list");
 leftarrow.addEventListener('click', ()=>{
     leftarrow.classList.add('arrow-active');
     rightarrow.classList.remove('arrow-active')
    ofset += 430; 
    if(ofset > 2580){
        ofset = 0;
    }
    slideList.style.left = -ofset + 'px';
    
 });

 rightarrow.addEventListener('click', ()=>{
    
    ofset -= 430;
    if(ofset < 0 && ofset!== 430){
        ofset = 2580;
        
    }else{
        
        slideList.style.left = -ofset + 'px';
    }
    
    
    
 });
 rightarrow.addEventListener('click' ,()=>{
    leftarrow.classList.remove('arrow-active');
    rightarrow.classList.add('arrow-active');
    console.log(slideList.className)
 })
 

}


sliderVector();