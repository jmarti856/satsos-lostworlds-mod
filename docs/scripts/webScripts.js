function copyToClipboard(id) {
	var from = document.getElementById(id);
	var range = document.createRange();
	window.getSelection().removeAllRanges();
	range.selectNode(from);
	window.getSelection().addRange(range);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
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