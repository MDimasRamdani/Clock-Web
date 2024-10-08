
setInterval(() =>{
    const time = document.getElementById("time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let daynight = "AM";

    if (hours > 12) {
        daynight = "PM";
    }
    
    // Tambahkan '0' di depan angka yang kurang dari 10
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }

    // Perbarui konten teks dengan waktu saat ini
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + daynight;
}, 1000);