class Counter extends React.Component {
  // to store state properly, we need to call
  // the class constructor and super
  constructor(props) {
    super(props);

    // initializing state with key num / value 0
    this.state = {
      num: 0
    }
  }

  increase() {
    // .setState is a method in React
    // that allows us to directly mutate the state properties
    // here we are overwriting `num` by adding 1
    this.setState({ num: this.state.num + 1 })
  }

  decrease() {
    // here we are overwriting `num` by decreasing 1
    this.setState({ num: this.state.num - 1 })
  }

  render() {
    return (
      <div className="note">
        <div className="text">State is holding: <strong>{this.state.num}</strong></div>
        <button onClick={()=>this.increase()} className="btn-primary">Increase</button>
        <button onClick={()=>this.decrease()} className="btn-danger">Decrease</button>
      </div>
    )
  }
}

// since we're only using 1 component, there is
// no need for a Layout "skeleton"


const content = document.getElementById('content');

ReactDOM.render( <Counter />, content );