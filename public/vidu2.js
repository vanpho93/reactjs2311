var Box = React.createClass({
  getInitialState(){
    return {num: this.props.start}
  },
  add(){
    this.setState({num: this.state.num + this.props.step});
  },
  render(){
    return(
      <button onClick={this.add}>{this.state.num}</button>
    );
  }
})

ReactDOM.render(
  <Box start={9} step={2}/>,
  document.getElementById('root')
);
