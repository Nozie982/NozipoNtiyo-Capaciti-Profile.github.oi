document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("downloadButton").addEventListener("click", function () {
      var a = document.createElement("a");
      a.href = "./CV.pdf";
      a.download = "CV.pdf";
      a.click();
    });
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi. I’m Nozipo Ntiyo.\nA Data Engineer.";
    const typewriterText = document.getElementById("typewriter-text");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            if (text.charAt(index) === "\n") {
                typewriterText.innerHTML += "<br>";
            } else {
                typewriterText.innerHTML += text.charAt(index);
            }
            index++;
            setTimeout(typeWriter, 100); // Adjust speed here (lower value = faster typing)
        }
    }

    typeWriter();
});



