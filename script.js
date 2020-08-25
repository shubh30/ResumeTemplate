// Navigation Smooth scroll behaviour

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags);
var interval;
for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSctionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSctionID);

        // console.log(targetSctionID);
        interval = setInterval(scrollVertically, 30, targetSection);
    });
}

// Function to scroll smooth
function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}


// Skill ProgressBar animation
var progressBar = document.querySelectorAll('.skill-progress div');
var skillsContainer = document.getElementById('skills-container');

window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBar) {
        bar.style.width = 0 + '%';
    }
}

initialiseBars();

function fillBars(){
    for(let bar of progressBar) {
        let targetWidth = bar.getAttribute('data-bar-width')
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth) {
                clearInterval(interval);
                return;
            }

            currentWidth++;
            bar.style.width = currentWidth +'%';
        },5);
    }
}

function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top < window.innerHeight){
        animationDone = true;
        console.log("Skill Section Visible");
        fillBars();
    }
}