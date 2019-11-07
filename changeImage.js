function changeImage() {
    let image = document.getElementById('myImage');
        if (image.src.match("/images/red-car.jpg")) {
            image.src = "/images/another-car.jpg";
        }
        else{
            image.src = "/images/motorcycle.jpg";
        }
}