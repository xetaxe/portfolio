// Show mobile menu
let showingMobileMenu = false;

document.getElementById("menu_button").addEventListener("click", () => {
    if (showingMobileMenu)
        document.getElementById("mobile_nav").classList.add("hide");
    else
        document.getElementById("mobile_nav").classList.remove("hide");

    showingMobileMenu = !showingMobileMenu;
})


// Manage opacity of button that goes to top of page
addEventListener("scroll", toTopButtonOpacity);
let toTopButton = document.getElementById("to_top_button");
toTopButton.addEventListener("click", () => {
    window.scrollTo(0,0);
})
let toTopInterval = null;
function toTopButtonOpacity() {
    if ((window.innerHeight + Math.round(window.scrollY) + 400) >= document.body.offsetHeight) {
        let i = 0;
        if(!toTopInterval && toTopButton.style.opacity == 0){
            toTopInterval = window.setInterval(function() {
                if (i >= 9) {
                    clearInterval(toTopInterval);
                    toTopInterval = null;
                } else {
                    toTopButton.style.opacity = i / 10;
                    i++;
                }
            }, 20);
        }
    } else {
        let i = 9;
        if(!toTopInterval && toTopButton.style.opacity > 0){
            toTopInterval = window.setInterval(function() {
                if (i < 0) {
                    clearInterval(toTopInterval);
                    toTopInterval = null;
                } else {
                    toTopButton.style.opacity = i / 10;
                    i--;
                }
            }, 20);
        }
    }
}

// Add elements at hero section

addEventListener("load", () => {
    let parentWidth = document.getElementById("hero").getBoundingClientRect().width;
    let parentHeight = document.getElementById("hero").getBoundingClientRect().height;
    for(let i=0; i<15; i++){
        let floatingCircle = document.createElement('div');
        floatingCircle.id = 'floating_circle'+i;
        floatingCircle.className = 'floating_circle';
        floatingCircle.style.zIndex = "-1";
        let divSize = Math.floor(Math.random()*(18 - 6) + 6);
        floatingCircle.style.width = divSize + "px";
        floatingCircle.style.height = divSize + "px";
        floatingCircle.style.borderWidth = divSize / 3 + "px";
        let divCompletion = Math.floor(Math.random()*3);
        if (divCompletion === 1)
            floatingCircle.style.borderTopColor = "transparent";
        if (divCompletion === 2){
            floatingCircle.style.borderTopColor = "transparent";
            floatingCircle.style.borderRightColor = "transparent";
        }
        floatingCircle.style.left = Math.floor(Math.random()*(((parentWidth - 10) -10) + 10)) + "px";
        floatingCircle.style.top = Math.floor(Math.random()*(parentHeight + 10)) + "px";
        let divSpeed = Math.floor(Math.random()*(8 - 3) + 3);
        floatingCircle.style.animationDuration = divSpeed + "s";
        if(i%3 === 0)
            floatingCircle.style.animationDirection = "reverse"; 
        document.getElementById("hero").appendChild(floatingCircle);
    }
    for(let i=0; i<10; i++){
        let floatingPlus = document.createElement('div');
        floatingPlus.id = 'floating_plus'+i;
        floatingPlus.className = 'floating_text';
        floatingPlus.innerHTML = "+";
        floatingPlus.style.zIndex = "-1";
        let divSize = Math.floor(Math.random()*(3 - 1) + 1);
        floatingPlus.style.fontSize = divSize + "rem";
        floatingPlus.style.left = Math.floor(Math.random()*(((parentWidth - 20) -10) + 10)) + "px";
        floatingPlus.style.top = Math.floor(Math.random()*(parentHeight + 10)) + "px";
        let divSpeed = Math.floor(Math.random()*(8 - 3) + 3);
        floatingPlus.style.animationDuration = divSpeed + "s";
        if(i%3 === 0)
            floatingPlus.style.animationDirection = "reverse";
        document.getElementById("hero").appendChild(floatingPlus);
    }

    for(let i=0; i<5; i++){
        let floatingLine = document.createElement('div');
        floatingLine.id = 'floating_plus'+i;
        floatingLine.className = 'floating_text';
        floatingLine.innerHTML = "|";
        floatingLine.style.zIndex = "-1";
        let divSize = Math.floor(Math.random()*(3 - 1) + 1);
        floatingLine.style.fontSize = divSize + "rem";
        floatingLine.style.left = Math.floor(Math.random()*(((parentWidth - 10) -10) + 10)) + "px";
        floatingLine.style.top = Math.floor(Math.random()*(parentHeight + 10)) + "px";
        let divSpeed = Math.floor(Math.random()*(8 - 3) + 3);
        floatingLine.style.animationDuration = divSpeed + "s";
        if(i%3 === 0)
            floatingLine.style.animationDirection = "reverse";
        document.getElementById("hero").appendChild(floatingLine);
    }
})