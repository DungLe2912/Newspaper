import React, { Component } from 'react';
import MegaTreeItem from './MegaTree/MegaTreeItem';
import MegaItem from './MegaItem';
class MegaMenu extends Component {
    render() {
        return (
            <div className="megamenu">
              <MegaTreeItem/>
              <MegaItem/>           
          </div>
        );
    }
}

export default MegaMenu;