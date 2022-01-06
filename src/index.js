import React from "react"
import ReactDom from "react-dom";
import CounterAPP from "./CounterApp";
import './index.css'

const root = document.querySelector('#root');

ReactDom.render(<CounterAPP value={ 0 } />, root)