# QR Code Generator

A modern and responsive QR Code Generator built using HTML, CSS, and JavaScript. This application allows users to instantly generate QR codes for text, URLs, contact information, and other data formats. Users can also download generated QR codes as PNG images for future use.

---

## Project Overview

QR codes have become an essential part of modern digital communication. They are widely used for sharing websites, contact information, payment links, event registrations, Wi-Fi credentials, and much more.

This project demonstrates how QR codes can be generated dynamically in a web browser using JavaScript and a QR code generation library.

The application provides a clean user interface, real-time QR code generation, and download functionality, making it both practical and user-friendly.

---

## Features

### QR Code Generation

* Generate QR codes instantly
* Supports text and URLs
* Real-time QR code rendering

### Download Functionality

* Download generated QR codes as PNG images
* High-quality QR output

### User-Friendly Interface

* Clean and responsive design
* Simple and intuitive layout
* Mobile-friendly interface

### Input Validation

* Prevents empty QR code generation
* Displays helpful messages for users

### Keyboard Support

* Generate QR code using the Enter key
* Faster user interaction

### QR Code Management

* Clear existing QR codes
* Generate new QR codes without refreshing the page

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Library

* QRCode.js

---

## Project Structure

```text
QR-Code-Generator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How It Works

### Step 1

The user enters text, a website URL, or any supported data into the input field.

### Step 2

JavaScript validates the input and sends the data to the QRCode.js library.

### Step 3

The library converts the data into a QR code pattern.

### Step 4

The QR code is displayed instantly on the webpage.

### Step 5

Users can download the generated QR code as a PNG image.

---

## Example Use Cases

### Website Sharing

Input:

```text
https://github.com
```

Result:

* Opens the GitHub website when scanned.

---

### LinkedIn Profile Sharing

Input:

```text
https://linkedin.com/in/your-profile
```

Result:

* Opens the LinkedIn profile instantly.

---

### WhatsApp Contact

Input:

```text
https://wa.me/919999999999
```

Result:

* Opens a WhatsApp chat window.

---

### Email Sharing

Input:

```text
mailto:example@gmail.com
```

Result:

* Opens the default email application.

---

### Phone Number

Input:

```text
tel:+919999999999
```

Result:

* Opens the phone dialer.

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/gunjan-kumar-sah/QR-Code-Generator.git
```

### Navigate to the Project Directory

```bash
cd QR-Code-Generator
```

### Open the Project

Open the `index.html` file in your browser.

No additional setup is required.

---

## Learning Outcomes

This project helped in understanding:

* DOM Manipulation
* Event Handling
* JavaScript Functions
* External Library Integration
* Input Validation
* Responsive Web Design
* Client-Side File Downloads

---

## Future Enhancements

The following features can be added in future versions:

* Dark Mode
* QR Code Color Customization
* Logo Inside QR Code
* QR History Using Local Storage
* SVG Download Support
* Wi-Fi QR Code Generator
* Contact Card QR Generator
* Email QR Generator
* WhatsApp QR Generator
* Theme Customization

---

## Benefits of QR Codes

* Faster information sharing
* Contactless communication
* Easy website access
* Digital business cards
* Event registration systems
* Product information sharing
* Marketing and advertising

---

## Author

Gunjan Kumar Sah

B.Tech Computer Science Engineering Student

Interests:

* Web Development
* Cyber Security
* Ethical Hacking
* Artificial Intelligence

---

## Conclusion

The QR Code Generator is a practical web application that demonstrates the power of JavaScript and modern web technologies. It provides users with a quick and efficient way to generate and download QR codes for various real-world applications. This project also serves as an excellent learning resource for developers interested in frontend development, DOM manipulation, and third-party library integration.
