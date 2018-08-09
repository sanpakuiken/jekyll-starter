document.addEventListener("DOMContentLoaded", function(event) {
	var hako = document.getElementsByClassName('hako');
	for (i=1; i<hako.length; i++){
		if(window.location.href.indexOf(hako[i].innerHTMLreplace(/\s/g,'')) > -1) {
			hako[0].classList.remove("cur");
			hako[i].classList.add("cur");
		}
	}
});
