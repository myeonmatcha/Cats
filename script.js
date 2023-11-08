const search = document.querySelector(".search-box input"),
      images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", e => {
    if (e.key == "Enter") {
        let searchValue = search.value.toLowerCase();
        images.forEach(image => {
            if (searchValue === image.dataset.name) {
                image.style.opacity = 0; // Start with zero opacity
                image.style.display = "block";
                // Apply a fade-in animation using CSS transitions
                setTimeout(() => {
                    image.style.opacity = 1;
                }, 10); // You can adjust the animation duration (10ms in this case)
            } else {
                image.style.display = "none";
            }
        });
    }
});

search.addEventListener("keyup", () => {
    if (search.value != "") return;

    images.forEach(image => {
        image.style.display = "block";
    });
});
