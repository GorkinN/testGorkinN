import TVOptionsArr from './24h.json';

function getChannelsList(TVoptionsArr) {
    const tvChannelsMap = new Map();
    TVoptionsArr.forEach(item => {
      for (let channel of item.channels) {
        if (!tvChannelsMap.has(channel.id)) {tvChannelsMap.set(channel.id, channel)}
      }            
    });

    return tvChannelsMap;
  }
export const channelsMap = getChannelsList(TVOptionsArr);
