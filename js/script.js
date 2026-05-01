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
/* CREDIT PROGRESS SYSTEM */
window.onload = function () {

    // Load theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    // Credit calculation
    const completed = 74;
    const total = 134;

    const percent = Math.round((completed / total) * 100);

    const fill = document.getElementById("credit-fill");
    const text = document.getElementById("progress-text");

    if (fill && text) {
        fill.style.width = percent + "%";
        text.innerText = "Degree Progress — " + percent + "%";
    }
};