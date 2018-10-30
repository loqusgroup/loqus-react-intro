class Trello extends React.Component {

  edit() {
    console.log('Editing Note');
  }

  remove() {
    console.log('Remove Note');
  }

  render() {
    return (
      <div className="note">
        <div className="text">{this.props.children}</div>
        <button onClick={()=>this.edit()} className="btn-primary">Edit</button>
        <button onClick={()=>this.remove()} className="btn-danger">Remove</button>
      </div>
    )
  }
}

// the elements' class names used are directly from Twitter's bootstrap CSS styles

function Layout(props) {
  return (
    <div className="board">
      <Trello>This is note 1</Trello>
      <Trello>This is note 2</Trello>
    </div>
  )
}


const content = document.getElementById('content');

ReactDOM.render( <Layout />, content );