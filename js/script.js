/* =========================
   THEME SYSTEM
========================= */
function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

/* =========================
   SEMESTER DATA SYSTEM
========================= */
const semesterData = {
    autumn2023: {
        title: "Autumn 2023",
        courses: "CSC101, CSC101 Lab",
        projects: "NGO Donation Management System",
        skills: "Python, Problem Solving",
        reflection: "Built my programming foundation using Python."
    },

    spring2024: {
        title: "Spring 2024",
        courses: "Discrete Mathematics",
        projects: "None",
        skills: "Logical Thinking",
        reflection: "Learned mathematical foundations of CS."
    },

    summer2024: {
        title: "Summer 2024",
        courses: "Data Structures, Lab",
        projects: "Data Structure Implementations",
        skills: "Python, Data Structures",
        reflection: "Strong improvement in problem solving."
    },

    autumn2024: {
        title: "Autumn 2024",
        courses: "Computer Hardware, Algorithms (Failed Attempt)",
        projects: "None",
        skills: "Binary, Logic Gates",
        reflection: "Faced challenges in Algorithms but learned fundamentals deeply."
    },

    spring2025: {
        title: "Spring 2025",
        courses: "Algorithms, Computer Architecture",
        projects: "IntroSort Algorithm",
        skills: "C++, Algorithms",
        reflection: "Major improvement in algorithmic thinking."
    },

    summer2025: {
        title: "Summer 2025",
        courses: "OOP",
        projects: "Paper Factory System (JavaFX)",
        skills: "Java, OOP, UI Design",
        reflection: "First full system-level project experience."
    },

    autumn2025: {
        title: "Autumn 2025",
        courses: "Finite Automata",
        projects: "None",
        skills: "Theoretical CS",
        reflection: "Strengthened computation theory understanding."
    },

    spring2026: {
        title: "Spring 2026",
        courses: "Microprocessor, DBMS",
        projects: "IoT Medicine System, E-Learning Platform",
        skills: "Arduino, MySQL, PHP",
        reflection: "Real-world hardware + software integration experience."
    }
};

/* =========================
   LOAD SEMESTER INTO DASHBOARD
========================= */
function loadSemester(key) {
    const data = semesterData[key];
    const panel = document.getElementById("semester-panel");

    // safety check
    if (!data || !panel) {
        console.warn("Semester data or panel not found:", key);
        return;
    }

    panel.innerHTML = `
        <h2>${data.title}</h2>
        <p><strong>Courses:</strong> ${data.courses}</p>
        <p><strong>Projects:</strong> ${data.projects}</p>
        <p><strong>Skills:</strong> ${data.skills}</p>
        <p><strong>Reflection:</strong> ${data.reflection}</p>
    `;
}

/* =========================
   TIMELINE CLICK EFFECT (VISUAL ONLY)
========================= */
function toggleSemester(element) {
    element.classList.toggle("active");
}

/* =========================
   INITIAL LOAD (THEME + CREDIT)
========================= */
window.addEventListener("DOMContentLoaded", function () {

    // THEME LOAD
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    // CREDIT PROGRESS
    const completed = 74;
    const total = 134;

    const percent = Math.round((completed / total) * 100);

    const fill = document.getElementById("credit-fill");
    const text = document.getElementById("progress-text");

    if (fill && text) {
        fill.style.width = percent + "%";
        text.innerText = `Degree Progress — ${percent}%`;
    }
});