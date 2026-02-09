const links = document.querySelectorAll(".links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        link.style.transform = "scale(0.96)";
        setTimeout(() => {
            link.style.transform = "";
        }, 150);
    });
});
