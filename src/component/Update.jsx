import React, { Component } from 'react'

export class Update extends Component {
    state = {
        title : this.props.title,
        desc : this.props.desc,
        id : this.props.id
    }
    onChangeHandler(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <form onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(Number(e.target.id.value), e.target.title.value,e.target.desc.value);
            }.bind(this)}>
                <input type="hidden" name="id" value={this.state.id}/>
                <p><input type="text" name="title" onChange={this.onChangeHandler.bind(this)} placeholder="Title" value={this.state.title} /></p>
                <p><textarea type="text" name="desc" onChange={this.onChangeHandler.bind(this)} placeholder="Description" value={this.state.desc}/></p>
                <p><input type="submit" value="Submit" /></p>
            </form>
        )
    }
}

export default Update
