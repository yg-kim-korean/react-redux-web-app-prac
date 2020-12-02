import React, { Component } from 'react';
import {connect} from 'react-redux';
class Header extends Component {
    render() {
        return (
            
            <header>
                <a href="#welcome" onClick={function(){
                        this.props.onClick();
                        }.bind(this)}><h1>Web</h1></a>
                        World Wide Web
            </header>
            
        )
    }
}

//redux
export default connect(null,
    function(dispatch){
        return{
            onClick:function(){
                dispatch({type:'WELCOME', mode:'WELCOME'})
            }
        
        }
        
    })(Header);
