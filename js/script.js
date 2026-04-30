function toggleSemester(element) {
    element.classList.toggle("active");
}

/* THEME SYSTEM (GLOBAL + SAVED) */
function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

/* LOAD THEME ON EVERY PAGE */
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
};