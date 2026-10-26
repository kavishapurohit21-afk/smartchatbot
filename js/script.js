/*==================================================
  ICT Department Website
  Government Polytechnic for Girls, Surat

  File : script.js
  Purpose : Common JavaScript
  Author : Nidhi Patel
==================================================*/


/*==========================================
      PAGE LOADED
==========================================*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("ICT Department Website Loaded Successfully");

});



/*==========================================
      SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



/*==========================================
      LABORATORY POPUP
==========================================*/

function openLab(id){

    const popup=document.getElementById(id);

    if(popup){

        popup.style.display="flex";

    }

}


function closeLab(id){

    const popup=document.getElementById(id);

    if(popup){

        popup.style.display="none";

    }

}




/*==================================
        FACULTY DATA
==================================*/


const facultyData = {


hod:{
image:"images/facullty.jpg/Kundan.N.Vaghela.jpg.jpg",
name:"Ms. Kundan N. Vaghela",
designation:"Head of Department",
qualification:"M.E EC",
specialization:"Industrial Electronics",
cabin:"Near B-106"
},



faculty1:{
image:"images/facullty.jpg/alpesh.r.sankaliya.jpg.jpg",
name:"Dr. Alpesh R. Sankaliya",
designation:"Lecturer",
qualification:"PhD EC",
experience:"23 Years",
specialization:"Communication Engineering",
date:"18-Jan-2002",
appointment:"Regular",
cabin:"B-106"
},



faculty2:{
image:"images/facullty.jpg/ashish.m.patel.jpg.jpg",
name:"Mr. Ashishkumar M. Patel",
designation:"Lecturer",
qualification:"B.E EC",
experience:"16 Years",
specialization:"EC",
date:"18-Dec-2009",
appointment:"Regular",
cabin:"B-102"
},



faculty3:{
image:"images/facullty.jpg/Jinal.R.Patel.jpg.jpg",
name:"Mrs. Jinal R. Patel",
designation:"Lecturer",
qualification:"B.E EC",
experience:"15 Years",
specialization:"EC",
date:"29-Apr-2011",
appointment:"Regular",
cabin:"B-101"
},



faculty4:{
image:"images/facullty.jpg/gaurang.r.gajjar.jpg.jpg",
name:"Mr. Gaurang R. Gajjar",
designation:"Lecturer",
qualification:"M.Tech EC",
experience:"15 Years",
specialization:"EC",
date:"21-Apr-2011",
appointment:"Regular",
cabin:"B-104"
},



faculty5:{
image:"images/facullty.jpg/kalpana.r.chaudhry.jpg.jpg",
name:"Ms. Kalpna R. Chaudhari",
designation:"Lecturer",
qualification:"M.E EC",
experience:"15 Years",
specialization:"Microprocessor Systems and Applications",
date:"09-May-2011",
appointment:"Regular",
cabin:"B-202"
},



faculty6:{
image:"images/facullty.jpg/purvi.a.patel.jpg.jpg",
name:"Ms. Purvi A. Patel",
designation:"Lecturer",
qualification:"M.E CSE",
experience:"10 Years",
specialization:"Communication Systems Engineering",
date:"16-Sep-2015",
appointment:"Regular",
cabin:"B-106"
},



faculty7:{
image:"images/facullty.jpg/dhruwank.y.vankawala.jpg.jpg",
name:"Mr. Dhruwank Y. Vankawala",
designation:"Lecturer",
qualification:"B.E EC",
experience:"9 Years",
specialization:"EC",
date:"08-Nov-2016",
appointment:"Regular",
cabin:"B-103"
},



faculty8:{
image:"images/facullty.jpg/alpesh.d.dobariya.jpg.jpg",
name:"Mr. Alpesh D. Dobariya",
designation:"Lecturer",
qualification:"M.Tech EC",
experience:"10 Years",
specialization:"Electronics Circuit and Communication System",
date:"04-Nov-2016",
appointment:"Regular",
cabin:"B-104"
},



faculty9:{
image:"images/facullty.jpg/ramesh.p.haun.jpg.jpg",
name:"Mr. Ramesh P. Hun",
designation:"Lecturer",
qualification:"M.S by Research",
experience:"13 Years",
specialization:"System and Control",
date:"22-Nov-2016",
appointment:"Regular",
cabin:"B-201"
},



faculty10:{
image:"images/facullty.jpg/vipul.r.dodiya.jpg.jpg",
name:"Mr. Vipulkumar R. Dodiya",
designation:"Lecturer",
qualification:"B.E EC",
experience:"9 Years",
specialization:"Electronics and Communication",
date:"29-Oct-2016",
appointment:"Regular",
cabin:"B-205"
},



faculty11:{
image:"images/facullty.jpg/divyesh.u.patel.jpg.jpg",
name:"Mr. Divyeshkumar U. Patel",
designation:"Lecturer",
qualification:"B.Tech EC",
experience:"9 Years",
specialization:"Microcontroller & Embedded Systems",
date:"05-Nov-2016",
appointment:"Regular",
cabin:"B-203"
},


faculty12:{
image:"images/facullty.jpg/Parth.D.Patel.jpg.jpg",
name:"Mr. Parth D. Patel",
designation:"Lecturer",
qualification:"M.E EC",
experience:"9 Years",
specialization:"Wireless Sensor Network",
date:"05-Nov-2016",
appointment:"Regular",
cabin:"B-101"
},



faculty13:{
image:"images/facullty.jpg/kalpesh.f.chaudhry.jpg.jpg",
name:"Mr. Kalpesh F. Chaudhari",
designation:"Lecturer",
qualification:"M.Tech EC",
experience:"10 Years",
specialization:"Communication Systems Engineering",
date:"03-Nov-2016",
appointment:"Regular",
cabin:"B-102"
},



faculty14:{
image:"images/facullty.jpg/nitesh.n.gamit.jpg.jpg",
name:"Mr. Nitesh N. Gamit",
designation:"Lecturer",
qualification:"B.E EC",
experience:"10 Years",
specialization:"Embedded System and Communication",
date:"29-Oct-2016",
appointment:"Regular",
cabin:"B-206"
},



faculty15:{
image:"images/facullty.jpg/hiral.r.mehta.jpg.jpg",
name:"Ms. Hiral R. Mehta",
designation:"Lecturer",
qualification:"M.E EC",
experience:"9 Years",
specialization:"EC",
date:"20-Jul-2017",
appointment:"Regular",
cabin:"B-105"
},

faculty16:{
image:"images/facullty.jpg/ila.m.mistry.jpg.jpg",
name:"Ms. Ila M. Mistry",
designation:"Lecturer",
qualification:"M.E EC",
experience:"9 Years",
specialization:"Communication engineering",
date:"20-Jul-2017",
appointment:"Regular",
cabin:"B-204"
}

};



/*==================================
        OPEN FACULTY POPUP
==================================*/


function openFaculty(id){


    let faculty = facultyData[id];


    if(!faculty){

        console.log("Faculty data not found");

        return;

    }



    document.getElementById("facultyImage").src = faculty.image;


    document.getElementById("facultyName").innerHTML = faculty.name;


    document.getElementById("facultyDesignation").innerHTML = faculty.designation;


    document.getElementById("facultyQualification").innerHTML = faculty.qualification;


    document.getElementById("facultySpecialization").innerHTML = faculty.specialization;


    document.getElementById("facultyCabin").innerHTML = faculty.cabin;


    document.getElementById("facultyPopup").style.display="flex";


}





/*==================================
        CLOSE FACULTY POPUP
==================================*/


function closeFaculty(){


    document.getElementById("facultyPopup").style.display="none";


}
/* Chatbot Functions */
function toggleChatbot() {
  const chatbot = document.getElementById("chatbot");
  chatbot.classList.toggle("active");
}

function handleKeyPress(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  const inputField = document.getElementById("userInput");
  const text = inputField.value.trim();
  if (text === "") return;
  
  appendMessage(text, "user");
  inputField.value = "";
  
  setTimeout(() => {
    const response = getBotResponse(text.toLowerCase());
    appendMessage(response, "bot");
  }, 500);
}

function appendMessage(text, sender) {
  const chatBox = document.getElementById("chatBox");
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", sender);
  messageElement.textContent = text;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {

    if (input.includes("hello") || input.includes("hi") || input.includes("greet") || input.includes("hey")) {
        return "Hello!How can I assist you with the ICT Department today?";

    } else if (input.includes("who are you") || input.includes("what are you")) {
        return "I am the ICT Department Assistant. I can help you with information about faculty, laboratories, the department, location, contact details, vision, mission, PEO and PSO.";

    } else if (input.includes("what can you do") || input.includes("help")) {
        return "I can provide information about faculty members, laboratories, the ICT Department, vision, mission, PEO, PSO, location and contact details.";

    } else if (input.includes("hod") || input.includes("head of department") || input.includes("head")) {
        return "The Head of Department is Ms. Kundan N. Vaghela. She has an M.E in EC and specializes in Industrial Electronics.";

    } else if (input.includes("kundan n vaghela") || input.includes("knv")) {
        return "Ms. Kundan N. Vaghela is the Head of Department. Her qualification is M.E EC and her specialization is Industrial Electronics.";

    } else if (input.includes("dr. alpesh sankaliya") || input.includes("ars")) {
        return "Dr. Alpesh R. Sankaliya is a Lecturer with a PhD in EC. His specialization is Communication Engineering and his cabin is B-106.";

    } else if (input.includes("mr. ashishkumar m. patel") || input.includes("amp")) {
        return "Mr. Ashishkumar M. Patel is a Lecturer with a B.E in EC. His specialization is EC and his cabin is B-102.";

    } else if (input.includes("jinal patel") || input.includes("jrp")) {
        return "Mrs. Jinal R. Patel is a Lecturer with a B.E in EC. Her specialization is EC and her cabin is B-101.";

    } else if (input.includes("gaurang gajjar") || input.includes("grg")) {
        return "Mr. Gaurang R. Gajjar is a Lecturer with an M.Tech in EC. His specialization is EC and his cabin is B-104.";

    } else if (input.includes("purvi patel") || input.includes("pap")) {
        return "Ms. Purvi A. Patel is a Lecturer with an M.E in CSE. Her specialization is Communication Systems Engineering and her cabin is B-106.";

    } else if (input.includes("parth patel") || input.includes("pdp")) {
        return "Mr. Parth D. Patel is a Lecturer with an M.E in EC. His specialization is Wireless Sensor Network and his cabin is B-101.";

    } else if (input.includes("faculty") || input.includes("teacher") || input.includes("staff")) {
        return "The ICT Department has experienced faculty members including Ms. Kundan N. Vaghela, Dr. Alpesh R. Sankaliya, Mr. Ashishkumar M. Patel, Mrs. Jinal R. Patel, Mr. Gaurang R. Gajjar, Ms. Kalpna R. Chaudhari, Ms. Purvi A. Patel, and many others. Visit the Faculty page for complete details.";

    } else if (input.includes("department") || input.includes("ict department")) {
        return "The Information and Communication Technology Department provides technical education through experienced faculty, modern laboratories, practical learning and industry-oriented activities.";

    } else if (input.includes("ict") || input.includes("full form")) {
        return "ICT stands for Information and Communication Technology.";

    } else if (input.includes("vision")) {
        return "The vision of the department is to become a leading department in Information and Communication Technology by providing quality education, promoting innovation, technical excellence, and preparing skilled professionals for society and industry.";

    } else if (input.includes("mission")) {
        return "The mission of the department is to provide quality technical education through experienced faculty, modern laboratories, practical learning, industry interaction, ethical values, and continuous skill development.";

    } else if (input.includes("peo")) {
        return "The PEOs are: 1. Apply technical knowledge to solve real-world ICT problems. 2. Develop professional skills and teamwork abilities. 3. Continue higher education and lifelong learning.";

    } else if (input.includes("pso")) {
        return "The PSOs are: 1. Develop software applications using modern programming tools. 2. Design, manage and maintain computer networks and ICT systems.";

    } else if (input.includes("lab") || input.includes("laboratory")) {
        return "Our department has Applied Electronics Lab (B-101), Communication Lab (B-102 A), Instrumentation Lab (B-102 B), Computer Lab-1 (B-103), Digital Electronics & Embedded System Lab (B-104), Project Lab (B-105), and Computer Lab-3 (B-106).";

    } else if (input.includes("b-106") || input.includes("computer lab 3") || input.includes("computer lab-3")) {
        return "Computer Lab-3 is located in B-106. It has 12 computers and a seating capacity of 30 students.";

    } else if (input.includes("b-105") || input.includes("project lab")) {
        return "The Project Lab is located in B-105. It has a seating capacity of 30 students and includes equipment such as Digital Storage Oscilloscope, Triple Power Supply, Digital IC Tester, PCB Shearing Machine, Hot Air Gun, Digital Multimeter and 4 Core i5 computers.";

    } else if (input.includes("b-104") || input.includes("embedded") || input.includes("digital electronics")) {
        return "The Digital Electronics & Embedded System Lab is located in B-104. It includes Digital Electronics Trainer, 8085 Microprocessor Kit, 8051 Microcontroller Kit, Development Boards, ADC, DAC, Ring Counter, Shift Counter and 7 Core i3 computers.";

    } else if (input.includes("b-102 a") || input.includes("communication lab")) {
        return "The Communication Lab is located in B-102 A and has a seating capacity of 20 students.";

    } else if (input.includes("b-102 b") || input.includes("instrumentation") || input.includes("measurement lab")) {
        return "The Electronics Instrumentation, Measurement & Industrial Electronics Lab is located in B-102 B and has a seating capacity of 20 students.";

    } else if (input.includes("b-101") || input.includes("applied electronics")) {
        return "The Applied Electronics Lab is located in B-101 and has a seating capacity of 20 students.";

    } else if (input.includes("how many lab") || input.includes("how many laboratories")) {
        return "The department currently lists seven laboratory sections: Applied Electronics, Communication, Instrumentation & Industrial Electronics, Computer Lab-1, Digital Electronics & Embedded System, Project Lab, and Computer Lab-3.";

    } else if (input.includes("location") || input.includes("address") || input.includes("where is the college") || input.includes("where is college")) {
        return "Government Polytechnic for Girls, Surat is located at Athwa Gate, Nanpura, Surat - 395 001, Gujarat, India.";

    } else if (input.includes("email") || input.includes("contact")) {
        return "You can contact the college through email at ggp-surat-dte@gujarat.gov.in.";

    } else if (input.includes("college name") || input.includes("name of college")) {
        return "The college name is Government Polytechnic for Girls, Surat.";

    } else if (input.includes("where is ict department?") || input.includes("ict department")) {
        return "The ICT Department is located in the college's B Building. It is equipped with modern laboratories and classrooms to facilitate technical education.";

    } else if (input.includes("show faculty") || input.includes("faculty page") || input.includes("open faculty")) {
        window.location.href = "faculty.html";
        return "Opening the Faculty page...";

    } else if (input.includes("show lab") || input.includes("laboratory page") || input.includes("open laboratory") || input.includes("open lab")) {
        window.location.href = "laboratory.html";
        return "Opening the Laboratory page...";

    } else if (input.includes("home page") || input.includes("go home")) {
        window.location.href = "index.html";
        return "Taking you back to the Home page...";

    } else {
        return "I'm sorry, I didn't quite understand that. You can ask me about our faculty, laboratories, HOD, department, vision, mission, PEO, PSO, college location or contact details.";
    }
}