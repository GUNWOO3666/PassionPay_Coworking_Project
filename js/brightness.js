const button = document.getElementById('brightenessbutton');

button.addEventListener('click', changeBrightness)

function changeBrightness() {
    let brightness = getComputedStyle(document.documentElement).getPropertyValue('--brightness');
    if (brightness === '100%') {
        brightness = '75%';
        button.innerHTML = '75%';  
    } 

    else if (brightness === '75%') {
        brightness = '50%';
        button.innerHTML = '50%';  
    } 

    else if (brightness === '50%') {
        brightness = '25%';
        button.innerHTML = '25%';  
    } 

        else {
        brightness = '100%';
        button.innerHTML = '100%'; 
    }
    
    document.documentElement.style.setProperty('--brightness', brightness);
};