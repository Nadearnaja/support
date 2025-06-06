function submitForm() {
  const entry = {
    date: document.getElementById("date").value,
    department: document.getElementById("department").value,
    description: document.getElementById("description").value,
    method: document.getElementById("method").value,
    amount: document.getElementById("amount").value.replace(/,/g, "")
  };

  fetch("https://script.google.com/macros/s/AKfycbxkBnl14MYsEjmdkBPpZCL3PWVn531g_gEg3U3Q0Dlywg6cbW9Depd9dP2LPVZFHUE/exec", {
    method: "POST",
    body: JSON.stringify(entry),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.text())
    .then(docId => {
      document.getElementById("docIdResult").innerHTML =
        '<span style="color:green;">✅ ส่งข้อมูลสำเร็จ เลขที่เอกสาร: ' + docId + '</span>';
      document.getElementById("purchaseForm").reset();
    })
    .catch(err => {
      document.getElementById("docIdResult").innerHTML =
        '<span style="color:red;">❌ ส่งข้อมูลไม่สำเร็จ</span>';
      console.error(err);
    });
}
