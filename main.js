/* camelCase */

function changeImg(color) {
    let image = document.getElementById('myImg');
    
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
    if (color == 'pearl') {
        image.src = "/images/night-pearl.jpg";
    } 

}