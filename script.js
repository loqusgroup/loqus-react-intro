// let's start by "translating" the below component
// which now we've commented-out
// function Trello() {
//   return (
//     <div className="note">
//       <h2>Note</h2>
//       <h3>Edit/Remove</h3>
//     </div>
//   );
// }

class Trello extends React.Component {

  render() {
    return (
      <div className="note">
        <h2>{this.props.title} from {this.props.user}</h2>
        <h3>Edit/Remove</h3> 
      </div>
    )
  }
}

ReactDOM.render( 
  <Trello title="Note" user="Joe" />,
  document.getElementById('content') )

// after comment-out the abouve ReactDOM,
// uncomment the below and look at the browser.

// ReactDOM.render(
//   <div>
//     <Trello title="Note" user="Joe" />
//     <Trello title="Comment" user="Neil" />
//   </div>,
//   document.getElementById('content') )