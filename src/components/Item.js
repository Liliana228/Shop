import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return ( //item я вывожу в компоненте Items item={el}, где el = запись из массива
      <div className='item'> 
          <img src={""} />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}</b>
          <div className='add-to-cart'>
            Add +
            </div>
      </div>
    )
  }
}

export default Item