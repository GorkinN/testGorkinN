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

function getTVoptionsMap(obj) {
  const TVoptionsMap = new Map();
  for (let item of obj) {
    TVoptionsMap.set(item, item.channels.map(channel => channel.id))
  }
  return TVoptionsMap;
}

export const TVoptionsMap = getTVoptionsMap(TVOptionsArr);

function formUniqueChannelsArr (TVoptionsMap, channelsMap) {
  let uniqueChannelsArr = [];
  Array.from(channelsMap.keys()).forEach(channelID => {
    let isUnique = true;
    
    for (let entry of TVoptionsMap.entries()) {
                  
    }    
  }); 

}
 const uniqueChannelsOptions = formUniqueChannelsArr(TVoptionsMap, channelsMap);