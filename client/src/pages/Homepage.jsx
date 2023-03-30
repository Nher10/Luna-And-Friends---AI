import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignCenterOutlined from "@mui/icons-material/FormatAlignCenterOutlined";
import Code from "@mui/icons-material/Code";
import ChatRounded from "@mui/icons-material/ChatRounded";
import Science from "@mui/icons-material/Science";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }} flexWrap="wrap">
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            LUNA
          </Typography>
          <Card
            onClick={() => navigate("/luna")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 250,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                CHATBOT
              </Typography>
              <Typography variant="h6">Chat With Luna</Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            SUMMY
          </Typography>
          <Card
            onClick={() => navigate("/summy")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 250,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                TEXT SUMMARY
              </Typography>
              <Typography variant="h6">
                Summy summarizes long text into short sentences. You can try it!
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            PROLIX
          </Typography>
          <Card
            onClick={() => navigate("/prolix")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 250,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <FormatAlignCenterOutlined
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                PARAPHRASE
              </Typography>
              <Typography variant="h6">
                Prolix helps you to generate paragraph. You can try it!
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            JAYCEE
          </Typography>
          <Card
            onClick={() => navigate("/jaycee")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 250,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <Code sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                JS CONVERTER
              </Typography>
              <Typography variant="h6">
                Jaycee translates english to javascript code
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            ADA
          </Typography>
          <Card
            onClick={() => navigate("/ada")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 250,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <Science
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                SCIFI IMAGE
              </Typography>
              <Typography variant="h6">
                Generate Scifi images with Ada
              </Typography>
            </Stack>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
