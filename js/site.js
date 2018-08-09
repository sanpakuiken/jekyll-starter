document.addEventListener("DOMContentLoaded", function(event) {
	var hako = document.getElementsByClassName('hako');
	for (i=1; i<hako.length; i++){
		alert(hako[i].innerHTML.replace(/\s/g,''));
		if(window.location.href.indexOf(hako[i].innerHTML.trim()) > -1) {
			hako[0].classList.remove("cur");
			hako[i].classList.add("cur");
		}
	}
});
