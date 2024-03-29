import React from 'react';

class MenuConfig extends React.Component {
  render() {
    var options = this.props.options.map((element,index)=>{
      return <option value={element} key={index}>{element}</option>
    })
    return(
      <div className="menu">
        <p>Cargar una configuracion de la memoria local</p>
        <select name={this.props.name} value={this.props.value} onChange={this.props.handleChange}>
            {options}
        </select>
        <button onClick={this.props.onClick}>Cargar</button>
      </div>
    )
  };
}

export default MenuConfig;
