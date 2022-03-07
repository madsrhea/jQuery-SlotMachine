// the 9 squares on the page to be randomized
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
,   jonathanTannerThomas: 4
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

// testing purposes - default images for the page
const defaultImg =  [ 'images/testTile1.png' , 'images/testTile2.png' , 'images/testTile3.png' , 'images/testTile4.png', 'images/testTile5.png', 'images/testTile6.png', 'images/testTile7.png', 'images/testTile8.png', 'images/testTile9.png' ];

// this is where the artist names will be printed to
const artistText = document.getElementById("artist-names")

// these two lines take the object and convert it into numbers like an array
// then pick one out randomly
const artists = Object.keys(artistList);
const randomArtist = artists[Math.floor(Math.random() * artists.length)]

// this formats the randomArtists name - for testing
const artistName = randomArtist.replace(/([A-Z])/g, ' $1').trim();
console.log(artistName);

// this is where the randomly chosen artists name will be placed (a span inside the 'artist-names' element)
const highlightedArtist = document.getElementById("random-artist");


// this is what will set the default images and then grab a new set of images from the artists name drawn
function slotImages()
{   
    for(var i = 0; i < slots.length; i++)
    {
        slots[i].innerHTML = ("<img src=\"" + defaultImg.slice(i, i + 1) + "\">");
        console.log(i);
    }
}

// calling the functions
slotImages();
// add timer