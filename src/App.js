import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import Card from './Card/Card.js';
// import Button from '@material-ui/core/Button';
// import Button from './Button/Button.js'
import './global.scss';

function App() {
  return (
    <div>
      <Card/>
    </div>
    // <Router>
    //   <div>
    //     <Link to="card">
    //       <Button />
    //     </Link>

    //     <Route path="/card/" component={Card} />

    //   </div>
    // </Router>
  );
}

export default App;
