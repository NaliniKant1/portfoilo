function sendMessage() {
    const input = document.getElementById('userInput');
    const msg = input.value.trim().toLowerCase();
    if (!msg) return;

    const chat = document.getElementById('chatWindow');
    chat.innerHTML += `<p class="mb-1"><strong>You:</strong> ${input.value}</p>`;

    let reply = "Hi! I'm Nalini Kant's assistant bot. Ask me anything about my background, skills, education, projects, etc.";

    // Home / General
    if (msg.includes("name") || msg.includes("who are you") || msg.includes("introduce")) {
        reply = "My name is Nalini Kant. I am an Electronics & Communication Engineer, coder, and VLSI enthusiast.";
    }

    // Skills
    else if (msg.includes("skill") || msg.includes("skills") || msg.includes("know") || msg.includes("programming")) {
        reply = "My technical skills include:\n\n" +
                "• Programming: C, C++, HTML, CSS, JavaScript, Bootstrap\n" +
                "• Database & Version Control: MySQL, Git, GitHub\n" +
                "• Tools: VS Code, MS Excel, MS Word, MS PowerPoint\n" +
                "• Technical Subjects: Digital Circuits, Analog Circuits, Electronics Devices and Circuits, Network Theory, Signals and Systems, Communication, Electromagnetic Theory, Control Systems, Digital CMOS VLSI Design";
    }

    // Education
    else if (msg.includes("education") || msg.includes("study") || msg.includes("degree") || msg.includes("b.tech") || msg.includes("12th") || msg.includes("10th")) {
        reply = "Education:\n\n" +
                "• B.Tech – Electronics & Communication Engineering\n" +
                "  Bihar Engineering University, Patna (Dec 2020 – Aug 2024)\n" +
                "  Key subjects: Analog Circuits, Digital Circuits, EDC, Communication Systems, Network Theory, Signals & Systems, EMT, Control Systems, VLSI Design\n\n" +
                "• 12th (CBSE)\n" +
                "  Satyam International School, Patna (May 2018 – July 2020)\n" +
                "  Subjects: Mathematics, Physics, Chemistry, English, Painting\n\n" +
                "• 10th (CBSE)\n" +
                "  R.P.S Public School, Patna (Apr 2017 – May 2018)\n" +
                "  Subjects: Mathematics, Science, Social Science, English, Sanskrit";
    }

    // Certifications
    else if (msg.includes("certif") || msg.includes("nptel") || msg.includes("great learning")) {
        reply = "Certifications:\n" +
                "• Sensor Technologies: Physics Fabrication and Circuits – NPTEL\n" +
                "• Developing Soft Skills and Personality – NPTEL\n" +
                "• C Programming Language – Great Learning\n" +
                "• C++ – Great Learning";
    }

    // Projects
    else if (msg.includes("project") || msg.includes("projects") || msg.includes("voting") || msg.includes("radar")) {
        reply = "Projects:\n\n" +
                "1. Online Voting System (Dynamic Website)\n" +
                "   - Front-end: HTML, CSS, Bootstrap\n" +
                "   - Back-end: PHP + MySQL\n" +
                "   - Features: JavaScript validations, AJAX\n\n" +
                "2. Radar Using Ultrasonic Sensor\n" +
                "   - Hardware: Arduino Uno, Ultrasonic Sensor, Servo Motor\n" +
                "   - Software: Arduino IDE + Processing IDE (GUI for angle/distance)";
    }

    // Achievements
    else if (msg.includes("achieve") || msg.includes("award") || msg.includes("club")) {
        reply = "Achievements & Awards:\n" +
                "• Meritorious Student Encouragement Award (for performance in semester exams)\n" +
                "• Secretary of College Coding Club";
    }

    // Contact / Reach
    else if (msg.includes("contact") || msg.includes("email") || msg.includes("reach") || msg.includes("connect")) {
        reply = "You can reach me at: nalinikantk@gmail.com\n" +
                "LinkedIn: https://www.linkedin.com/in/nalinikant1\n" +
                "GitHub: https://github.com/NaliniKant1";
    }

    // Fallback
    else {
        reply = "Sorry, I didn't understand that. You can ask about my:\n" +
                "- Name & background\n" +
                "- Skills\n" +
                "- Education\n" +
                "- Projects\n" +
                "- Certifications\n" +
                "- Achievements\n" +
                "- Contact info";
    }

    chat.innerHTML += `<p class="mb-1 text-primary"><strong>Bot:</strong> ${reply}</p>`;
    chat.scrollTop = chat.scrollHeight;
    input.value = '';
}
