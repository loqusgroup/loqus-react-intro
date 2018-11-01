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

  // as pointed out in the previous branch,
  // now that we need to also pass methods as props,
  // the `map` in `render` would need passing arguments.
  // You can see the commented line 53 in the `render` method,
  // how it would need to be declared, but we're 
  // changing this method completely so the `map` method
  // is invoked within:
  mapTrello(txt, iter) {
    return this.state.comments.map( (txt,iter) => (
      <Trello 
        key={iter}
        index={iter}
        updateToTrello={ (a,b) => this.updateTrello(a,b) }
        removeToTrello={ (i) => this.removeTrello(i) }
      >
        {txt}
      </Trello>
    ))
  }

  removeTrello(i) {
    console.log('Removing Note:', i, 'from Layout');
    const arr = this.state.comments;
    arr.splice(i, 1);
    this.setState({ comments: arr });
  }

  updateTrello(newText, i) {
    console.log('Saved Trello:', i);
    const arr = this.state.comments;
    arr[i] = newText;
    this.setState({ comments: arr });
  }
  
  render() {
    return (
      <div className="board">
        {
          // this.state.comments.map((a,b)=>this.mapTrello(a,b))
          this.mapTrello()
        }
      </div>
    )
  }
}

// declaring on multiline is easier to read:
ReactDOM.render(
  <Layout />, 
  document.getElementById('content')
);