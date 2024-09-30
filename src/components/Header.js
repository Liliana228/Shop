import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import Order from './Order';

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
                {props.orders.map((el) => (
                  <Order key={el.id} item={el} />
                ))}
              </div>
            )}
        </div> 
        <div className='presentation'></div>
    </header>
    
  )
}

// export default Header