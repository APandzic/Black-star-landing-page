// function changeImage() {
//     let image = document.getElementById('myImage');
//         if (image.src.match("/images/red-car.jpg")) {
//             image.src = "/images/another-car.jpg";
//         }
//         else{
//             image.src = "/images/motorcycle.jpg";
//         }
// }

// let imageTracker = "r";
// function changeImg() {
//     let image = document.getElementById('myImg');
//     if (imageTracker == "r"){
//         image.src = "/images/another-car.jpg";
//         imageTracker = "a";
//     }else {
//         image.src = "/images/red-car.jpg";
//         imageTracker = "r";
//     }
// }

// function changeImg(color) {
//     let image = document.getElementById('myImg');
    
//     if (color == 'red')
//     {
//         image.src = "/images/first-page-img.JPG";
//     } 
//     if (color == 'blue') 
//     {
//         image.src = "/images/watch.jpg";
//     } 
//     if (color == 'green')
//     {
//         image.src = "/images/first-page-img.JPG";
//     }
//     if (color == 'yellow') {
//         image.src = "/images/watch.jpg";
//     } 

// }


const buttons = document.querySelectorAll('.button-choose-color'); 

buttons.forEach(button => {
    button.addEventListener('click', e =>{
        let image = document.getElementById('myImg');
        let color = e.currentTarget.dataset.color;

        if (color == 'red')
        {
            image.src = "/images/cap.jpg";
        } 
        if (color == 'blue')
        {
            image.src = "/images/cans.jpg";
        }
        if (color == 'green')
        {
            image.src = "/images/night-pearl.jpg";
        }
        if (color == 'yellow')
        {
            image.src = "/images/neon-white.jpg";
        }

    })
    
});


