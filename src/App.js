import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           pageName:'Home'
        }
    }
    changeMainPage = (page)=>
    {
        if (this.state.pageName !== page)
            this.setState({pageName: page}) ;
    }

    render() {
        return (
            <div className="container-fluid">
                <Header changePage={this.changeMainPage}/>
                <Main pageToRender={this.state.pageName}/>
                <Footer changePage={this.changeMainPage} pageToRender={this.state.pageName}/>
            </div>
        );
    }
}

export default App;



