class Trello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  edit() {
    // auto triggers/invokes `render`
    this.setState({ editing: true })
  }

  save() {
    // extracting the value from the textarea element:
    const val = this.refs.newText.value;

    // for now, let's just print it out:
    console.log("New Comment is:", val);

    // auto triggers/invokes `render`
    this.setState({ editing: false })
  }

  remove() {
    // so far this is just a "dummy" method
    console.log('Removing Note');
  }

  renderNormal() {
    // if state is at editing === false,
    // we display the below elements
    return (
      <div className="note">
        <div className="text">{this.props.children}</div>
        <button onClick={()=>this.edit()} className="btn-primary">Edit</button>
        <button onClick={()=>this.remove()} className="btn-danger">Remove</button>
      </div>
    )
  }

  renderForm() {
    // if state is at editing === true,
    // we display the below elements
    // note how we've added a ref to the textarea
    return (
      <div className="note">
        <textarea defaultValue={this.props.children} ref="newText"></textarea>
        <button onClick={()=>this.save()} className="btn-success">Save</button>
      </div>
    )
  }

  render() {
    // note the conditional render invoking
    // the respective method, thus returning
    // their respective elements
    if(this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderNormal();
    }
  }

}

// the simple Layout skeleton
// to append multiple components on
function Layout(props) {
  return (
    <div className="board">
      <Trello>Note 1</Trello>
      <Trello>Note 2</Trello>
    </div>
  )
}

// finally calling React's DOM to render
ReactDOM.render(<Layout />, document.getElementById('content'));