var KhoaHoc = React.createClass(
  {
    show(){
      var {ten, gia} = this.props;
      alert(ten + ': ' + gia);
    },
    render: function(){
      var {ten, gia} = this.props;
      return(
        <div className="div-khoa-hoc">
          <p>{ten}</p>
          <Gia>{gia}</Gia>
          <button onClick={this.show}>Show</button>
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
    <KhoaHoc ten="NodeJS" gia="100.000 VND"/>
    <KhoaHoc ten="ReactJS" gia="400.000 VND"/>
    <KhoaHoc ten="Android" gia="200.000 VND"/>
  </div>,
  document.getElementById('root')
);
