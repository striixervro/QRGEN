
let imgbox = document.getElementById("imgbox")
let qrimg = document.getElementById("qrimg")
let qrtxt = document.getElementById("qrtxt")

function GenerateQR(){
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtxt.value;
    dispimg.classList.add("dispimg")
}