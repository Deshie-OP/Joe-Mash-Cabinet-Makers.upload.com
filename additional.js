document.getElementById("serviceButton").onclick = function() {
    var info = document.getElementById("serviceInfo");
    info.style.display = info.style.display === "none" ? "block" : "none";
};

document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();
    alert("Thank you for contacting us, " + document.getElementById("name").value + "!");
    document.getElementById("contactForm").reset();
};

document.getElementById("alertButton").onclick = function() {
    alert("Hello! Thank you for visiting us today.");
};
