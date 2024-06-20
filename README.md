# reactjs-side-nav

## Overview
`reactjs-side-nav` is a simple and customizable side navigation component for React applications, built using `react-router-dom` v6. It provides a sleek and responsive navigation sidebar that integrates seamlessly with your React project, making it easy to navigate between different routes.

## Features
- **Easy Integration**: Quickly integrate the side navigation component into your existing React projects.
- **Customizable**: Easily customize the styles to match your application's design.
- **Responsive Design**: Works well on both desktop and mobile devices.
- **React Router v6**: Built with the latest version of `react-router-dom` for smooth and efficient routing.

## Installation
Install the package via npm:
```bash
npm install reactjs-side-nav
```

## Usage 
1. Import the SideNav component:
```bash
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from 'my-react-side-nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'; // Your custom styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <SideNav />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

```

2. Customize SideNav styles:
You can customize the styles by modifying the CSS file or by using inline styles.
Example CSS (SideNav.css):

```css
.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #111;
  padding-top: 20px;
}

.sidenav a {
  padding: 10px 15px;
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Links
- GitHub Repository: https://github.com/Eljethao/react-side-nav




