document.addEventListener("DOMContentLoaded", function () {
    console.log("Blog page loaded!");

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.3)";
        });
        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "none";
        });
    });
});
