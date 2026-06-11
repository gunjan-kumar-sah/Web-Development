const qrText = document.getElementById("qrText");
const size = document.getElementById("size");

const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const downloadBtn = document.getElementById("downloadBtn");

const qrContainer = document.getElementById("qrcode");

function generateQR() {
    const text = qrText.value.trim();

    if (!text) {
        alert("Please enter text or URL");
        qrText.focus();
        return;
    }

    // Purana QR remove karo
    qrContainer.innerHTML = "";

    // Naya QR generate karo
    new QRCode(qrContainer, {
        text: text,
        width: parseInt(size.value),
        height: parseInt(size.value),
        correctLevel: QRCode.CorrectLevel.H
    });
}

// Generate Button
generateBtn.addEventListener("click", generateQR);

// Enter Key Support
qrText.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        generateQR();
    }
});

// Clear Button
clearBtn.addEventListener("click", () => {
    qrText.value = "";
    qrContainer.innerHTML = "";
    qrText.focus();
});

// Download Button
downloadBtn.addEventListener("click", () => {

    const img = qrContainer.querySelector("img");
    const canvas = qrContainer.querySelector("canvas");

    let imageURL = "";

    if (img) {
        imageURL = img.src;
    } 
    else if (canvas) {
        imageURL = canvas.toDataURL("image/png");
    } 
    else {
        alert("Generate QR Code First");
        return;
    }

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "QR-Code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});