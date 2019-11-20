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

function changeImg(color) {
    let image = document.getElementById('myImg');
    
    if (color == 'red')
    {
        image.src = "/images/first-page-img.JPG";
    } 
    if (color == 'blue') 
    {
        image.src = "/images/watch.jpg";
    } 
    if (color == 'green')
    {
        image.src = "/images/first-page-img.JPG";
    }
    if (color == 'yellow') {
        image.src = "/images/watch.jpg";
    } 

}

