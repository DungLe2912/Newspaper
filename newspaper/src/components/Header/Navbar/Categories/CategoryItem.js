import React, { Component } from 'react';

class CategoryItem extends Component {
    render() {
        return (
            <React.Fragment>
                <li><a >Culture</a>
                    <ul className="dropdown">
                        <li><a>Sports</a></li>
                        <li><a>Healthy</a></li>
                        <li><a>Music</a></li>
                    </ul>
                </li>
                <li><a >Politics</a>
                    <ul className="dropdown">
                        <li><a>Diplomatic</a></li>
                        <li><a>Vote</a></li>
                        <li><a>Hot news</a></li>
                    </ul>
                </li>
                <li><a >Science</a>
                    <ul className="dropdown">
                        <li><a>Invention</a></li>
                        <li><a>Application</a></li>
                        <li><a>Research</a></li>
                    </ul>
                </li>
                <li><a >Economy</a>
                    <ul className="dropdown">
                        <li><a>Finance</a></li>
                        <li><a>Consumption</a></li>
                        <li><a>Stock Exchange</a></li>
                    </ul>
                </li>
                <li><a >Military</a>
                    <ul className="dropdown">
                        <li><a>Hot news</a></li>
                        <li><a>Weapon Contract</a></li>
                        <li><a>Armed Coflict</a></li>
                    </ul>
                </li>
            </React.Fragment>
        );
    }
}

export default CategoryItem;