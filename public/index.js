document.getElementById("form-submit").addEventListener("click", async () => {
    const name = document.getElementById("form-name").value;
    const email = document.getElementById("form-email").value;
    const response = await fetch("/api/contact", {
        method: "POST",
        mode: "cors",
        body: new URLSearchParams({ name, email }),
    });
    console.log(response);
    if (!response.ok) {
        document.getElementById("demo-response").innerText = `Failed ${
            response.status
        } ${response.statusText} ${await response.text()}`;
    } else {
        const data = await response.json();
        document.getElementById("demo-response").innerText = JSON.stringify(data);
    }
});
