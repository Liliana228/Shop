import React, { Component } from 'react'
import { FiTrash, FiMinus, FiPlus } from "react-icons/fi";

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}$</b>
        
        <div className='count-picker'>
          <FiMinus 
            className='count-button' 
            onClick={() => this.props.onUpdateCount(this.props.item.id, -1)} 
          />
          <span className='count'>{this.props.item.count}</span>
          <FiPlus 
            className='count-button' 
            onClick={() => this.props.onUpdateCount(this.props.item.id, 1)} 
          />
        </div>

        <div className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}>
          <FiTrash />
        </div>
      </div>
    )
  }
}

export default Order