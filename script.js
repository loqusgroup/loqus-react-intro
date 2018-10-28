// a simple stateless component
function Trello() {
  return (
    <div className="note">
      <h2>Note</h2>
      <h3>Edit/Remove</h3>
    </div>
  );
}

// for this component to become visible on the DOM,
// we must instruct React's DOM to do so:
ReactDOM.render(<Trello />, document.getElementById('content'));

// we can see that the ReactDOM render method takes 2 arguments:
// the 1st argument is the component/s to render, and the 2nd arg
// is to tell the DOM where it should render this component.

// MULTIPLE COMPONENTS:
// as will be discussed, React does NOT like adjacent components,
// but it can be easily dealt with by wrapping any components needed
// inside a "wrapper" - a <div> wrap

// let's comment-out line 13 above, in which we are calling
// the ReactDOM to render our Trello component,
// and then un-comment the lines below to call it:

// ReactDOM.render(
//   <div>
//     <Trello />
//     <Trello />
//   </div>,
//   document.getElementById('content')
// );