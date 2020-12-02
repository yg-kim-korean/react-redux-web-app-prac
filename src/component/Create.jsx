import React, { Component } from 'react'

export class Create extends Component {
    render() {
        return (
            <form onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(e.target.title.value,e.target.desc.value);
            }.bind(this)}>
                <p><input type="text" name="title" placeholder="Title" /></p>
                <p><textarea type="text" name="desc" placeholder="Description" /></p>
                <p><input type="submit" value="Submit" /></p>
            </form>
        )
    }
}

export default Create