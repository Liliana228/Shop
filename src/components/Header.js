import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import Order from './Order';

const showOrders = (props) => { /*мы задаем собственные методы */
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price)) //Чтобы строки прайса превратить в цифры, обращаемся к классу Number и методу parseFloat
  return (<div>
    {props.orders.map(el => (
                  <Order onDelete={props.onDelete} key={el.id} item={el} />
                ))}
        <p className='summa'>Сумма к оплате: {new Intl.NumberFormat().format(summa)}$</p> 
  </div>)
}
//Intl.NumberFormat().format(summa) = для того, чтобы округлить до 2х знаков после запятой

const showNothing = () => {
  return( <div className='empty'>
    <h2>Товары пока не добавлены</h2>
  </div>
  )
}

export default function Header(props) {
//cartOpen = состояние, setCartOpen = функция
  let [cartOpen, setCartOpen] = useState(false)  //false = значение по умолчанию

  return ( /*Методом ul мы создаем ненумерованный список
    li = пункт списка */
    <header> 
        <div>
            <span className='logo'>
                House Staff
            </span>
            <ul className='nav'> 
                <li>О нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul> 
            <div onClick={() => setCartOpen(cartOpen = !cartOpen)}
            className={`shop-cart-button ${cartOpen && 'active'}`} //ClassName меняется в зависимости от состояния cartOpen. &&= если cartOpen = true
            > 
              <FiShoppingCart />
            </div>

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ? showOrders(props) : showNothing()} 
              </div>
            )}
        </div> 
        <div className='presentation'></div> 
    </header>
    /* ? если условие положительное, : = то
                showNothing & showOrders = мои собственные методы */
  )
}

// export default Header