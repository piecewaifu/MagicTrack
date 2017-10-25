var id;
var length;

window.onload = function () {
    var closeBtn = document.getElementById("close");
    id = 1;
    length = document.getElementById("carousel").getElementsByTagName("li").length;
    document.getElementById("carousel").getElementsByTagName("li")[id - 1].style.visibility = "visible";
    galleryLength = document.getElementById("gallery").getElementsByTagName("li").length;
    gallery = document.getElementById("gallery");

    setInterval(random, 1000);  

    var photoID;
    var ul = document.getElementById('gallery'); // Parent
    var zoomed = document.getElementById("zoomed");
    var zoomedImg = document.getElementById("zoomed-content");

    closeBtn.addEventListener('click', function () {
        zoomed.style.display = "none";
    });

    ul.addEventListener('click', function (e) {
        var target = e.target; // Clicked element
        while (target && target.parentNode !== ul) {
            target = target.parentNode; // If the clicked element isn't a direct child
            if (!target) { return; } // If element doesn't exist
        }
        if (target.tagName === 'LI') {
            photoID = target.id; // Check if the element is a LI
            zoomed.style.display = "flex";
            zoomedImg.style.backgroundImage = "url(gallery/" + (photoID) + ".jpg)";
        }
    });



    var gallery = document.getElementById("gallery").getElementsByTagName("li").length;

    for (var i = 0; i < gallery; i++) {
        document.getElementById("gallery").getElementsByTagName("li")[i].style.backgroundImage = "url(gallery/" + (i + 1) + ".jpg)";
    }
}

function showMessage() {
    var messageBox = document.getElementById("message");
    messageBox.style.visibility = "visible";
    messageBox.style.opacity = "1";

    setTimeout(hide, 2000);
}

function hide() {
    var messageBox = document.getElementById("message");
    messageBox.style.visibility = "invisible";
    messageBox.style.opacity = "0";
}


function random() {
    var number = Math.floor((Math.random() * 100) + 1);
    if (number <= 10) {
        showMessage();
    }
    else {
        return;
    }
}

function turnRight() {
    if (id >= length) {
        id = 1;
        document.getElementById("carousel").getElementsByTagName("li")[length - 1].style.visibility = "hidden";
        document.getElementById("carousel").getElementsByTagName("li")[id - 1].style.visibility = "visible";
    }

    else {
        document.getElementById("carousel").getElementsByTagName("li")[id - 1].style.visibility = "hidden";
        document.getElementById("carousel").getElementsByTagName("li")[id].style.visibility = "visible";

        id++;
    }
}

function turnLeft() {
    if (id <= 1) {
        id = length;
        document.getElementById("carousel").getElementsByTagName("li")[0].style.visibility = "hidden";
        document.getElementById("carousel").getElementsByTagName("li")[id - 1].style.visibility = "visible";
    }

    else {
        document.getElementById("carousel").getElementsByTagName("li")[id - 1].style.visibility = "hidden";
        document.getElementById("carousel").getElementsByTagName("li")[id - 2].style.visibility = "visible";

        id--;
    }
}