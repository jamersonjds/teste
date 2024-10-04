const searchInput = document.querySelector("#searchInput");
const itemList = document.querySelector("#itemList");
const items = itemList.getElementsByTagName("li");

searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();

    if (filter.trim() !== "") {
        itemList.style.display = "block";
    } else {
        itemList.style.display = "none";
    }

    Array.from(items).forEach(function (item) {
        const text = item.textContent.toLowerCase();

        if (text.includes(filter)) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
});
