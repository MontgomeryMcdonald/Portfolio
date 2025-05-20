$(document).ready(function(){
    let mobile_images = ["./images/Bobsbricks-Mobile.png", "./images/DarylsDucks-Mobile.png", "./images/pokeAPI-Mobile.png"]
    let desktop_images = ["./images/Bobsbricks.png", "./images/DarylsDucks.png", "./images/PokeAPI.png"]
    let images_used = mobile_images
    let currentimg = 0
    // switches to the desktop version of the images for consistency. improves mobile responsiveness.
    if($(document).width() >= 640){
            images_used = desktop_images
        }
    $(".carousel").attr("src", images_used[currentimg])
    // moves the carousel one image to the right
    function move_right(){
        if(currentimg + 1 < images_used.length){
            currentimg++
            $(".carousel").attr("src", images_used[currentimg])
        }
    }
    // moves the carousel one image to the left
    function move_left(){
        if(currentimg - 1 < images_used.length){
            currentimg--
            $(".carousel").attr("src", images_used[currentimg])
        }
    }
    $("#move_left").on("click", move_left)
    $("#move_right").on("click", move_right)
    })