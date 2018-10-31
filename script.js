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

// changing our Layout from stateless function
// to a stateful React Component
class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        "Note 1",
        "Note 2",
        "Note 3"
      ]
    }

  }
  
  render() {
    // we are going to map over
    // the state in Layout
    // and create the necessary Trellos
    return (
      <div className="board">
        {
          this.state.comments.map(( text,i ) => ( <Trello key={i}>{text}</Trello> ))
        }
      </div>
    )
  }
}

// finally calling React's DOM to render
ReactDOM.render(<Layout />, document.getElementById('content'));