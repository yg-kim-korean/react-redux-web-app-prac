import React, { Component } from 'react'

export class Control extends Component {
    render() {
        return (
            <ul>
                <li><a href='create' onClick={function(e){
                    e.preventDefault();
                    this.props.onClick('CREATE');
                }.bind(this)}>create</a></li>
                <li><a href='update'  onClick={function(e){
                    e.preventDefault();
                    this.props.onClick('UPDATE');
                }.bind(this)}>update</a></li>
                <li><input type="button" value="delete"  onClick={function(e){
                    e.preventDefault();
                    this.props.onClick('DELETE_PROCESS');
                }.bind(this)}/></li>
            </ul>
        )
    }
}

export default Control