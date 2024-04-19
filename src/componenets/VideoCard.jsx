import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import InfiniteScroll from "react-infinite-scroll-component";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
// { video: { id: { videoId }, snippet } },
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  return (
    // <InfiniteScroll
    // dataLength={video.length} //This is important field to render the next data
    // hasMore={true}
    // loader={<h4>Loading...</h4>}
    // endMessage={
    //   <p style={{ textAlign: 'center' }}>
    //     <b>Yay! You have seen it all</b>
    //   </p>
    // }
    // >
   <Card sx={{width: {xs: "100%", sm: "358px", md: "300px"}, boxShadow: "none", borderRadius: 0 }}>
   <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
    <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
    sx={{width: {xs: "100%", sm: "358px"}, height: "180px"
    
}}>
    </CardMedia>
    </Link>      
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>

   </Card>
//    </InfiniteScroll>
   
   
  )
}

export default VideoCard
