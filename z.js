function fetchLocation() {
    let pincode = document.getElementById("pincode").value;
    if (pincode.trim() === "") {
        alert("PLEASE ENTER A PINCODE.");
        return;
    }

    fetch(`https://api.zippopotam.us/in/${pincode}`)
        .then(response => response.json())
        .then(data => {
            if (data.places) {
                let place = data.places[0];
                document.getElementById("locationResult").innerHTML = 
                    `<p class='alert alert-info'>Location: ${place["place name"]}, ${place.state}</p>`;
            } else {
                document.getElementById("locationResult").innerHTML = 
                    `<p class='alert alert-danger'>Pincode not found.</p>`;
            }
        })
        .catch(() => {
            document.getElementById("locationResult").innerHTML = 
                `<p class='alert alert-warning'>Error retrieving data.</p>`;
        });
}
