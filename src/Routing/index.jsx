import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from "../utils/Path";


import { Box } from "@mui/material";

const index = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default index;
