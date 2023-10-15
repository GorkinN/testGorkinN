import React from 'react';
import './TVoptionItem.css';

export const TVoption = ({TVoption}) => {
    const {name, short, price, id} = TVoption;

    return (
        <li className='TVoptionItem' data-optionID={id}>
            <p>{name}</p>
            <p>{short}</p>
            <div>
                <p>Цена: {price}</p>
                <button>КУПИТЬ</button>
            </div>

        </li>
    );
}

