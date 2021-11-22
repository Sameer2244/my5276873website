window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        console.log('scrolling');
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("my-navbar").style.height = "2vh";
            document.getElementById("my-logo").style.width = "12vw";
        } else {
            document.getElementById("my-navbar").style.height = "3vh";
            document.getElementById("my-logo").style.width = "15vw";
            
        }
    }