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

// Navigation bar
const nav = document.querySelectorAll("a");
nav[0].textContent = "Services";
nav[1].textContent = "Product";
nav[2].textContent = "Vision";
nav[3].textContent = "Features";
nav[4].textContent = "About";
nav[5].textContent = "Contact";

// CTA Section
const headingOne = document.querySelector("h1");
headingOne.textContent = "Dom is awesome";

const button = document.querySelector("button");
button.textContent = "Get Started";

const image = document.getElementById("cta-img");
image.src = "img/header-img.png";

// Main Content Section
const headingFours = document.querySelectorAll("h4");
headingFours[0].textContent = "Features";
headingFours[1].textContent = "About";

const paragraphs = document.querySelectorAll("p");
paragraphs[0].textContent = `Features content elementum magna eros, ac posuere elvit tempus et. 
Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu
ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;
paragraphs[1].textContent = ` About content elementum magna eros, ac posuere elvit tempus et.
Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu
ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;

// Second Image
const imageTwo = document.getElementById("middle-img");
imageTwo.src = "img/mid-page-accent.jpg";

// Buttom Content
headingFours[2].textContent = "Services";
paragraphs[2].textContent = ` Services content elementum magna eros, ac posuere elvit tempus et.
Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu
ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;

headingFours[3].textContent = "Product";
paragraphs[3].textContent = ` Product content elementum magna eros, ac posuere elvit tempus et.
Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu
ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;

headingFours[4].textContent = "Vision";
paragraphs[4].textContent = ` Vision content elementum magna eros, ac posuere elvit tempus et.
Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu
ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;

headingFours[5].textContent = "Contact";
paragraphs[5].textContent = `123 Way 456 Street Somewhere, USA`;
