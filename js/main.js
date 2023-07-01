let actualSong=null
let actualMood=null

//Capturar elementos del DOM
const submit=document.getElementById("select")
const songs=document.getElementById("songs")
const audio=document.getElementById("audio")
const cover=document.getElementById("cover")
const title=document.getElementById("title")
const play=document.getElementById("play")
const prev=document.getElementById("prev")
const next=document.getElementById("next")
const progress=document.getElementById("progress")
const progressContainer=document.getElementById("progress-container")
const body=document.getElementById("body")
const moodTitle=document.getElementById("actual-mood")
//escuchar clicks en submit
submit.addEventListener("click",()=>{
    actualizarMood()
})

//escuchar botones
play.addEventListener("click",()=>{
    if (audio.paused){
        playSong()
    }else{
        pauseSong()
    }
})

audio.addEventListener("timeupdate",updateProgress)

progressContainer.addEventListener("click", setProgress)
//mood actual
function actualizarMood(){
    if (actualMood !== null){
        const songs=document.getElementById("songs")
        while(songs.firstChild){
            songs.removeChild(songs.lastChild)
        }
    }
    const mood=document.getElementById("change-mood").value
    if (actualMood!==mood){
        audio.pause()
        cover.src=""
        restartProgress()
    }
    actualMood=mood
    console.log(actualMood)
    loadSongs(actualMood)
}

//cargar canciones
function loadSongs (moodType){
    if (moodType==="chill"){
        const chill = [
            {
                title: "Cat's Cradle",
                file: "chill1.mp3",
                cover: "chill1.jpg"
            },
            {
                title: "Crescent Moon",
                file: "chill2.mp3",
                cover: "chill2.jpg"
        
            },
            {
                title: "Downtown Glow",
                file: "chill3.mp3",
                cover: "chill3.jpg"
            },
            {
                title: "Midnight Stroll",
                file: "chill4.mp3",
                cover: "chill4.jpg"
        
            },
            {
                title: "Silent Wood",
                file: "chill5.mp3",
                cover: "chill5.jpg"
            },
        ]

        moodTitle.textContent="Chill"
        body.removeAttribute("class")
        body.classList.add("chill")

        chill.forEach((song, index) => {
        const li=document.createElement("li")
        li.id="lista"
        const link=document.createElement("a")
        link.textContent=song.title
        link.href="#"
        link.addEventListener("click",()=>{
                loadSong(chill,index)
                play.classList.remove("fa-play")
                play.classList.add("fa-pause")
                prev.addEventListener("click",()=>{
                    if (index===0){
                        index=2
                    }else{
                        index=index-1
                    }
                    loadSong(chill,index)})
                next.addEventListener("click",()=>{
                    if (index===2){
                        index=0
                    }else{
                        index=index+1
                    }loadSong(chill,index)
                })
                audio.addEventListener("ended",()=>{
                    if (index===2){
                        index=0
                    }else{
                        index=index+1
                    }loadSong(chill,index)
                })  
         })

        li.appendChild(link)
        songs.appendChild(li)})
            
        
    }
    if (moodType==="sad"){
        const sad= [
            {
                title: "Goodbye Moon",
                file: "sad1.mp3",
                cover: "sad1.jpg"
            },
            {
                title: "Permafrost",
                file: "sad2.mp3",
                cover: "sad2.jpg"
        
            },
            {
                title: "Heartbreaking",
                file: "sad3.mp3",
                cover: "sad3.jpg"
            },
            {
                title: "Missing You",
                file: "sad4.mp3",
                cover: "sad4.jpg"
        
            },
            {
                title: "After The Rain",
                file: "sad5.mp3",
                cover: "sad5.jpg"
            },
        ]

        moodTitle.textContent="Sad"
        body.removeAttribute("class")
        body.classList.add("sad")

        sad.forEach((song, index) => {
            const li=document.createElement("li")
            const link=document.createElement("a")
            link.textContent=song.title
            link.href="#"
            link.addEventListener("click",()=>{
                loadSong(sad,index)
                play.classList.remove("fa-play")
                play.classList.add("fa-pause")
                prev.addEventListener("click",()=>{
                    if (index===0){
                        index=2
                    }else{
                        index=index-1
                    }
                    loadSong(sad,index)})
                next.addEventListener("click",()=>{
                    if (index===2){
                        index=0
                    }else{
                        index=index+1
                    }loadSong(sad,index)
                })
                audio.addEventListener("ended",()=>{
                    if (index===2){
                        index=0
                    }else{
                        index=index+1
                    }loadSong(sad,index)
                })
            })
            li.appendChild(link)
            songs.appendChild(li)})
            prev.addEventListener("click",()=>{
                index=index-1
                loadSong(sad,index)})    
    }
    if (moodType==="happy"){
        const happy = [
            {
                title: "Fell Good",
                file: "happy1.mp3",
                cover: "happy1.jpg"
            },
            {
                title: "Island",
                file: "happy2.mp3",
                cover: "happy2.jpg"
        
            },
            {
                title: "Carefree",
                file: "happy3.mp3",
                cover: "happy3.jpg"
            },
            {
                title: "Bliss",
                file: "happy4.mp3",
                cover: "happy4.jpg"
        
            },
            {
                title: "Tropical Soul",
                file: "happy5.mp3",
                cover: "happy5.jpg"
            },
        ]

        moodTitle.textContent="Happy"
        body.removeAttribute("class")
        body.classList.add("happy")

        happy.forEach((song, index) => {
        const li=document.createElement("li")
        li.id="lista"
        const link=document.createElement("a")
        link.textContent=song.title
        link.href="#"
        link.addEventListener("click",()=>{
                loadSong(happy,index)
                play.classList.remove("fa-play")
                play.classList.add("fa-pause")
                prev.addEventListener("click",()=>{
                    if (index===0){
                        index=2
                    }else{
                        index=index-1
                    }
                    loadSong(happy,index)})
                next.addEventListener("click",()=>{
                    if (index===2){
                        index=0
                    }else{
                        index=index+1
                    }loadSong(happy,index)
                })
                audio.addEventListener("ended",()=>{
                    if (index===2){
                        index=0
                    }else{
                        index=index+1
                    }loadSong(happy,index)
                })  
         })

        li.appendChild(link)
        songs.appendChild(li)})
    }

    if (moodType==="romantic"){
        const romantic = [
            {
                title: "Moon Dock",
                file: "romantic1.mp3",
                cover: "romantic1.jpg"
            },
            {
                title: "Starry Sky",
                file: "romantic2.mp3",
                cover: "romantic2.jpg"
        
            },
            {
                title: "Equinox",
                file: "romantic3.mp3",
                cover: "romantic3.jpg"
            },
            {
                title: "Moon Waltz",
                file: "romantic4.mp3",
                cover: "romantic4.jpg"
        
            },
            {
                title: "Purple Dream",
                file: "romantic5.mp3",
                cover: "romantic5.jpg"
            },
            
        ]

        moodTitle.textContent="Romantic"
        body.removeAttribute("class")
        body.classList.add("romantic")

        romantic.forEach((song, index) => {
        const li=document.createElement("li")
        li.id="lista"
        const link=document.createElement("a")
        link.textContent=song.title
        link.href="#"
        link.addEventListener("click",()=>{
                loadSong(romantic,index)
                play.classList.remove("fa-play")
                play.classList.add("fa-pause")
                prev.addEventListener("click",()=>{
                    if (index===0){
                        index=2
                    }else{
                        index=index-1
                    }
                    loadSong(romantic,index)})
                next.addEventListener("click",()=>{
                    if (index===2){
                        index=0
                    }else{
                        index=index+1
                    }loadSong(romantic,index)
                })
                audio.addEventListener("ended",()=>{
                    if (index===2){
                        index=0
                    }else{
                        index=index+1
                    }loadSong(romantic,index)
                })  
         })

        li.appendChild(link)
        songs.appendChild(li)})
            
        
    }
}

//cargar cancion
function loadSong(list,index){
    audio.src ="./audio/"+ list[index].file
    audio.play()
    actualSong=index
    cover.src="./img/"+list[index].cover
    title.innerText=list[index].title
}

function playSong(){
    if(actualSong!==null){
        audio.play()
        actualizarControlador()
    }
    
}

function pauseSong(){
    audio.pause()
    actualizarControlador()
}
 //actualizar boton play
function actualizarControlador(){
    if (audio.paused){
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    }else{
        play.classList.remove("fa-play")
        play.classList.add("fa-pause")
    }
}
//barra de progreso se mueve con la cancion
function updateProgress(event){
    //total de la cancion y el actual
    const {duration, currentTime}=event.srcElement
    const porcentaje=(currentTime /duration)*100
    progress.style.width=porcentaje+ "%"
}
//barra de progreso sea clickleable
function setProgress(event){
    const totalWidth = (this.offsetWidth)
    const progressWidth = event.offsetX
    const current = (progressWidth/totalWidth)*audio.duration
    audio.currentTime=current
}
function restartProgress(){
    progress.style.width="0%"
    audio.currentTime=0
}