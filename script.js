class Trello extends React.Component {

  render() {
    return (
      <div className="note">
        <h2>{this.props.title} from {this.props.user}</h2>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

// so far we've always passed multiple components
// directly to ReactDOM, and although functional,
// Good Programming Practices for React dictates
// creating a Layout component to hold the needed components

function Layout(props) {
  return (
    <div>

      <Trello title="Note" user="John">
        <button className="btn-info">Edit / Save</button>
      </Trello>

      <Trello title="Comment" user="Jane">
        children as dud-button text
      </Trello>

    </div>
  )
}

const content = document.getElementById('content');

ReactDOM.render( <Layout />, content );