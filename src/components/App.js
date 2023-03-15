import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import './styles.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <h2 id="projects">Projects</h2>
        <ul>
          <li>
            <h3>ES6 Readme Generator</h3>
            <p>The ES6 Readme Generator is a project that allows developers to quickly and easily generate high-quality README files for their JavaScript projects using ES6 syntax. With this tool, users can input their project information, such as the project name, description, installation instructions, usage examples, and more, and the generator will create a professional-looking README file that can be included in their project repository.</p>
            <p>Links:</p>
            <ul>
              <li><a href="https://chrisgriffin2001.github.io/week-somthing-mod-11/">Deployed Version</a></li>
              <li><a href="https://github.com/chrisgriffin2001/week-somthing-mod-11.git">GitHub Repository</a></li>
            </ul>
            <img src="public/assets/Screenshot 2023-02-17 at 20.01.27.png" alt="Screenshot of project 1" />
          </li>
          <li>
            <h3>Team Profile Generator</h3>
            <p>The Team Profile Generator is a command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. The application uses Node.js, Inquirer package to prompt questions, and Jest to run tests.</p>
            <p>Links:</p>
            <ul>
              <li><a href="https://chrisgriffin2001.github.io/scaling-octo-funicular/">Deployed Version</a></li>
              <li><a href="https://github.com/chrisgriffin2001/scaling-octo-funicular.git">GitHub Repository</a></li>
            </ul>
            <img src="src/assets/Screenshot 2023-02-17 at 20.01.27.png" alt="GIF of project 2" />
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
