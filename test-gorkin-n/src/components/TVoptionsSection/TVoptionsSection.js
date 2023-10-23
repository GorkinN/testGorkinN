import React from 'react';
import { TVoptionsMap}  from '../common/TVOptionsData';
import { TVoption } from './TVoptionItem/TVoptionItem';
import "./TVoptionsSection.css";

export const TVoptionsSection = ({selectedChannels}) => {

    function formTVoptionsArr (TVoptionsMap, selectedChannelsIDs) {

        function formFilteredTVoptionsArr(TVoptionsMap, selectedChannelsIDs){

            function isFitWithSelectedChannels(TVoptionMapValue, selectedIDsArr){
                for (let i = 0; i<selectedIDsArr.length; i++) {
                    if ( !TVoptionMapValue.includes( +selectedIDsArr[i] ) ) {return false;}                                
                } 
            return true;                                                                              
            }

            const TVoptionsArr = [];

            for (let entry of TVoptionsMap.entries()) {
                if (isFitWithSelectedChannels(entry[1], selectedChannelsIDs)) {
                    TVoptionsArr.push(entry[0]);
                }
            }
            return TVoptionsArr;             
        }
        
        const TVoptionsArr = formFilteredTVoptionsArr(TVoptionsMap, selectedChannelsIDs);

        return TVoptionsArr.map(item => <TVoption TVoption={item} key = {`TVoptionKey:${item.id}`}></TVoption>);
    }

    const TVoptionsList = formTVoptionsArr(TVoptionsMap, selectedChannels);
    
    return (
        <section className='TVoptionsSection'>
            <h1 className='TVoptionsSection__caption'>Пакеты каналов</h1>
            <ul className='TVoptionsList'>
                {TVoptionsList.length>0 ? TVoptionsList : <p>Пакета с таким набором каналов, к сожалению, не существует</p>}
            </ul>                                                
        </section>
    );
}

