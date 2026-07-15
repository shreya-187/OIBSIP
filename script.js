// Toggle Trip Type
function toggleTripType(button) {
    const buttons = document.querySelectorAll(".trip-btn");

    buttons.forEach(btn => {
        btn.classList.remove("bg-[#006CE4]", "text-white", "active");
        btn.classList.add("text-gray-600", "hover:bg-gray-100");
    });

    button.classList.remove("text-gray-600", "hover:bg-gray-100");
    button.classList.add("bg-[#006CE4]", "text-white", "active");
}

// Search Flights
function searchFlights() {

    const from = document.querySelectorAll("select")[0].value;
    const to = document.querySelectorAll("select")[1].value;
    const departure = document.querySelector("input[type='date']").value;
    const travelClass = document.querySelectorAll("select")[2].value;
    const travellers = document.querySelectorAll("select")[3].value;

    if (from === "" || to === "") {
        alert("Please select both departure and destination.");
        return;
    }

    alert(
`✈ Flight Search

From: ${from}
To: ${to}
Departure: ${departure}
Class: ${travelClass}
Travellers: ${travellers}

Demo Only`
    );
}

// Promo Button
function usePromo(code) {
    alert(
`🎉 Promo Applied Successfully!

Promo Code: ${code}

Discount will be applied during checkout.`
    );
}

// Keyboard Shortcut
document.addEventListener("keydown", function (e) {

    if (
        e.key === "/" &&
        document.activeElement.tagName !== "INPUT" &&
        document.activeElement.tagName !== "TEXTAREA"
    ) {

        e.preventDefault();

        alert("Search Activated (Demo)");
    }

});

// Navbar Shadow on Scroll
window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 20) {

        nav.classList.add("shadow-lg");

    } else {

        nav.classList.remove("shadow-lg");

    }

});

// Destination Card Hover Animation
document.querySelectorAll(".destination-card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.classList.add("scale-105");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("scale-105");
    });

});

// Console Message
console.log(
"%c✅ Booking Landing Page Loaded Successfully",
"color:#006CE4;font-size:18px;font-weight:bold;"
);