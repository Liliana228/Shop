import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Item from "./components/Item";

class App extends React.Component {
  constructor(props) { //props = некие параметры конструктора
    super(props) //Обязательная строка
    this.state = {
      items: [
        {
            id: 1,
            title: "Стул 1",
            img: '',
            desc: 'Стул для кухни',
            category: 'chairs',
            price: '49.99'
          },
          {
            id: 1,
            title: "Стул 2",
            img: '',
            desc: 'Стул для кухни',
            category: 'chairs',
            price: '44.99'
          },
          {
            id: 1,
            title: "Стол",
            img: '',
            desc: 'Кухонный стол деревянный',
            category: 'tables',
            price: '54.99'
          },
          {
            id: 1,
            title: "Диван",
            img: '',
            desc: 'Диван вилюровый',
            category: 'sofas',
            price: '99.99'
          }

      ]
    }
  }
  render () {
  return ( //items={this.state.items} = вместе с компонентом Items передаем еще и свойства
    <div className="wrapper">
      <Header />
      <Items items={this.state.items}/>
      <Footer />
    </div>
    )
  }
}

export default App;
