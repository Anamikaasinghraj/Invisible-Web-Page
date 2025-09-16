// Animate header color
function animate(obj){
    obj.style.color = 'red';
}

// Toggle image visibility
function hideShow(obj){
    if(obj.style.visibility === 'hidden' || obj.style.opacity === '0'){
        obj.style.visibility = 'visible';
        obj.style.opacity = '1';
    } else {
        obj.style.visibility = 'hidden';
        obj.style.opacity = '0';
    }
}

// Smooth fade out
function fade(element) {
    let op = 1; // start fully visible
    let timer = setInterval(function () {
        if(op <= 0){
            clearInterval(timer);
            element.style.opacity = '0';
        }
        element.style.opacity = op;
        op -= 0.1;
    }, 30);
}

// Smooth fade in
function unfade(element) {
    let op = 0; // start invisible
    element.style.opacity = '0';
    element.style.display = 'block';
    let timer = setInterval(function () {
        if(op >= 1){
            clearInterval(timer);
            element.style.opacity = '1';
        }
        element.style.opacity = op;
        op += 0.1; // linear increment
    }, 30);
}
