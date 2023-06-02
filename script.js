var subjects = [
    {
      title: "INFORMATION MANAGEMENT",
      description:
        "Information management is an emerging field that is concerned with: The infrastructure used to collect, manage, preserve, store and deliver information."
    },
    {
      title: "NETWORKING 1",
      description:
        "Computer networking refers to interconnected computing devices that can exchange data and share resources with each other. These networked devices use a system of rules, called communications protocols, to transmit information over physical or wireless technologies."
    },
    {
      title: "WEB SYSTEMS AND TECHNOLOGIES",
      description:
        "Web information system, or web-based information system, is an information system that uses Internet web technologies to deliver information and services, to users or other information systems/applications."
    },
    {
      title: "SYSTEMS INTEGRATION AND ARCHITECTURE 1",
      description:
        "The Systems Integration Architecture provides a bridge between the heterogeneous operational applications and platforms. This architecture ties together the mix of platforms, operating systems, transports, and applications."
    }
  ];
  
  var accordionContainer = document.getElementById("accordion-container");
  
  subjects.forEach(function(subject) {
    var button = document.createElement("button");
    button.setAttribute("class", "accordion");
    button.textContent = subject.title;
  
    var panel = document.createElement("div");
    panel.setAttribute("class", "panel");
    panel.innerHTML = "<p>" + subject.description + "</p>";
  
    accordionContainer.appendChild(button);
    accordionContainer.appendChild(panel);
  });
  
  var accordions = document.getElementsByClassName("accordion");
  
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  