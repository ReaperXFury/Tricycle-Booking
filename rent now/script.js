const fareRates = {
    "Bagong Sikat": {
        "Bagong Silang": 30,
        "Bubog": 50,
        "Mabini": 100,
        "Magbay": 100,
        "Mangarin": 120,
        "Pag-asa": 100,
        "Poblacion I": 50,
        "Poblacion II": 50,
        "Poblacion III": 50,
        "Poblacion IV": 70,
        "Poblacion V": 100,
        "Poblacion VI": 100,
        "Rizal": 150,
        "San Roque": 50,
        "La Curva": 100,
        "Murtha": 150,
        "Central": 150
    },
    "Bagong Silang": {
        "Bagong Sikat": 30,
        "Bubog": 50,
        "Mabini": 100,
        "Magbay": 100,
        "Mangarin": 120,
        "Pag-asa": 80,
        "Poblacion I": 50,
        "Poblacion II": 50,
        "Poblacion III": 50,
        "Poblacion VI": 50,
        "Poblacion V": 50,
        "Rizal": 150,
        "San Roque": 50,
        "La Curva": 120,
        "Murtha": 150,
        "Central": 150
    },
    "Bubog": {
        "Bagong Sikat": 50,
        "Bagong Silang": 50,
        "Mabini": 120,
        "Magbay": 120,
        "Mangarin": 130,
        "Pag-asa": 100,
        "Poblacion I": 75,
        "Poblacion II": 75,
        "Poblacion III": 75,
        "Poblacion IV": 75,
        "Poblacion V": 75,
        "Poblacion VI": 75,
        "Rizal": 150,
        "San Roque": 50,
        "La Curva": 100,
        "Murtha": 150,
        "Central": 130
    },
    "Mabini": {
        "Bagong Sikat": 80,
        "Bagong Silang": 100,
        "Bubog": 100,
        "Magbay": 75,
        "Mangarin": 50,
        "Pag-asa": 100,
        "Poblacion I": 75,
        "Poblacion II": 75,
        "Poblacion III": 75,
        "Poblacion IV": 75,
        "Poblacion V": 75,
        "Poblacion VI": 75,
        "Rizal": 150,
        "San Roque": 90,
        "La Curva": 100,
        "Murtha": 150,
        "Central": 120
    },
    "Magbay": {
        "Bagong Sikat": 90,
        "Bagong Silang": 90,
        "Bubog": 100,
        "Mabini": 75,
        "Mangarin": 85,
        "Pag-asa": 100,
        "Poblacion I": 75,
        "Poblacion II": 75,
        "Poblacion III": 75,
        "Poblacion IV": 75,
        "Poblacion V": 75,
        "Poblacion VI": 75,
        "Rizal": 150,
        "San Roque": 100,
        "La Curva": 50,
        "Murtha": 100,
        "Central": 120
    },
    "Mangarin": {
        "Bagong Sikat": 100,
        "Bagong Silang": 100,
        "Bubog": 120,
        "Mabini": 50,
        "Magbay": 100,
        "Pag-asa": 100,
        "Poblacion I": 75,
        "Poblacion II": 75,
        "Poblacion III": 75,
        "Poblacion IV": 75,
        "Poblacion V": 75,
        "Poblacion VI": 75,
        "Rizal": 150,
        "San Roque": 100,
        "La Curva": 75,
        "Murtha": 120,
        "Central": 120
    },
    "Pag-asa": {
        "Bagong Sikat": 75,
        "Bagong Silang": 70,
        "Bubog": 100,
        "Mabini": 100,
        "Magbay": 100,
        "Mangarin": 120,
        "Poblacion I": 50,
        "Poblacion II": 50,
        "Poblacion III": 50,
        "Poblacion IV": 50,
        "Poblacion V": 50,
        "Poblacion VI": 50,
        "Rizal": 150,
        "San Roque": 75,
        "La Curva": 120,
        "Murtha": 150,
        "Central": 120
    },
    "Poblacion I": {
        "Bagong Sikat": 75,
        "Bagong Silang": 70,
        "Bubog": 100,
        "Mabini": 75,
        "Magbay": 100,
        "Mangarin": 100,
        "Pag-asa": 50,
        "Poblacion II": 30,
        "Poblacion III": 30,
        "Poblacion IV": 30,
        "Poblacion V": 30,
        "Poblacion VI": 30,
        "Rizal": 150,
        "San Roque": 50,
        "La Curva": 100,
        "Murtha": 150,
        "Central": 120
    },
    "Poblacion II": {
        "Bagong Sikat": 75,
        "Bagong Silang": 70,
        "Bubog": 100,
        "Mabini": 75,
        "Magbay": 100,
        "Mangarin": 100,
        "Pag-asa": 100,
        "Poblacion I": 30,
        "Poblacion III": 30,
        "Poblacion IV": 30,
        "Poblacion V": 30,
        "Poblacion VI": 30,
        "Rizal": 150,
        "San Roque": 50,
        "La Curva": 100,
        "Murtha": 150,
        "Central": 120
    },
    "Poblacion III": {
        "Bagong Sikat": 75,
        "Bagong Silang": 70,
        "Bubog": 100,
        "Mabini": 75,
        "Magbay": 100,
        "Mangarin": 100,
        "Pag-asa": 100,
        "Poblacion I": 30,
        "Poblacion II": 30,
        "Poblacion IV": 30,
        "Poblacion V": 30,
        "Poblacion VI": 30,
        "Rizal": 150,
        "San Roque": 50,
        "La Curva": 100,
        "Murtha": 150,
        "Central": 120
    },
    "Poblacion IV": {
        "Bagong Sikat": 75,
        "Bagong Silang": 70,
        "Bubog": 100,
        "Mabini": 75,
        "Magbay": 100,
        "Mangarin": 100,
        "Pag-asa": 100,
        "Poblacion I": 30,
        "Poblacion II": 30,
        "Poblacion III": 30,
        "Poblacion V": 30,
        "Poblacion VI": 30,
        "Rizal": 150,
        "San Roque": 50,
        "La Curva": 100,
        "Murtha": 150,
        "Central": 120
    },
    "Poblacion V": {
        "Bagong Sikat": 75,
        "Bagong Silang": 70,
        "Bubog": 100,
        "Mabini": 75,
        "Magbay": 100,
        "Mangarin": 100,
        "Pag-asa": 100,
        "Poblacion I": 30,
        "Poblacion II": 30,
        "Poblacion IV": 30,
        "Poblacion III": 30,
        "Poblacion VI": 30,
        "Rizal": 150,
        "San Roque": 50,
        "La Curva": 100,
        "Murtha": 150,
        "Central": 120
    },
    "Poblacion VI": {
        "Bagong Sikat": 75,
        "Bagong Silang": 70,
        "Bubog": 100,
        "Mabini": 75,
        "Magbay": 100,
        "Mangarin": 100,
        "Pag-asa": 100,
        "Poblacion I": 30,
        "Poblacion II": 30,
        "Poblacion IV": 30,
        "Poblacion V": 30,
        "Poblacion VIII": 30,
        "Rizal": 150,
        "San Roque": 50,
        "La Curva": 100,
        "Murtha": 150,
        "Central": 120
    },
    "Rizal": {
        "Bagong Sikat": 120,
        "Bagong Silang": 120,
        "Bubog": 100,
        "Mabini": 150,
        "Magbay": 100,
        "Mangarin": 150,
        "Pag-asa": 100,
        "Problacion I": 100,
        "Poblacion II": 100,
        "Poblacion III": 100,
        "Poblacion IV": 100,
        "Poblacion V": 100,
        "Poblacion VI": 100,
        "San Roque": 100,
        "La Curva": 75,
        "Murtha": 120,
        "Central": 50,
    },
    "San Roque": {
        "Bagong Sikat": 60,
        "Bagong Silang": 50,
        "Bubog": 75,
        "Mabini": 100,
        "Magbay": 100,
        "Mangarin": 120,
        "Pag-asa": 100,
        "Problacion I": 50,
        "Poblacion II": 50,
        "Poblacion III": 50,
        "Poblacion IV": 50,
        "Poblacion V": 50,
        "Poblacion VI": 50,
        "Rizal": 140,
        "La Curva": 100,
        "Murtha": 150,
        "Central": 120,
    },
    "La Curva": {
        "Bagong Sikat": 100,
        "Bagong Silang": 100,
        "Bubog": 75,
        "Mabini": 100,
        "Magbay": 50,
        "Mangarin": 120,
        "Pag-asa": 100,
        "Problacion I": 100,
        "Poblacion II": 100,
        "Poblacion III": 100,
        "Poblacion IV": 100,
        "Poblacion V": 100,
        "Poblacion VI": 100,
        "Rizal": 100,
        "San Roque": 100,
        "Murtha": 100,
        "Central": 75,
    },
    "Murtha": {
        "Bagong Sikat": 125,
        "Bagong Silang": 130,
        "Bubog": 120,
        "Mabini": 140,
        "Magbay": 100,
        "Mangarin": 150,
        "Pag-asa": 130,
        "Problacion I": 120,
        "Poblacion II": 120,
        "Poblacion III": 120,
        "Poblacion IV": 120,
        "Poblacion V": 31200,
        "Poblacion VI": 120,
        "Rizal": 120,
        "San Roque": 130,
        "La Curva": 100,
        "Central": 120,
    },
    "Central": {
        "Bagong Sikat": 120,
        "Bagong Silang": 120,
        "Bubog": 100,
        "Mabini": 140,
        "Magbay": 100,
        "Mangarin": 150,
        "Pag-asa": 120,
        "Problacion I": 100,
        "Poblacion II": 100,
        "Poblacion III": 100,
        "Poblacion IV": 100,
        "Poblacion V": 100,
        "Poblacion VI": 100,
        "Rizal": 75,
        "San Roque": 120,
        "La Curva": 75,
        "Murtha": 120,
    },

};
function getFare(pickUpLoc, dropOffLoc) {
    if (pickUpLoc === dropOffLoc) {
        return 0;
    }

    if (fareRates[pickUpLoc] && fareRates[pickUpLoc][dropOffLoc] !== undefined) {
        return fareRates[pickUpLoc][dropOffLoc];
    } else {
        return "Fare not available for this route";
    }
}

const popup = document.getElementById('popup');

function displaymessage() {
    const fullName = document.getElementById('fname').value;
    const pickUpLoc = document.getElementById('pickup').value;
    const dropOffLoc = document.getElementById('drop-off').value;

    const fare = getFare(pickUpLoc, dropOffLoc);

    if (fullName && pickUpLoc && dropOffLoc) {
        const message = document.querySelector('.message');
        message.textContent = `Thank you for booking, ${fullName}. Please wait for the driver at ${pickUpLoc}. 
        Please pay ₱${fare} to the driver.`;
        popup.classList.add('open-popup');
    } else {
        alert("Please fill out all fields before submitting.");
    }
}

function closePopUp() {
    popup.classList.remove('open-popup');
}
