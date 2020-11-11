import React, { Component } from "react";
import Faq from "react-faq-component";
import data from "../data/commonQuetions"
 
const styles = {
    bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "#319EAF",
    rowContentColor: 'black',
    arrowColor: "black",
    rowContentPaddingLeft: '20px',
    rowContentPaddingRight: '50px',
    rowContentPaddingBottom: '10px',
};
 
const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};
 
export default class App extends Component {
    render() {
        return (
            <div>
                <Faq data={data} styles={styles} config={config} />
            </div>
        );
    }
}