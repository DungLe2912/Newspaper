import React, { Component } from 'react';

class MegaTreeItem extends Component {
    render() {
        return (
            <ul className="single-mega cn-col-4">
                <li id="tagidCul"><a>Culture</a></li>
                <li id="tagidPol"><a>Politics</a></li>
                <li id="tagidSci"><a>Science</a></li>
                <li id="tagidEco"><a>Economy</a></li>
                <li id="tagidMil"><a>Military</a></li>
            </ul>
        );
    }
}

export default MegaTreeItem;