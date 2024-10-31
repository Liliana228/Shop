import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import Order from './Order';

const showOrders = (props) => { /*мы задаем собственные методы */
  return (<div>
    {props.orders.map(el => (
                  <Order key={el.id} item={el} />
                ))}
  </div>)
}

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