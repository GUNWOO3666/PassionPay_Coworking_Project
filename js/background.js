// 랜덤 백그라운드 이미지의 행렬 형성
// Math.random과 Math.floor 기능을 통해 행렬 순번 랜더마이즈
// 핵심기능: array에서 랜덤한 숫자를 얻어 숫자에 따른 이미지를 body에 추가함

const images = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = new Image();

bgImage.onload = function() {
    const imageRatio = bgImage.width / bgImage.height;
    const screenRatio = window.innerWidth / window.innerHeight;

    if (screenRatio > imageRatio) {
        bgImage.style.width = '100%';
        bgImage.style.height = 'auto';
    } else {
        bgImage.style.width = 'auto';
        bgImage.style.height = '100%';
    }

    bgImage.id = 'bgImage';
    document.body.appendChild(bgImage);
};

bgImage.src = `img/${chosenImage}`;

document.getElementById("imagebutton").addEventListener("click", changeImage);

function changeImage() {

    chosenImages = images[Math.floor(Math.random() * images.length)];

    bgImage.src = `img/${chosenImages}`;

    document.body.appendChild(bgImage);
    document.body.replaceChild(bgImage);
}