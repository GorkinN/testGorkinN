import React from 'react';
import { ChannelInput } from './channelInput/channelInput';
import './channelsForm.css'

export const ChannelsForm = ({channelsMap, setSelectedChannelList}) => {
  let onChange = () => {
    let ChannelsForm = document.forms.ChannelsForm;
    const checkedChannelsIDs = Array.from(ChannelsForm.elements).filter(item => item.checked).map(item => item.id);
    setSelectedChannelList(checkedChannelsIDs);  
  }
    

    function populateForm(channelsMap) {
        let channelsArr = Array.from(channelsMap.values());
        return (
          <>
            {channelsArr.map(channel => <ChannelInput
            key={`form key:${channel.id}`} 
            channel={channel}
            />)}
          </>
        );
      }
        
    return (
        <form name="ChannelsForm" className='ChannelsForm' onChange={() => onChange()}>
            {populateForm(channelsMap)}           
        </form>
    );
}

