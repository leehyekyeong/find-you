var logo = document.getElementsByClassName("logo");
for (var i=0; i<logo.length; i++) {
    logo[i].onclick = function() {
        this.style.content = "url('#')";
        console.log(this + 'logo clicked');
    };
}