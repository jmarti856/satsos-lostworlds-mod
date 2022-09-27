function copyToClipboard(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
	const targetDiv = document.getElementById("MessageAlert");
	if (window.getComputedStyle(targetDiv).display === "none" || window.getComputedStyle(targetDiv).visibility === "hidden")
	{
		setTimeout(function() {$('#MessageAlert').fadeIn('fast');}, 500);
		setTimeout(function() {$('#MessageAlert').fadeOut('fast');}, 3000);
	}
}

function RunAccordion()
{
	var acc = document.getElementsByClassName("accordionChangelogs");
	var i;
	for (i = 0; i < acc.length; i++) 
	{
		acc[i].addEventListener("click", function()
		{
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight)
			{
				panel.style.maxHeight = null;
			}
			else
			{
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}
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