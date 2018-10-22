import React, { Component } from "react";
import { ContainerBasedCounter, RecomposeBasedCounter } from "./components";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Class Vs Recompose</h1>
                    <p>Creating components using classes and recompose HOCs</p>
                </header>
                <main className="App-main">
                    <ContainerBasedCounter />
                    <RecomposeBasedCounter />
                </main>
            </div>
        );
    }
}

export default App;
