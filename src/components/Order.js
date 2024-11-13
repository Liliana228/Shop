import React, { Component } from 'react'
import { FiTrash } from "react-icons/fi";

export class Order extends Component {
  render() {
    return (
      <div className='item' onClick={() => this.props.onDelete(this.props.item.id)}>
        <img src={"./img/" + this.props.item.img} />
          <h2>{this.props.item.title}</h2>
          <h4>{this.props.item.price}$</h4>
          <div className='delete-icon'>
            <FiTrash />
          </div>
      </div>
    )
  }
}

export default Order