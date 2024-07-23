let result = document.querySelector(".result");

window.addEventListener("keydown", (event) => {
    //   test: result.textContent = `${event.key}`;
      const audioElement = document.getElementById(`sound${event.key}`);

      if (audioElement) {
        audioElement.play();
    }

    });
  
  
  
  
  
  