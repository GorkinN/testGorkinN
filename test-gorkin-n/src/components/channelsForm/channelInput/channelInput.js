import React from 'react';
import "./channelInput.css";

export const ChannelInput = ({channel}) => {
    const {name, icon, id} = channel;
    
    return (
        <div className='channelInputBox'>
            <input 
                className="channelLabel__checkbox" 
                name="channelSelect" 
                type="checkbox"
                id={`${id}`}
            />
             <label htmlFor={`${id}`} className='channelLabel'> 
                {icon && <img className="channelLabel__icon" data-src={icon} alt="channel icon" height="50" width="60" loading='lazy'></img>}
                <p>
                    {name}
                </p>
              </label>  
        </div>
        
    );
}


