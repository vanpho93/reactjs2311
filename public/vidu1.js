var KhoaHoc = React.createClass(
  {
    add(){
      this.setState({soHocVien: this.state.soHocVien + 1});
    },
    getInitialState(){
      return {soHocVien: this.props.hocVien};
    },
    show(){
      var {ten, gia} = this.props;
      alert(ten + ': ' + gia);
    },
    render: function(){
      var {ten, gia} = this.props;
      var {soHocVien} = this.state;
      return(
        <div className="div-khoa-hoc">
          <p>{ten}</p>
          <Gia>{gia}</Gia>
          <p>{soHocVien}</p>
          <button onClick={this.show}>Show</button>
          <button onClick={this.add}>Add</button>
        </div>
      )
    }
  }
);

var Gia = React.createClass({
  render(){
    return (
      <p>{this.props.children}</p>
    )
  }
})
/*
  Tao component Gia
  Hien thi ra gia 300.000 VND
  g="300000 VND"
*/
ReactDOM.render(
  <div>
    <KhoaHoc ten="NodeJS" gia="100.000 VND" hocVien={1}/>
    <KhoaHoc ten="ReactJS" gia="400.000 VND" hocVien={1}/>
    <KhoaHoc ten="Android" gia="200.000 VND" hocVien={1}/>
  </div>,
  document.getElementById('root')
);
