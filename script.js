const links = document.querySelectorAll(".links a");

links.forEach(link => {
    const press = () => {
        link.style.transform = "scale(0.96)";
        setTimeout(() => {
            link.style.transform = "";
        }, 150);
    };

    link.addEventListener("mousedown", press);
    link.addEventListener("touchstart", press, { passive: true });
});
