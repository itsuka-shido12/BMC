const users = JSON.parse(localStorage.getItem("user")) || [];

const nombreUsuario = document.querySelector("#nombreAlumno")

for (let i = 0; i < users.length; i++) {
    if (users[i].logged) {
        nombreUsuario.textContent = users[i].nombreCertificado 
    }
}

document.getElementById("descargarPDF").addEventListener("click", () => {

    const certificado = document.querySelector(".certificate")
    console.log(certificado)

    const options = {
        margin: 0,
        filename: "ejemplo.pdf",
        image: { type: "pdf", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
            unit: "px",
            format: [1000, 550],
            orientation: "landscape"
        }

    }
    html2pdf().set(options).from(certificado).toPdf().get("pdf").then(
        function (pdf) {
            const newWindow = window.open(pdf.output("bloburl", "blank"))
        }
    )
})