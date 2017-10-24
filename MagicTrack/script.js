var id;
var length;

window.onload = function () {
    id = 1;
    length = document.getElementById("carousel").getElementsByTagName("li").length;
    document.getElementById("carousel").getElementsByTagName("li")[id - 1].style.visibility = "visible";

    setInterval(random, 1000);  

    var photoID;
    var ul = document.getElementById('gallery'); // Parent

    ul.addEventListener('click', function (e) {
        var target = e.target; // Clicked element
        while (target && target.parentNode !== ul) {
            target = target.parentNode; // If the clicked element isn't a direct child
            if (!target) { return; } // If element doesn't exist
        }
        if (target.tagName === 'LI') {
            photoID = target.id; // Check if the element is a LI
            alert(target.id);
        }
    });

    //var modal = document.getElementsByClassName('myModal')[0];

    //// Get the image and insert it inside the modal - use its "alt" text as a caption
    //var img = document.getElementsByClassName('myImg')[0];
    //var modalImg = document.getElementById("img" + toString(photoID));
    //var captionText = document.getElementById("caption");
    //img.onclick = function () {
    //    modal.style.display = "block";
    //    modalImg.src = this.src;
    //    captionText.innerHTML = this.alt;
    //}

    //// Get the <span> element that closes the modal
    //var span = document.getElementsByClassName("close")[0];

    //// When the user clicks on <span> (x), close the modal
    //span.onclick = function () {
    //    modal.style.display = "none";
    //}
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