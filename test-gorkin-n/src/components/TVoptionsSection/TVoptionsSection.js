import React from 'react';
import { TVoptionsMap}  from '../common/TVOptionsData';
import { TVoption } from './TVoptionItem/TVoptionItem';
import "./TVoptionsSection.css";


export const TVoptionsSection = (selectedChannels) => {

    function formTVoptionsArr (TVoptionsMap, selectedChannels) {
        const TVoptionsArr = Array.from(TVoptionsMap.keys());
        return TVoptionsArr.map(item => <TVoption TVoption={item} key = {`TVoptionKey:${item.id}`}></TVoption>);
    }

    const TVoptionsList = formTVoptionsArr(TVoptionsMap);
    
    return (
        <section className='TVoptionsSection'>
            <ul className='TVoptionsList'>
                {TVoptionsList}
            </ul>                                                
        </section>
    );
}

