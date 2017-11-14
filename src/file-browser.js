import React, { Component } from 'react';


export class FileBrowser extends Component {
  hiddenInput

  onClick() {
    this.hiddenInput.click()
  }

  render() {
    let style ={
      display: 'none'
    }
    return <div onClick={this.onClick.bind(this)}>
    <input type="file" 
      multiple
      style={style} 
      ref={(el) => { this.hiddenInput = el } }
      onChange={this.props.onSelect}
    />
    {this.props.children}
    </div>
  }
}