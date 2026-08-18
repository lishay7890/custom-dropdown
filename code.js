const dropdown = document.querySelector(".dropdown");
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownPlaceholder = document.querySelector(".dropdown-placeholder");
const dropdownOptions = document.querySelectorAll(".dropdown-option");

// Open and close dropdown
dropdownButton.addEventListener("click", function () {
    const isOpen = dropdownMenu.classList.toggle("show");

    dropdownButton.setAttribute("aria-expanded", isOpen);
});

// Select an option
dropdownOptions.forEach(function (option) {
    option.addEventListener("click", function () {

        // Show selected option
        dropdownPlaceholder.textContent = option.dataset.value;

        // Remove selected state from all options
        dropdownOptions.forEach(function (item) {
            item.classList.remove("selected");
            item.setAttribute("aria-selected", "false");
        });

        // Add selected state
        option.classList.add("selected");
        option.setAttribute("aria-selected", "true");

        // Close dropdown
        dropdownMenu.classList.remove("show");
        dropdownButton.setAttribute("aria-expanded", "false");
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
        dropdownMenu.classList.remove("show");
        dropdownButton.setAttribute("aria-expanded", "false");
    }
});