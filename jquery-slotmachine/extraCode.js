
// currently randomizes palette - eventually will hook this up to artistList so it is not randomized
// and instead pulls a palette that best matches that artist
// will be used to color the palette blocks above the slots
// function palettes()
// {
//     // const artistPalette = 
//     const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
//     let i;
//     for (i = 0; i < randomPalette.length; i++)
//         {
//             colors[i].style.backgroundColor = randomPalette.slice(i , i + 1)
//         }

// }

// this prints the artists names out and will highlight the randomized one
function printNames()
{
    for (var i = 0; i < artists.length; i++)
    {
        if (artists[i] === randomArtist)
        {
            artistText.innerHTML.style = "font-weight: bold";
            highlightedArtist.innerText += (" " + artists[i].replace(/([A-Z])/g, ' $1').trim());
        }
        else
        {
            artistText.innerText += (" " + artists[i].replace(/([A-Z])/g, ' $1').trim());
        }

        if (i < artists.length - 1)
        {
            artistText.innerText += " • "
        }
    
    } 

}



//  //   slots[i].innerHTML = ("<img src=\"artists\\" + randomArtist + "\\" + i + ".jpg\">");