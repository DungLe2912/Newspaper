import React, { Component } from 'react';

class Preloader extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            isShowing:true
        }
    }
  componentWillMount(){
    setTimeout(() => this.setState({isShowing:false}), 2000);
  }
    render() {
        if(this.state.isShowing){
            return (
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="spinner">
                        <div className="double-bounce1" />
                        <div className="double-bounce2" />
                    </div>
                </div>
            );
        }
        return null;
    }
}

export default Preloader;