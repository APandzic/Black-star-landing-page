/* camelCase */

const buttons = document.querySelectorAll('.button-choose-color'); 

buttons.forEach(button => {
    button.addEventListener('click', e =>{
        let imageMobile = document.getElementById('my-img-mobile');
        let imageDesktop = document.getElementById('my-img-desktop');
        let color = e.currentTarget.dataset.color;

        if (color == 'black')
        {
            if(window.innerWidth < 992){
                imageMobile.src = "images/imgOnBikesDiffrentColor/oldsmobile-black.jpg";
            } else{
                imageDesktop.src = "images/imgOnBikesDiffrentColor/oldsmobile-black-desktop.jpg";
            }
        } 
        if (color == 'unicorn')
        {
            if(window.innerWidth < 992){
                imageMobile.src = "images/imgOnBikesDiffrentColor/electric-unicorn.jpg";
            } else{
                imageDesktop.src = "images/imgOnBikesDiffrentColor/electric-unicorn-desktop.jpg";
            }
           
        }
        if (color == 'white')
        {
            if(window.innerWidth < 992){
                imageMobile.src = "/images/imgOnBikesDiffrentColor/neon-white.jpg";
            } else{
                imageDesktop.src = "/images/imgOnBikesDiffrentColor/neon-white-desktop.jpg";
            }
        }
        if (color == 'pearl')
        {
            if(window.innerWidth < 992){
                imageMobile.src = "/images/imgOnBikesDiffrentColor/night-pearl.jpg";
            } else{
                imageDesktop.src = "/images/imgOnBikesDiffrentColor/night-pearl-desktop.jpg";
            }
            
        }

    })
    
});

buttons.forEach(button => {
    button.addEventListener('click', e =>{
        const colors = document.querySelectorAll('.choose-color');

        colors.forEach((color) => {
            color.classList.remove('add-border');
            
        })
        
        e.currentTarget.classList.add("add-border"); 

    })
});

const navigationLinks = document.querySelectorAll(".press-link");
let checkbox = document.getElementById("overlay-input");

navigationLinks.forEach(item => {
    item.addEventListener('click', () =>{
        console.log(item);
        checkbox.checked = false;
    })
}); 

/* 
const julie = document.getElementById('julie');
// julie.scrollIntoView(true);
julie.scrollIntoView({
    block: 'center',
  });

 */