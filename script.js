function updateCard() {
    const name = document.getElementById("nameInput").value;
    const userNameElement = document.getElementById("userName");
    userNameElement.textContent = name;
  }
  
  function downloadCard() {
    const name = document.getElementById("nameInput").value;
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
  
    const image = new Image();
    image.src = 'images/card-background.jpg';
  
    image.onload = () => {
      // Set canvas size to match the image exactly
      canvas.width = image.width;
      canvas.height = image.height;
  
      // Draw background at full resolution
      ctx.drawImage(image, 0, 0);
  
      // Draw the name text near the bottom
      ctx.font = `${Math.floor(canvas.width * 0.06)}px 'Alexandria', sans-serif`; // Auto font size
      ctx.fillStyle = "#79a4a8";
      ctx.textAlign = "center";
  
      // Place text 70px above the bottom (adjustable)
      ctx.fillText(name, canvas.width / 2, canvas.height - 500);
  
      // Save as JPEG
      const dataURL = canvas.toDataURL("image/jpeg", 1.0);
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "greeting_card.jpg";
      link.click();
    };
  }  
  