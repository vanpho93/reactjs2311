var KhoaHoc = React.createClass(
  {
    render: function(){
      return(
        <div>
          <p>{this.props.ten}</p>
          <Gia>100.000 VND</Gia>
          <button>Xoa</button>
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
