// ===============================
// AI PORTFOLIO ASSISTANT SCRIPT
// ===============================

// Get elements from index.html
const botMessages = document.getElementById("bot-messages")
const botInput = document.getElementById("bot-input")
const botSend = document.getElementById("bot-send")



// ===============================
// GREETING MESSAGE
// ===============================

window.addEventListener("load", function(){

if(botMessages){

botMessages.innerHTML += "<p><b>AI:</b> Hello! I am Nalini Kant's Portfolio Assistant. Ask me about skills, projects or education.</p>"

}

})



// ===============================
// PROJECT RECOMMENDER
// ===============================

function recommendProject(text){

text = text.toLowerCase()

if(text.includes("hardware") || text.includes("arduino")){

return "Recommended Project: Radar Using Ultrasonic Sensor using Arduino Uno, Ultrasonic Sensor and Servo Motor."

}

if(text.includes("web") || text.includes("website") || text.includes("software")){

return "Recommended Project: Online Voting System built using HTML, CSS, Bootstrap, PHP, MySQL, JavaScript and AJAX."

}

return "You can explore both my projects: Online Voting System and Radar Using Ultrasonic Sensor."

}



// ===============================
// SKILL MATCHER
// ===============================

function skillMatcher(text){

let skills = [
"html",
"css",
"bootstrap",
"javascript",
"php",
"mysql",
"arduino",
"c",
"c++",
"git",
"github"
]

let found = []

skills.forEach(function(skill){

if(text.toLowerCase().includes(skill)){

found.push(skill.toUpperCase())

}

})

if(found.length>0){

return "Matching Skills Found: " + found.join(", ")

}

return "No direct skill match found but you can explore my portfolio."

}



// ===============================
// BOT RESPONSE LOGIC
// ===============================

function getBotReply(userInput){

let reply = ""

if(userInput.includes("skill")){

reply = "Skills include HTML, CSS, Bootstrap, JavaScript, PHP, MySQL, Arduino, C and C++."

}

else if(userInput.includes("project")){

reply = "Nalini Kant has worked on two projects: Online Voting System and Radar Using Ultrasonic Sensor."

}

else if(userInput.includes("education")){

reply = "Nalini Kant completed B.Tech from Bihar Engineering University Patna in Electronics and Communication Engineering."

}

else if(userInput.includes("contact")){

reply = "You can contact through LinkedIn or Email present on the website."

}

else{

reply = "Please explore the website to know more about Nalini Kant's portfolio."

}

return reply

}



// ===============================
// BOT BUTTON EVENT
// ===============================

if(botSend){

botSend.addEventListener("click", function(){

let userInput = botInput.value

if(userInput.trim() === "") return



// Show user message
botMessages.innerHTML += "<p><b>You:</b> " + userInput + "</p>"



// Main AI reply
let reply = getBotReply(userInput.toLowerCase())

botMessages.innerHTML += "<p><b>AI:</b> " + reply + "</p>"



// AI project recommendation
let suggestion = recommendProject(userInput)

botMessages.innerHTML += "<p><b>AI Suggestion:</b> " + suggestion + "</p>"



// AI skill match
let match = skillMatcher(userInput)

botMessages.innerHTML += "<p><b>AI Skill Match:</b> " + match + "</p>"



// Clear input
botInput.value = ""

// Scroll bot window
botMessages.scrollTop = botMessages.scrollHeight

})

}
