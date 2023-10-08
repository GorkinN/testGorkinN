import React from 'react';
import "./channelInput.css"

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
             <label for={`'channelID: '${id}`} className='channelLabel'> 
                {icon && <img className="channelLabel__icon" src={icon} alt="channel icon" height="50px" width="50px"></img>}
                <p>{name}</p>
              </label>  
        </div>
        
    );
}


