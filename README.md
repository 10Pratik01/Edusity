<h1>Edusity</h1>
Edusity is a modern, responsive college website designed to showcase institutional information, academic programs, and campus life. Built using React and Vite, it offers a fast and interactive user experience.<br>

<h2>🚀 Features</h2>
<ol>
      <li>Responsive Design: Optimized for desktops, tablets, and mobile devices.</li>
      <li>Single Page Application (SPA): Seamless navigation without page reloads.</li>
      <li>Modern UI/UX: Clean and intuitive interface for enhanced user engagement.</li>
      <li>Fast Performance: Leveraging Vite for rapid development and optimized builds.</li>
</ol>


<h2>🛠️ Tech Stack</h2>  
<ol>
      <li>Frontend: React, HTML5, CSS3</li>
      <li>Tooling: Vite, ESLint</li>
      <li>Form Handling: Web3Forms</li>
</ol>

<h2>📁 Project Structure</h2> 
Edusity/ <br> 
    ├── src/ <br> 
    │   ├── assets/                   # Static files (images, icons, etc.) <br> 
    │   ├── components/
    │   │   ├── About/                # About section<br>
    │   │   ├── Campus/               # Campus section<br>
    │   │   ├── Contact/              # Contact form (Web3Forms)<br>
    │   │   ├── Footer/               # Footer component<br>
    │   │   ├── Testimonials/         # Testimonials section<br>
    │   │   ├── Title/                # Title/header component<br>
    │   │   ├── home_content/         # Home page content<br>
    │   │   ├── navbar/               # Navigation bar<br>
    │   │   └── programs/             # Programs offered section<br>
    │   ├── index.css                 # Global styles<br>
    │   └── main.jsx                  # App entry point<br>
    ├── .gitignore<br>
    ├── README.md<br>
    ├── eslint.config.js<br>
    ├── index.html<br>
    ├── package.json<br>
    ├── package-lock.json<br>
    └── vite.config.js<br>


<h2> 📦Getting Started </h2>
  <h3>Prerequisites</h3>
    <ul>
          <li> Node.js (v14 or later)</li>
          <li>npm or yarn</li>
    </ul>

  <h3>Installation</h3>
<ol>
      <li>Clone the repository: <br> 
            <ul>
                  <li>git clone https://github.com/10Pratik01/Edusity.git</li>
                  <li>cd Edusity</li>
            </ul>
      </li>
      <li>Install dependencies: <br> 
            <ul>
                  <li> npm install</li>
            </ul>
      </li>
      <li>Start the development server: <br> 
            <ul>
                  <li>npm run dev</li>
            </ul>
      </li>
      
</ol>

<h2>📝 Changing the Web3Forms Access Key (Contact Form)</h2>
      The contact form in Edusity uses Web3Forms for handling submissions.<br>
      To use your own Web3Forms access key:<br>
      <ol>
            <li>Sign up at web3forms.com and generate your API key.</li>
            <li> Open the contact form component located at:
                  <ul>
                        <li>src/components/Contact.jsx</li>
                  </ul>
            </li>
            <li>
                  Replace the existing access_key value in the Contact.jsx: <br>
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
            </li>
            <li>
            Save and restart your development server if needed.
            </li>
      </ol>     
 

<h2>📜 Scripts</h2>
      <ul>
          <li> npm run dev – Launch dev server</li>
          <li>npm run build – Create a production build</li>
          <li> npm run preview – Preview the production build locally</li>
      </ul>

