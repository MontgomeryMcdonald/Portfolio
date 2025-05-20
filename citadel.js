$(document).ready(function(){
    let desktop_images = ["./images/Gaia-Citadel/Fight.png", "./images/Gaia-Citadel/Town.png"]
    let images_used = desktop_images
    let currentimg = 0
    // switches to the desktop version of the images for consistency. improves mobile responsiveness.
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