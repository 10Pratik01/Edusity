Edusity
Edusity is a modern, responsive college website designed to showcase institutional information, academic programs, and campus life. Built using React and Vite, it offers a fast and interactive user experience.

🚀 Features
      Responsive Design: Optimized for desktops, tablets, and mobile devices.
      Single Page Application (SPA): Seamless navigation without page reloads.
      Modern UI/UX: Clean and intuitive interface for enhanced user engagement.
      Fast Performance: Leveraging Vite for rapid development and optimized builds.

🛠️ Tech Stack
      Frontend: React, HTML5, CSS3
      Tooling: Vite, ESLint
      Form Handling: Web3Forms

📁 Project Structure
Edusity/
    ├── src/
    │   ├── assets/                   # Static files (images, icons, etc.)
    │   ├── components/
    │   │   ├── About/                # About section
    │   │   ├── Campus/               # Campus section
    │   │   ├── Contact/              # Contact form (Web3Forms)
    │   │   ├── Footer/               # Footer component
    │   │   ├── Testimonials/         # Testimonials section
    │   │   ├── Title/                # Title/header component
    │   │   ├── home_content/         # Home page content
    │   │   ├── navbar/               # Navigation bar
    │   │   └── programs/             # Programs offered section
    │   ├── index.css                 # Global styles
    │   └── main.jsx                  # App entry point
    ├── .gitignore
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── package-lock.json
    └── vite.config.js


📦 Getting Started
  Prerequisites
    Node.js (v14 or later)
    npm or yarn

  Installation
    1. Clone the repository:
        git clone https://github.com/10Pratik01/Edusity.git
      cd Edusity
    2. Install dependencies:
        npm install
    3. Start the development server:
        npm run dev

📝 Changing the Web3Forms Access Key (Contact Form)
      The contact form in Edusity uses Web3Forms for handling submissions.
      To use your own Web3Forms access key:
        1. Sign up at web3forms.com and generate your API key.
        2. Open the contact form component located at:
            src/components/Contact.jsx
        3. Replace the existing access_key value in the Contact.jsx:
            const onSubmit = async (event) => {
              event.preventDefault();
              setResult("Sending....");
              const formData = new FormData(event.target);
          
              formData.append("access_key", "Y15820ae1-25dc-4620-8ba8-fd8ab4ae779c");
          
              const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
              });
          
              const data = await response.json();
          
              if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
              } else {
                console.log("Error", data);
                setResult(data.message);
              }
          };
       4. Save and restart your development server if needed.          
 

📜 Scripts
    npm run dev – Launch dev server
    npm run build – Create a production build
    npm run preview – Preview the production build locally


