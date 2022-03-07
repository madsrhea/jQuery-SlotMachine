// banner images
const banner = [ document.getElementById("name")
               , document.getElementById("event")
               , document.getElementById("date") ]

// here are the color palettes that'll be used on the site
const colorPalettes = [ ['#95f9b2', '#f19b03', '#b08004', '#e31a76', '#9c4881', '#01586b', '#5e331b', '#3f3b30', '#02294f'] // default
                    ,   ['#4a5f3b', '#818681', '#29292a', '#000000', '#be9650', '#84c695', '#57585e', '#c4c4b7', '#d9d8c8'] // aaron M
                    ,   ['#0f0f21', '#0c485a', '#6e7f81', '#e01d47', '#17153a', '#d3d2cd', '#221d33', '#333c55', '#d4c0a6'] // ariane P 
                ]

// calling all nine colors seperately - starting with 0 because code starts at 0 instead of 1
const colors = [  document.getElementById("color0")
                , document.getElementById("color1") 
                , document.getElementById("color2")
                , document.getElementById("color3")
                , document.getElementById("color4")
                , document.getElementById("color5")
                , document.getElementById("color6")
                , document.getElementById("color7")
                , document.getElementById("color8") ];

// currently randomizes palette - eventually will hook this up to artistList so it is not randomized
// and instead pulls a palette that best matches that artist
// will be used to color the palette blocks above the slots
function palettes()
{
    // const artistPalette = 
    const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    console.log(randomPalette);
    let i;
    for (i = 0; i < randomPalette.length; i++)
        {
            colors[i].style.backgroundColor = randomPalette.slice(i , i + 1)
        }
    if(colorPalettes[0] == randomPalette)
    {
        banner[0].style.filter = "invert(88%) sepia(8%) saturate(1347%) hue-rotate(71deg) brightness(104%) contrast(87%)";
        banner[1].style.filter = "invert(71%) sepia(54%) saturate(4681%) hue-rotate(7deg) brightness(103%) contrast(98%)";
        banner[2].style.filter = "invert(40%) sepia(17%) saturate(1595%) hue-rotate(270deg) brightness(92%) contrast(98%)";

    }

    if(colorPalettes[1] == randomPalette)
    {   banner[0].style.filter = "invert(62%) sepia(50%) saturate(409%) hue-rotate(360deg) brightness(89%) contrast(91%)";
        banner[1].style.filter = "invert(82%) sepia(12%) saturate(983%) hue-rotate(83deg) brightness(89%) contrast(83%)";
        banner[2].style.filter = "invert(98%) sepia(8%) saturate(386%) hue-rotate(349deg) brightness(88%) contrast(91%)";
    }

    if(colorPalettes[2] == randomPalette)
    {
        banner[0].style.filter = fdsaf ;
        banner[1].style.filter = fdsafds;
        banner[2].style.filter =  fdsafd;
    }

}

palettes();