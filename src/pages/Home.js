import React, { Component } from 'react';
import '../css/common.css'

export default class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <>
                <header><h2>Hi~👋🏼</h2></header>
                <div className='typed-container'>
                    <div className='typed-out'>
                        Welcome Demo Page.
                        This page is test page.
                        Enjoy!
                    </div>
                </div>
            </>    
        )
    }
}