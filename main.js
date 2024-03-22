onload = () =>{
        document.body.classList.remove("container");
};
var audio = document.getElementById("myAudio");

// Fungsi untuk memulai atau memutar ulang lagu
function playAudio() {
  audio.play();
}

// Panggil fungsi playAudio() saat halaman dimuat
window.onload = playAudio;

      
