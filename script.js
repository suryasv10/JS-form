document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let dob = document.getElementById("date").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("mail").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.text("User Details:", 20, 20);
    doc.setFont("helvetica", "normal");
    
    doc.text(`First Name: ${firstName}`, 20, 40);
    doc.text(`Last Name: ${lastName}`, 20, 50);
    doc.text(`Date of Birth: ${dob}`, 20, 60);
    doc.text(`Address: ${address}`, 20, 70);
    doc.text(`Phone: ${phone}`, 20, 80);
    doc.text(`Email: ${email}`, 20, 90);
    doc.text(`Gender: ${gender}`, 20, 100);

    let pdfBlob = doc.output("blob");
    let pdfUrl = URL.createObjectURL(pdfBlob);

    let downloadSection = document.getElementById("downloadSection");
    downloadSection.innerHTML = `<a href="${pdfUrl}" download="UserDetails.pdf">
                                    <button>Download PDF</button>
                                 </a>`
});
