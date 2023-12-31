import React from 'react';
import './TVoptionItem.css';

export const TVoption = ({TVoption}) => {
    const {name, short, price} = TVoption;

    return (
        <li className='TVoptionItem'>
            <p className='TVoptionItem__title'>{name}</p>
            <p className='TVoptionItem__description'>{short}</p>
            <p className='TVoptionItem__price'>Цена: {price} руб./мес.</p>
            <button className='TVoptionItem__buy-button' onClick={()=>alert(`выбран пакет "${name}"`)}>выбрать</button>
        </li>
    );
}

