class Layout extends React.Component {
  constructor(props) {
    super(props);

    // we're flushing our preset comments
    this.state = {
      comments: []
    }
    
  }

  // uncomment the below lifecycle method
  // and check the result in the browser

  // componentDidMount() {
  //   this.add('Edit This Note');
  // }

  
  mapTrello() {
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

  add(txt) {
    const arr = this.state.comments;
    arr.push(txt);
    this.setState({ comments: arr });
  }
  
  render() {
    return (
      <div className="board">
        <button onClick={()=>this.add("Edit Your Note")} className="btn-info">
          Add New
        </button>
        <div className="comment">
          {
            this.mapTrello()
          }
        </div>
      </div>
    )
  }
}

// declaring on multiline is easier to read:
ReactDOM.render(
  <Layout />, 
  document.getElementById('content')
);