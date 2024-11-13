import React, { Component } from 'react'
import { FiX } from "react-icons/fi";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div className='modal'>
        <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <h4>{this.props.item.price}$</h4>
          <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>
          Add +</div>
          <div className='x' onClick={() => this.props.onShowItem(this.props.item)}><FiX /></div>
          </div>
        </div>
    )
  }
}

export default ShowFullItem