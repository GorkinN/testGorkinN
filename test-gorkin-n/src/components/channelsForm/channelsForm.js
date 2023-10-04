import React from 'react';
import { ChannelInput } from './channelInput/channelInput';

export const ChannelsForm = ({channelsMap}) => {
    function populateForm(channelsMap) {
        let channelsArr = Array.from(channelsMap.values());
        return (
          <>
            {channelsArr.map(channel => <ChannelInput 
            channelNameLabel={channel.name}
            id={"channelID: "+channel.id}
            icon={channel.icon}
            />)}
          </>
        );
      }
        
    return (
        <form name="ChannelsForm">
            {populateForm(channelsMap)}           
        </form>
    );
}

