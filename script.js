class Trello extends React.Component {

  clicker() {
    console.log(`This displays children passed: \n ${this.props.children}`);
    // for the above we need to open up the browser's Dev Tools => JS Console
    // the below shows up as alert, in case you cannot find the JS Console
    alert(this.props.children);
  }

  render() {
    return (
      <div className="note">
        <h2>{this.props.title} from {this.props.user}</h2>
        <p onClick={()=>this.clicker()}>{this.props.children}</p>
      </div>
    )
  }
}


function Layout(props) {
  return (
    <div>

      <Trello title="Note" user="John">
        <button className="btn-info">Edit / Save</button>  {/* <= anything here is children */}
      </Trello>

      <Trello title="Comment" user="Jane">
        children as dud-button text {/* <= anything here is children */}
      </Trello>

    </div>
  )
}

// You can note that in the case of the button, when it is passed
// as children, the console.log() and alert() show it up as [object Object]
// this is normal behaviour for some browsers. It is very difficult to log it out but possible.

const content = document.getElementById('content');

ReactDOM.render( <Layout />, content );