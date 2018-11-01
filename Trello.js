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

  clear(evt) {
    this.refs.newText.value = '';
    evt.target.closest('div').firstElementChild.focus();
  }

  save(i) {
    const val = this.refs.newText.value;
    console.log(`Updating Comment ${i} with: ${val}`);
    this.props.updateToTrello(val,i)
    this.setState({ editing: false })
  }

  remove(i) {
    console.log('Removing Trello', i);
    this.props.removeToTrello(i);
  }

  renderNormal() {
    return (
      <div className="note">
        <div className="text">{this.props.children}</div>
        <button onClick={()=>this.edit()} className="btn-primary">Edit</button>
        <button onClick={()=>this.remove(this.props.index)} className="btn-danger">Remove</button>
      </div>
    )
  }

  renderForm() {
    return (
      <div className="note">
        <textarea defaultValue={this.props.children} ref="newText"></textarea>
        <button onClick={()=>this.save(this.props.index)} className="btn-success">Save</button>
        <button onClick={(e)=>this.clear(e)} className="btn-default">Clear</button>
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