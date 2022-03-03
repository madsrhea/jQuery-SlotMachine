// header images
const header = [ document.getElementById("name")
               , document.getElementById("event")
               , document.getElementById("date") ]
               
// button that starts the randomizer
const button = document.getElementById("randomizer");

// here are the color palettes that'll be used on the site
const colorPalettes = [ ['#aeefb3', '#f19b03', '#b08004', '#e31a76', '#9c4881', '#01586b', '#5e331b', '#3f3b30', '#02294f']
                    ,   ['#003135', '#073640', '#12505f', '#1b726c', '#4e90a0', '#76ced8', '#ffe425', '#ecae3f', '#b41e2a']
                    ,   ['#484a5c', '#5a5065', '#785e73', '#877a98', '#a98dad', '#e8caff', '#00ffff', '#00fd8f', '#387c33']
                    ,   ['#9c0096', '#ac1c00', '#b86306', '#877b54', '#c44b13', '#db6126', '#001df4', '#0594ff', '#00ccc8']
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

const slots = [   document.getElementById("sq0")
                , document.getElementById("sq1") 
                , document.getElementById("sq2")
                , document.getElementById("sq3")
                , document.getElementById("sq4")
                , document.getElementById("sq5")
                , document.getElementById("sq6")
                , document.getElementById("sq7")
                , document.getElementById("sq8") ];

// set the artist name to the palette you want their page to be
const artistList = {
    aaronMoseley: 0
,   amberMorris: 1 
,   antoineWilliams: 0
,   arianeParkesPerret: 1
,   aunnaEscobedo: 3
,   benitoZamora: 2
,   brookeDearbornHuston: 1
,   caitlinWilson: 3
,   catherineReinhart: 0
,   claireWhitehurst: 2
,   coryChristiansen: 3
,   danaPotter: 1
,   danaTelsrow: 1
,   daniSigler: 1
,   danielSmith: 1
,   daveDugan: 1
,   davidDunlap: 1
,   desireeDahl: 1
,   devlinCaldwell: 1
,   donteKHayes: 1
,   dorianDean: 2
,   douglasDegges: 2
,   drewCameron: 2
,   elizabethMunger: 2
,   emilyMagnuson: 2
,   goodEveningGumm: 2
,   gyanShrosbree:2
,   hannahGivler: 2
,   heatherParrish: 2
,   hopeSpragg: 2
,   ianHuebert: 3
,   indiaJohnson: 3
,   jaminShepherd: 3
,   janDuschen: 3
,   janeGilmor: 3
,   janieceMaddox: 3
,   jaySchleidt: 3
,   jennaBonistalli: 3
,   jennyGringer: 3
,   jeremyChen: 3
,   jeyFoxHouston: 0
,   jimShrosbree: 1
,   johnThomasRichard: 2
,   johnnyBrian: 3
,   joseClemente: 0
,   juliaJWolfe: 0
,   julieLeonard: 0
,   kalmiaStrong: 2
,   kaseyBullerman: 1
,   kellyClare: 3
,   kellyMoore: 0
,   kenDubin: 1
,   lachlanHinwood: 2
,   lauraNapier: 3
,   laurieZaiger: 2
,   lilahShepherd: 0
,   mackieGarrett: 0
,   margaretYapp: 2
,   mariaRenna: 1
,   marianaRodriguezDalPra: 3
,   mustardInLaw: 0
,   nancyFootner: 1
,   nicholasCladis: 2
,   rCTibbott: 3
,   rachelCox: 0
,   ralucaIancu: 1
,   raminRoshandel: 2
,   richDana: 3
,   ryanBentzinger: 2
,   sallyChai: 1
,   sammi: 0
,   sayuriSasakiHemann: 1
,   seanTyler: 2
,   starfangledPress: 3
,   sueHettmansperger: 0
,   susanCWhite: 1
,   taylorYocom: 3
,   terryConrad: 1
,   thomasAgran: 2
,   tibiChelcea: 0
,   trevonJakaarColeman: 0
,   tylerLuetkehans: 1
,   vikasGarg: 2
}

const defaultImg =  [ 'images/testTile1.png' , 'images/testTile2.png' , 'images/testTile3.png' , 'images/testTile4.png', 'images/testTile5.png', 'images/testTile6.png', 'images/testTile7.png', 'images/testTile8.png', 'images/testTile9.png' ];

const artistText = document.getElementById("artist-names")

const artists = Object.keys(artistList);
const randomArtist = artists[Math.floor(Math.random() * artists.length)]
console.log(randomArtist);
const artistName = randomArtist.replace(/([A-Z])/g, ' $1').trim();

function palettes()
{
    // const artistPalette = 
    const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    let i;
    for (i = 0; i < randomPalette.length; i++)
        {
            colors[i].style.backgroundColor = randomPalette.slice(i , i + 1)
        }

}

function slotImages()
{   
    for(var i = 0; i < slots.length; i++)
    {
        console.log(i);
        slots[i].innerHTML = ("<img src=\"" + defaultImg.slice(i, i + 1) + "\">");
    }
}

function printNames()
{
    for (var i = 0; i < artists.length; i++)
    {
        artistText.innerHTML += artists[i].replace(/([A-Z])/g, ' $1').trim();

        if (i < artists.length - 1)
        {
            artistText.innerHTML += " • "
        }
        if (artists[i] === randomArtist)
        {
            artistText.style.color = "white";
            artistText.style.fontStyle = "bold";
        }

    
    } 

}


slotImages();
button.onclick = function(){
    palettes();
    }
printNames();