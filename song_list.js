//song list
let All_song = [
   {
     name: "Aa Rojulu Malli Raavu",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: " "
   },
   {
     name: "Dosthulam",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: ""
   },
   {
     name: "Ekkado Putti",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: ""
   },
   {
     name: "Kirrak Party",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: ""
   },
   {
     name: "Amma Amma Nee Vennela",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: ""
   },
   {
    name: " Nanna Nuv Naa Pranam",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer: ""
   },
   {
    name: " Oh My Dear Brother ",
    path: "music/7.mp3",
    img: "images/7.jpg",
    singer: ""
   },
   {
    name: " Neetho Unte Chalu ",
    path: "music/8.mp3",
    img: "images/8.jpg",
    singer: ""
   },
   {
    name: " Thatha",
    path: "music/9.mp3",
    img: "images/9.jpg",
    singer: ""
   },
   {
    name: " Ammammagarillu ",
    path: "music/10.mp3",
    img: "images/10.jpg",
    singer: ""
   },
   
   
];



/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
}