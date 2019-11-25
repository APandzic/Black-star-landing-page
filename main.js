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
        let black = document.getElementById("black");
        let unicorn = document.getElementById("unicorn");
        let white = document.getElementById("white");
        let pearl = document.getElementById("pearl");
        let color = e.currentTarget.dataset.color;

        if (color == 'black')
        {
            black.classList.add("test_skill");
            unicorn.classList.remove("test_skill");
            white.classList.remove("test_skill");
            pearl.classList.remove("test_skill");
        } 
        if (color == 'unicorn')
        {
            unicorn.classList.add("test_skill");
            black.classList.remove("test_skill");
            white.classList.remove("test_skill");
            pearl.classList.remove("test_skill");
        }
        if (color == 'white')
        {
            white.classList.add("test_skill");
            black.classList.remove("test_skill");
            unicorn.classList.remove("test_skill");
            pearl.classList.remove("test_skill");
        }
        if (color == 'pearl')
        {
            pearl.classList.add("test_skill");
            black.classList.remove("test_skill");
            unicorn.classList.remove("test_skill");
            white.classList.remove("test_skill");
        }

        
    })
});

