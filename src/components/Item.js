import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return ( //item я вывожу в компоненте Items item={el}, где el = запись из массива
      <div className='item'> 
          <img src={"./img/" + this.props.item.img} />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <h4>{this.props.item.price}$</h4>
          <div className='add-to-cart'
          onClick={() => this.props.onAdd(this.props.item)}>
            Add +
            </div>
      </div>
    )
  }
}

export default Item