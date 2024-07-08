let imgbox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrimage");
let inputtext = document.getElementById("inputtext");
let getImageButton = document.getElementById("getImageButton");
let downloadLink = document.getElementById("downloadLink");

function createQRcode() {
    if (inputtext.value.length !== 0) {
        qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputtext.value)}`;
        imgbox.classList.add("show-img");
        imgbox.style.maxHeight = "300px";
        getImageButton.classList.remove("cantAccess")
        getImageButton.disabled = false;
        downloadLink.href = qrimage.src;
    } else {
        inputtext.classList.add('error');
        setTimeout(() => {
            inputtext.classList.remove('error');
        }, 1000);
        getImageButton.classList.add("cantAccess")
        getImageButton.disabled = true;
        imgbox.style.maxHeight = "0";
    }
}
