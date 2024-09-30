import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return ( //{this.props.items.map()} = метод (цикл), чтобы перебрать массив items
      <main> 
        {this.props.items.map(el => (
            <div>
                <Item key={el.id} item={el} onAdd={this.props.onAdd} />
            </div>
        ))} 
      </main>
    )
  }
}

export default Items