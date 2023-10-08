import React from 'react';
import { ChannelInput } from './channelInput/channelInput';
import './channelsForm.css'

export const ChannelsForm = ({channelsMap}) => {
    function populateForm(channelsMap) {
        let channelsArr = Array.from(channelsMap.values());
        return (
          <>
            {channelsArr.map(channel => <ChannelInput 
            channel={channel}
            />)}
          </>
        );
      }
        
    return (
        <form name="ChannelsForm" className='ChannelsForm'>
            {populateForm(channelsMap)}           
        </form>
    );
}

