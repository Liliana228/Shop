import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Item from "./components/Item";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) { //props = некие параметры или состояния конструктора
    super(props) //Обязательная строка
    this.state = {
      orders: [],
      currentItems: [],
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
            price: '349.99'
          },
          {
            id: 5,
            title: "Лампа настольная",
            img: 'lamp.jpg',
            desc: 'Настольный торшер минималистичный',
            category: 'lamps',
            price: '99.99'
          }

      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items //изначально в массиве currentItems мы помещаем все элементы из массива items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render () {
  return ( //items={this.state.items} = вместе с компонентом Items передаем еще и свойства
    // orders={this.state.orders} = свойство {значение}
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Categories chooseCategory={this.chooseCategory} />
      <Items 
      onShowItem={this.onShowItem} 
      items={this.state.currentItems} 
      onAdd={this.addToOrder} /> 

      {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem} />}
      <Footer />
    </div>
    )
  }

  onShowItem(item) { //при выполнении этой функции мы будеи брать элемент item и выводить этот элемент в состоянии fullItem
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState (
  {currentItems: this.state.items.filter(el => el.category === category)}
  )}

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)}) //в новый массив помещаем все элементы, за исключением элемента, у которого id совпадает с тем id, что сюда передается
  }

  addToOrder(item) {
    let isInArray = false //создали переменную isInArray
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray) //"!" = isInArray = true
    this.setState({orders: [...this.state.orders, item]} )
  }
}

export default App;
