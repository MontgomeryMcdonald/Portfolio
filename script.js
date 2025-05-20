const y_size = 20
const x_size = 20
let currentMaze = 0
let mazes = [

[ "###########",
    "#....S#.#.#",
    "#.#####.#.#",
    "#.....#...#",
    "#####.#.#.#",
    "#.......#.#",
    "#.###.###.#",
    "#.#.#...#.#",
    "#.#.###.#.#",
    "#...#...#E#",
    "###########",],
    [
    "###########",
    "#S#...#...#",
    "#.#.#.###.#",
    "#...#.....#",
    "#.###.#.#.#",
    "#.#...#.#.#",
    "###.#######",
    "#.........#",
    "###.###.###",
    "#...#....E#",
    "###########",],
    [
    "###########",
    "#S#.......#",
    "#.###.#####",
    "#.....#.#.#",
    "#.#.###.#.#",
    "#.#.....#.#",
    "###.#####.#",
    "#.........#",
    "#.#.###.###",
    "#.#...#..E#",
    "###########"
    ],
    [
        
        "...........",
        "...........",
        "..#.....#..",
        "..#.....#..",
        "...........",
        "...........",
        "..#.....#..",
        "...#####...",
        "...........",
        "...........",
        "...........",
    ]
    ]
// let maze = []



// for(floor of strmaze){
//     maze.push(Array.from(floor))
// }
// console.log(strmaze)


$(document).ready(function(){
    // these four functions move the player 
    function move_right(){
        let xy = $(".player").prop("id")
        xy = xy.split("-")
        if(parseInt(xy[0]) < x_size && $(`#${parseInt(xy[0])+1}-${parseInt(xy[1])}`).hasClass("floor")){
            $(".player").toggleClass("player")
            $(`#${parseInt(xy[0])+1}-${parseInt(xy[1])}`).toggleClass("player")
        }
        if($(".player").hasClass("inconspicious")){
            window.location.href="secret.html"
        }
        if($(".player").hasClass("goal")){
            generate_map(mazes[currentMaze])
            currentMaze++
        }
        
    }
    function move_left(){
        let xy = $(".player").prop("id")
        xy = xy.split("-")
        if(parseInt(xy[0]) > 0 && $(`#${parseInt(xy[0])-1}-${parseInt(xy[1])}`).hasClass("floor")){
            $(".player").toggleClass("player")
            $(`#${parseInt(xy[0])-1}-${parseInt(xy[1])}`).toggleClass("player")
        }
        if($(".player").hasClass("inconspicious")){
            window.location.href="secret.html"
        }
        if($(".player").hasClass("goal")){
            generate_map(mazes[currentMaze])
            currentMaze++
        }
        
    }
    
    function move_up(){
        let xy = $(".player").prop("id")
        xy = xy.split("-")
        if(parseInt(xy[1]) > 0 && $(`#${parseInt(xy[0])}-${parseInt(xy[1])-1}`).hasClass("floor")){
            $(".player").toggleClass("player")
            $(`#${parseInt(xy[0])}-${parseInt(xy[1])-1}`).toggleClass("player")
        }
        if($(".player").hasClass("inconspicious")){
            window.location.href="secret.html"
        }
        if($(".player").hasClass("goal")){
            generate_map(mazes[currentMaze])
            currentMaze++
        }
        
    }
    
    function move_down(){
        let xy = $(".player").prop("id")
        xy = xy.split("-")
        if(parseInt(xy[1]) < y_size && $(`#${parseInt(xy[0])}-${parseInt(xy[1])+1}`).hasClass("floor")){
            $(".player").toggleClass("player")
            $(`#${parseInt(xy[0])}-${parseInt(xy[1])+1}`).toggleClass("player")
        }
        if($(".player").hasClass("inconspicious")){
            window.location.href="secret.html"
        }
        if($(".player").hasClass("goal")){
            generate_map(mazes[currentMaze])
            currentMaze++
        }
        
    }

    // generates the maze. takes in a 2d array and makes it into a table. 
    function generate_map(map){
        $("#screen").empty()

        for(y in map){
            $("#screen").append(`<tr id="row-${y}"> </tr>`)
            for(x in map[y]){
                if(map[y][x] == "."){
                    $(`#row-${y}`).append(`<td class="pixel floor" id="${x}-${y}"> </td>`)
                }
                else if(map[y][x] == "E"){
                    $(`#row-${y}`).append(`<td class="pixel floor goal" id="${x}-${y}"> </td>`)
                }
                else if(map[y][x] == "S"){
                    $(`#row-${y}`).append(`<td class="pixel floor player" id="${x}-${y}"> </td>`)
                }
                else{
                    $(`#row-${y}`).append(`<td class="pixel wall" id="${x}-${y}"> </td>`)
                }
            }
        }
    }
    generate_map(mazes[currentMaze])
    currentMaze++
    $("#3-7").toggleClass("inconspicious")

// makes the starting location for the player 

    $("#move_up").on("click", move_up)
    $("#move_left").on("click", move_left)
    $("#move_right").on("click", move_right)
    $("#move_down").on("click", move_down)

    // adds movement to the on-screen buttons for mobile devices.


    // calls movement when WASD keys are pressed.
    $(document).on("keydown", function(event){
        //Normal movement
        switch(event.which) {
            case 65: //A key
                move_left()
                break;
            case 87: //W key
                move_up()
                break;
            case 68: //D key
                move_right()
                break;
            case 83: //S key
                move_down()
                break;
        }
        })
})