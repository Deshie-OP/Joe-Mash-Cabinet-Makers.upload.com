// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal
var images = document.querySelectorAll('.grid-item img');
images.forEach(image => {
    image.onclick = function() {
        modal.style.display = "block";
        var modalImage = document.getElementById("modalImage");
        modalImage.src = this.src;
        var captionText = document.getElementById("caption");
        captionText.innerHTML = this.alt;
    };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
