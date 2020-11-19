import React from 'react';
import Footer from './Footer';
import './app.css';
import Navbar from './Navbar';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './Projects';
import Products from './Products';
import MobileDev from './MobileDev';
import WebDev from './WebDev';


export default function App() {
    return (
        <Router>
            <div className='appContainer'>
                <div className="navHeaderContainer">
                    <Navbar />
                </div>
                <Switch>
                    <Route component={About} exact path='/' />
                    <Route component={About} path='/about' />
                    <Route component={Projects} path='/projects' />
                    <Route component={Products} path='/products' />
                    <Route component={MobileDev} path='/mobile' />
                    <Route component={WebDev} path="/web" />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}
