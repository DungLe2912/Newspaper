import React, { Component } from 'react';
import MegaMeu from './MegaMenu/MegaMenu';
import CategoryItem from './Categories/CategoryItem';
class Navbar extends Component {
    render() {
        return (
            <div className="classynav">
                <ul>
                    <li className="active"><a><span className="fa fa-home" /><span> Home</span> </a></li>
                    <li><a><span className="fa fa-fire" /><span> Mega</span></a>
                        <MegaMeu />
                    </li>
                    <li><a><span className="fa fa-bars" /><span> Categories</span></a>
                        <ul id="hoverid" className="dropdown">
                           <CategoryItem/>
                        </ul>
                    </li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;