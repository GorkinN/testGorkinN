import React from 'react';

export const ChannelInput = ({channelNameLabel}) => {
    return (
        <label>
        <input name="channelSelect" type="checkbox"/>  
             {channelNameLabel}        
        </label>
    );
}


