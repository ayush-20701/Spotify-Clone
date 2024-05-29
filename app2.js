const playingSvg = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>`
const pausedSvg = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>`
const muteSvg = `<svg data-encore-id="icon" role="presentation" aria-label="Volume off" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kcUFwU"><path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path><path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>`
const unmuteSvg = `<svg data-encore-id="icon" role="presentation" aria-label="Volume high" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kcUFwU"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg>`
let currSong = new Audio()
let songsUrl = []
let songsNames = []
let currFolder
let currSubFolder
let folders = []
let subFolders = []
let songUl = document.querySelector("#songList").getElementsByTagName("ul")[0]
let currLi

async function getSongs(folder, subFolder, play) {
    currFolder = folder
    currSubFolder =subFolder
    let data = await fetch(`Songs/${folder}/${subFolder}/`)
    let response = await data.text()
    let div = document.createElement('div')
    div.innerHTML = response
    let as = div.getElementsByTagName('a')
    // console.log(as);
    songsNames = []
    songsUrl = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(as[index].href.endsWith(".mp3")) {
            // console.log(as[index].innerHTML);
            songsNames.push(as[index].innerHTML.split("- ")[1].split(".mp")[0])
            songsUrl.push(as[index].href)
        }
    }
    songUl.innerHTML = ""
    for(const song of songsNames) {
        // console.log(song);
        songUl.innerHTML = songUl.innerHTML + 
        `<li>
        <div id="songs" class="flex song">
        <div id="songTnail">
            <img src = "Resources/svg/music.svg" class = "albumArt">
            <img src = "Resources/equaliser-animated-green.f5eb96f2.gif" class = "playingGif">
        </div>
        <div id="songInfo" class="flex">
        <div id="songName" class="info flex">${song}</div>
        <div id="songArtist" class="info flex">Artist Name</div>
        </div> 
        </div>
        </li>` 
    }
    if(play == 'yes') {  //play first song of the album automatically
        playMusic(songsUrl[0], songsNames[0])
    }
    //Add event listener to each songs
    Array.from(songUl.getElementsByTagName("li")).forEach((li, index) => {
        // console.log(e);
        li.addEventListener('click', ()=> {
            playMusic(songsUrl[index], songsNames[index])
        })
    })
}
async function main() {

    let mainData = await fetch('Songs/')
    let response = await mainData.text()
    // console.log(response);
    let div = document.createElement('div')
    div.innerHTML = response
    let folderAs = div.getElementsByTagName('a');
    folders = Array.from(folderAs) //convert as to an array and copy to 'folders'
    folders.shift() //Remove first element from the array
    // console.log(folders);
    //Populating the songCards div with rows
    let songCards = document.querySelector('#songCards')
    Array.from(folders).forEach(async f => {  //for each folder (row groups)
        // console.log(f.href.split('Songs')[1]);
        let heading = (f.innerText.split('/')[0]);
        // console.log(f.innerText.replaceAll(" ", "%20"));
        let fData = await fetch(`Songs${f.href.split('Songs')[1]}`)
        let fContent = await fData.text()
        let rows = document.createElement('div')
        rows.innerHTML = fContent
        let subFolderAs = rows.getElementsByTagName('a')
        subFolders = Array.from(subFolderAs)
        subFolders.shift()
        // console.log(subFolders);

        if(heading != 'Default') {
            songCards.innerHTML = songCards.innerHTML + 
            `<div id ="rowGroup">
                <div id="heading" class="flex ">
                    <button id="albums"><p>${heading}</p></button>
                    <button id="showAll"><p>Show all</p></button>
                </div>  
                <div class="row flex"></div>
            </div>`

            let rowGroup = document.querySelectorAll('#songCards #rowGroup')
            let currentRowGroup = rowGroup[rowGroup.length - 1]
            let currentRow = currentRowGroup.querySelector('.row')
            // console.log(currentRow);
            let descArr = []
            //populating rows with cards
            Array.from(subFolders).forEach(async (sf, index) => { //for each sub-folder (cards)
                // console.log(sf);
                let cardName = sf.innerText.split('/')[0];
                let cardClass = sf.innerText.replaceAll(" ", "_")

                currentRow.innerHTML = currentRow.innerHTML + 
                `<div id="card" class="${cardClass} flex cards">
                <div id="cardImg">
                <img src="Resources/cardImages/${cardName}.jpeg" alt="">
                <button id="playAlbumBtn"><span><span><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg></span></span></button>
                </div>
                <p>${cardName}</p>
                <div id="desc" class="flex"></div>
                </div>`
                
                
                if(heading == 'Popular Artists') {
                    let image = currentRow.getElementsByTagName('img')
                    let currentImg = image[image.length - 1];
                    currentImg.classList.add('roundedImg')
                    let card = currentRow.querySelectorAll('.cards')
                    let currentCard = card[card.length - 1]
                    currentCard.classList.add('cardHeight')
                    // console.log(currentCard);
                    let desc = currentCard.querySelector('#desc')
                    desc.innerHTML = "Artist"
                    // console.log(desc);
                }
                else{
                    // console.log(sf.href.split('Songs')[1]);
                    let card = await fetch(`Songs${sf.href.split('Songs')[1]}`)
                    let cardData = await card.text()
                    // console.log(cardData);
                    let cardDiv = document.createElement('div')
                    cardDiv.innerHTML = cardData
                    // console.log(cardDiv);
                    let cardAs = cardDiv.getElementsByTagName('a')
                    // console.log(cardAs);
                    let cardAsArr = Array.from(cardAs)
                    cardAsArr.shift()
                    console.log(cardAsArr[0].href.split('Songs')[1]);
                    let data = await fetch(`Songs${cardAsArr[0].href.split('Songs')[1]}`)
                    let response = await data.text()
                    // console.log(response);
                    let currentCard = document.getElementsByClassName(`${cardClass}`)
                    let desc = currentCard[0].querySelector('#desc')
                    desc.innerHTML = response
                    // console.log(desc.innerHTML);
                }
            })
        }
    })

    await getSongs('Default', 'Default')
    // console.log(songsNames);
    
    //Event listener to load the songs of clicked cards in library
    Array.from(document.querySelectorAll('#card')).forEach(card => {
        card.addEventListener('click', async (e) => {
            let cardName = (e.currentTarget).getElementsByTagName('p')
            let subFolder = (cardName[0].innerText).replaceAll(" ", "%20")
            // console.log(subFolder);
            let rowGroup = (card.parentElement).parentElement
            let rowName = rowGroup.getElementsByTagName('p')
            let folder = (rowName[0].innerText).replaceAll(" ", "%20");
            // console.log(folder);

            if(e.target.innerHTML == '<path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>'){
                console.log("button clicked");
                await getSongs(folder, subFolder, 'yes')
            }
            else{
                console.log("Card clicked");
                await getSongs(folder, subFolder, 'no')
            }
        })
    })

    //Event listener to load default library
    document.querySelector('#libraryText').addEventListener('click',async () =>{
        if(currSubFolder != 'Default')
            await getSongs('Default', 'Default', 'no') 
    })


    //Add event listener to play button
    let playBtn = document.querySelector('#play button')
    playBtn.addEventListener('click', () => {
        if(currSong.paused && currSong.src) {
            currSong.play()
            playBtn.innerHTML = playingSvg
        }
        else if(currSong.paused && !currSong.src) {
            playMusic(songsUrl[0], songsNames[0])
        }
        else {
            currSong.pause()
            playBtn.innerHTML = pausedSvg 
        }
    })
    
    //function to update time and duration
    let currTime = document.querySelector("#elapsedTime")
    let totTime = document.querySelector("#totTime")
    currSong.addEventListener("timeupdate", ()=>{
        //Time info of current song
        currTime.innerText = formatTime(currSong.currentTime)
        totTime.innerText = formatTime(currSong.duration)
        document.querySelector("#activeBar").style.width = (currSong.currentTime/currSong.duration)*100 + "%"
        
        // Play next song if current song ends
        if(currSong.currentTime == currSong.duration && currSong.src != songsUrl[songsUrl.length - 1]) {
            playNextSong()
        }
        else {
            if(currSong.ended)
            playBtn.innerHTML = pausedSvg
        }
    })

    // Seekbar functionality
    const seekBar = document.querySelector("#seekBar") 
    seekBar.addEventListener("click", e => {
        if(currSong.src) {  //work only when a song is loaded in player
            let percent = (e.offsetX / seekBar.getBoundingClientRect().width) * 100
            document.querySelector("#activeBar").style.width = (percent) + "%" 
            currSong.currentTime = (currSong.duration * percent)/100
            console.log("Seekbar set to: ", currSong.currentTime, "Duration;: ", currSong.duration);
        }
    })
    
    //EVENT LISTENER FOR PREV BTN
    let prevBtn = document.querySelector('#prev button')
    //single click
    prevBtn.addEventListener("click", () => {
        currSong.currentTime = 0
        document.querySelector("#activeBar").style.width = 0 + "%" 
    })
    //double click
    prevBtn.addEventListener("dblclick", () => {
        // console.log("previous btn clicked");
        let index = songsUrl.indexOf(currSong.src)
        if(index > 0) {
            playMusic(songsUrl[index-1], songsNames[index-1])
        }
        else{
            console.log("first song!");
        }
    }) 
    
    //EVENT LISTENER FOR NEXT BTN
    let nextBtn = document.querySelector('#next button')
    nextBtn.addEventListener("click", () => {
        playNextSong()
    })
    function playNextSong() {
        let index = songsUrl.indexOf(currSong.src)
        if(index < songsUrl.length - 1) {
            // console.log("next song played");
            playMusic(songsUrl[index+1], songsNames[index+1])
        }
        else{
            console.log("Last song!");
        }
    }
    
    //Volume slider function
    let volRocker = document.querySelector('#volSlider').getElementsByTagName('input')[0]
    volRocker.addEventListener('input', (e)=> {
        // console.log(e.target.value);
        console.log("volume set to ", e.target.value);
        currSong.volume = parseInt(e.target.value)/100
        // console.log(currSong.volume);
        if(currSong.volume == 0) {
            muteBtn.innerHTML = muteSvg
        }
        else{
            muteBtn.innerHTML = unmuteSvg
        }
    })

    //Event listener for volume icon (mute)
    let prevVol = 1
    let muteBtn = document.querySelector('#mute button')
    muteBtn.addEventListener('click', ()=> {
        console.log("mute Btn clicked");
        if(muteBtn.classList.contains('muted')) {
            muteBtn.innerHTML = unmuteSvg
            currSong.volume = prevVol
            volRocker.value = prevVol*100
        }
        else {
            muteBtn.innerHTML = muteSvg
            prevVol = currSong.volume
            currSong.volume = 0
            volRocker.value = 0
        }
        muteBtn.classList.toggle('muted')
    })

    //Event listener for volRocker to display volume in real time
    currSong.volume = volRocker.value/100
    document.querySelector('#volSlider').addEventListener('mouseover', ()=> {
        if(currSong.volume != 0){
            muteBtn.innerHTML = `${Math.round(volRocker.value)}`
        } 
        volRocker.addEventListener('input', ()=> {
            if(volRocker.value != 0) {
                muteBtn.innerHTML = Math.round(volRocker.value)
            }
        })
    })
    document.querySelector('#volSlider').addEventListener('mouseout', ()=> {
        if(currSong.volume != 0) {
            muteBtn.innerHTML = unmuteSvg
        }
    })


    function formatTime(seconds) {
        // Calculate minutes and remaining seconds
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        
        // Pad the minutes and seconds with leading zeros if needed
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
        // Combine minutes and seconds with a colon
        return `${formattedMinutes}:${formattedSeconds}`;
    }
}
main()
const playMusic = (trackUrl, trackName) => {
    const playBtn = document.querySelector('#play button')
    currSong.src = trackUrl
    currSong.play()
    playBtn.innerHTML = playingSvg
    // console.log(trackName, trackUrl);
    let title = document.querySelector('#title')
    title.innerHTML = trackName
    Array.from(songUl.getElementsByTagName('li')).forEach(e => {
        // console.log(e.querySelector('#songName').innerText);
        if(e.querySelector('#songName').innerText == trackName) {
            e.querySelector('.albumArt').style.opacity = "0.05"
            e.querySelector('.playingGif').style.display = "block"
            currLi = e
        }
        else {
            e.querySelector('.albumArt').style.opacity = "1"
            e.querySelector('.playingGif').style.display = "none"
        }
    })
}
