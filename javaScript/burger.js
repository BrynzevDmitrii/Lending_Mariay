function burgerMenu() {
    const buttonBurger = document.querySelector(".header___navbar-burger");
    const burgerMenu = document.querySelector(".header___navbar-burger-container");
    const closed = document.querySelector(".header___navbar-close");
    let btnMore = document.querySelectorAll(".header__titleInfo-more");
    const recoln = document.querySelectorAll(".reconl");
    for(i = 0;i < btnMore.length;i++ ){
    btnMore[i].addEventListener('click', (e)=>{
            if(e.target.className ==='header__titleInfo-more active'){
                return;
            }else{
                for(b = 0; b< btnMore.length; b++){
                    btnMore[b].classList.remove('active')
                }
                if(e.target.className ==="reconl"){
                    return;
                }
            e.target.classList.add('active');
            
        }
            
        })
}

    buttonBurger.addEventListener('click', () => {
        burgerMenu.style.display = "flex";
    });

    closed.addEventListener('click', () => {
        burgerMenu.style.display = "none";
    });

};
burgerMenu();