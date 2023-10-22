import React from 'react';
import { ChannelInput } from './channelInput/channelInput';
import './channelsForm.css'

export const ChannelsForm = ({channelsMap, setSelectedChannelList}) => {
  /*
  setTimeout(()=>{
    let channelsForm$$$ = document.forms.ChannelsForm;
    console.log("elmts",ChannelsForm.elements)
      Array.from(channelsForm$$$.elements).forEach(element => {
        element.checked = true;
      }); 
  });
  */
  

  let onChange = () => {
    let channelsForm = document.forms.ChannelsForm;

    const checkedChannelsIDs = Array.from(channelsForm.elements).filter(item => item.checked).map(item => item.id);
    setSelectedChannelList(checkedChannelsIDs);  
  }

  function populateForm(channelsMap) {
      let channelsArr = Array.from(channelsMap.values());
      return (
        <>
          { channelsArr.map(channel => <ChannelInput key={`form key:${channel.id}`} channel={channel} />) }
        </>
      );
    }
        
    return (
        <form name="ChannelsForm" className='ChannelsForm' onChange={() => onChange()}>
            {populateForm(channelsMap)}           
        </form>
    );
}

