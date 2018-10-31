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

  mapTrello(txt, iter) {
    // instead of having a long
    // line in our `render` method
    // we created this separate callback
    // both have the same exact functionality/result
    return (
      <Trello 
        key={iter}
      >
        {txt}
      </Trello>
    )
  }
  
  render() {
    return (
      <div className="board">
        {
          this.state.comments.map(this.mapTrello)
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