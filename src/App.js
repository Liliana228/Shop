import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Item from "./components/Item";

class App extends React.Component {
  constructor(props) { //props = некие параметры конструктора
    super(props) //Обязательная строка
    this.state = {
      orders: [],
      items: [
        {
            id: 1,
            title: "Стул серый",
            img: 'chair-gray.jpg',
            desc: 'Стул для кухни',
            category: 'chairs',
            price: '49.99'
          },
          {
            id: 2,
            title: "Стул бежевый",
            img: 'chair-b.jpg',
            desc: 'Стул для кухни',
            category: 'chairs',
            price: '44.99'
          },
          {
            id: 3,
            title: "Стол Aestetic",
            img: 'table.jpg',
            desc: 'Кухонный стол деревянный',
            category: 'tables',
            price: '94.99'
          },
          {
            id: 4,
            title: "Диван серый",
            img: 'sofa.jpg',
            desc: 'Диван вилюровый на ножках',
            category: 'sofas',
            price: '199.99'
          },
          {
            id: 5,
            title: "Лампа настольная",
            img: 'lamp.jpg',
            desc: 'Настольный торшер минималистичный',
            category: 'lamps',
            price: '99.99'
          }

      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render () {
  return ( //items={this.state.items} = вместе с компонентом Items передаем еще и свойства
    <div className="wrapper">
      <Header />
      <Items items={this.state.items} onAdd={this.addToOrder}/> 
      <Footer />
    </div>
    )
  }

  addToOrder(item) {
    this.setState({orders: [...this.state.orders, item]}, () => {
      console.log(this.state.orders)
    })
  }
}

export default App;
