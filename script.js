
document.getElementById("book-btn").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;
    if (name && service) {
        const booking = {
            name: name,
            service: service,
            status: "waiting"
        };
        fetch("/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(booking)
        }).then(() => {
            alert("تم حجز الموعد بنجاح!");
            document.getElementById("name").value = "";
        });
    } else {
        alert("يرجى إدخال الاسم واختيار الخدمة.");
    }
});
