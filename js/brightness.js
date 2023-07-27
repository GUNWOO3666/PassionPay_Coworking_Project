document.getElementById("brightnessbutton").addEventListener("click", changeBrightness);

function changeBrightness() {
    const background = document.background;
    const currentBrightness = getComputedStyle(background).getPropertyValue('--brightness');
    
}