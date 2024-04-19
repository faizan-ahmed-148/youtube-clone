import React from "react";
import { Stack, Box } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';
import { ChannelCard, Loader, VideoCard } from "./";
import { useParams } from "react-router-dom";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  const maxResults = useParams
  console.log(maxResults);
  return (

    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
    
  
  );
}

export default Videos;