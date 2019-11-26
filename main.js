/* camelCase */

const buttons = document.querySelectorAll('.button-choose-color'); 

buttons.forEach(button => {
    button.addEventListener('click', e =>{
        let image = document.getElementById('myImg');
        let color = e.currentTarget.dataset.color;

        if (color == 'black')
        {
            image.src = "images/oldsmobile-black.jpg";
        } 
        if (color == 'unicorn')
        {
            image.src = "images/electric-unicorn.jpg";
        }
        if (color == 'white')
        {
            image.src = "/images/neon-white.jpg";
        }
        if (color == 'pearl')
        {
            image.src = "/images/night-pearl.jpg";
        }

    })
    
});

buttons.forEach(button => {
    button.addEventListener('click', e =>{
        const colors = document.querySelectorAll('.choose-color');

        colors.forEach((color) => {
            color.classList.remove('test_skill');
            
        })
        
        e.currentTarget.classList.add("test_skill"); 

    })
});

