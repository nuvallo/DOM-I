const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Prepend and Append Function
function addToNav(text) {
  var newLink = document.createElement("a");
  var newAtt = document.createAttribute("href");
  var newStyle = document.createAttribute("style");
  newLink.setAttributeNode(newAtt);
  newAtt.value = "#";
  newLink.setAttributeNode(newStyle);
  newStyle.value = "color: green";
  newLink.textContent = text;
  return newLink;
}

// Selectors
const navbar = document.querySelector("nav");
const navLinks = document.querySelectorAll("a");
const headingOnes = document.querySelector("h1");
const button = document.querySelector("button");
const imageOne = document.getElementById("cta-img");
const headingFours = document.querySelectorAll("h4");
const paragraphs = document.querySelectorAll("p");
const imageTwo = document.getElementById("middle-img");

// Navigation bar
navbar.prepend(addToNav("Home"));
navbar.append(addToNav("Blogs"));
navLinks[0].textContent = siteContent.nav["nav-item-1"];
navLinks[1].textContent = siteContent.nav["nav-item-2"];
navLinks[2].textContent = siteContent.nav["nav-item-3"];
navLinks[3].textContent = siteContent.nav["nav-item-4"];
navLinks[4].textContent = siteContent.nav["nav-item-5"];
navLinks[5].textContent = siteContent.nav["nav-item-6"];
navLinks.forEach(links => {
  links.style.color = "green";
});

// Cta Section
headingOnes.textContent = siteContent.cta["h1"];
button.textContent = siteContent.cta["button"];
imageOne.src = siteContent.cta["img-src"];

// Main Section

// Feature
headingFours[0].textContent = siteContent["main-content"]["features-h4"];
paragraphs[0].textContent = siteContent["main-content"]["features-content"];

// About
headingFours[1].textContent = siteContent["main-content"]["about-h4"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];

// Services
headingFours[2].textContent = siteContent["main-content"]["services-h4"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];

// Product
headingFours[3].textContent = siteContent["main-content"]["product-h4"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];

// Vision
headingFours[4].textContent = siteContent["main-content"]["vision-h4"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];

// main section Image
imageTwo.src = siteContent["main-content"]["middle-img-src"];

// Contact section
headingFours[5].textContent = siteContent.contact["contact-h4"];
paragraphs[5].textContent = siteContent.contact.address;
paragraphs[6].textContent = siteContent.contact.phone;
paragraphs[7].textContent = siteContent.contact.email;

// Copyright
paragraphs[8].textContent = siteContent.footer.copyright;

// Stretch Goal (Event Listener)
function stretchButtonFunction() {
  var button = document.createElement("button");
  var styleAtt = document.createAttribute("style");
  styleAtt.value = "padding: 50px; margin: 5%;";
  button.setAttributeNode(styleAtt);
  button.textContent = "press Me!";
  function alertFunction() {
    var userName = prompt("Enter your name here");
    alert(`Hello ${userName.toUpperCase()}`);
  }
  button.addEventListener("click", alertFunction);
  return button;
}

const stretchButton = document.body.append(stretchButtonFunction());
