function btnAct(){
    const sliderworkProfway = document.querySelectorAll('.sliderwork__profway-button-more');
        const cls = 'sliderwork__profway-button-more active';
        const act = 'active';      

    function isActive(arr,clases, activeClass){
    for(i = 0;i < arr.length;i++ ){
        arr[i].addEventListener('click', (e)=>{
            
                if(e.target.className === clases){
                    return;
                }else{
                    for(b = 0; b< arr.length; b++){
                        arr[b].classList.remove(activeClass)
                    }
                    if(e.target.localName ==="a"){
                        return;
                    }
                    e.target.classList.add(activeClass);
                }
            })
        }
        
}
isActive(sliderworkProfway, cls, act);


const videoBtn = document.querySelectorAll('.video__button-more');
const clsBtn = 'video__button-more active';
const actBtn=  'active';

isActive(videoBtn, clsBtn, actBtn);

const courseBtn = document.querySelectorAll('.course__button');
const clsCorsBtn = 'course__button active';
const actCorsBtn = 'active';

isActive(courseBtn, clsCorsBtn, actCorsBtn);



}


btnAct();