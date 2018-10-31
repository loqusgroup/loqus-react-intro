class Trello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  edit() {
    this.setState({ editing: true })
  }

  save() {
    const val = this.refs.newText.value;
    console.log("New Comment is:", val);
    this.setState({ editing: false })
  }

  remove() {
    console.log('Removing Note');
  }

  renderNormal() {
    return (
      <div className="note">
        <div className="text">{this.props.children}</div>
        <button onClick={()=>this.edit()} className="btn-primary">Edit</button>
        <button onClick={()=>this.remove()} className="btn-danger">Remove</button>
      </div>
    )
  }

  renderForm() {
    return (
      <div className="note">
        <textarea defaultValue={this.props.children} ref="newText"></textarea>
        <button onClick={()=>this.save()} className="btn-success">Save</button>
      </div>
    )
  }

  render() {
    if(this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderNormal();
    }
  }

}