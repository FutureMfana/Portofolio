function convert(x){
    var c = document.getElementById('celcuis').value;
    var f = document.getElementById('fahreheit').value;

    if(x === 1){
        document.getElementById('fahreheit').value = Math.round((c*(9/5))+32, 2);
    }else{
        document.getElementById('celcuis').value = Math.round((f-32) * 5/9, 2);
    }
}

function showContent(){
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}