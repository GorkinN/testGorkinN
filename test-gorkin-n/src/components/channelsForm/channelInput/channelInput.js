import React from 'react';
import "./channelInput.css";
import styled from "styled-components";

export const ChannelInput = ({channel}) => {
    const {name, icon, id} = channel;
    return (
        <div className='channelInputBox'>
            <input 
                className="channelLabel__checkbox" 
                name="channelSelect" 
                type="checkbox"
                id={`'channelID: '${id}`}
            />
             <label htmlFor={`'channelID: '${id}`} className='channelLabel'> 
                {icon && <img className="channelLabel__icon" src={icon} alt="channel icon" height="50" width="60"></img>}
                <p>{name}</p>
              </label>  
        </div>
        
    );
}


