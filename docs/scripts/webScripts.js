function copyToClipboard(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}

function openModal() {
	document.getElementById("SphinxGallery").style.display = "block";
}

function closeModal() {
	document.getElementById("SphinxGallery").style.display = "none";
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("SliderImages");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");

	if (n > slides.length){
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	
	dots[slideIndex-1].className += " active";
	slides[slideIndex-1].style.display = "block";
	captionText.innerHTML = dots[slideIndex-1].alt;
}