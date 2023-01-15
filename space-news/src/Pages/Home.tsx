import React, { useState, useContext } from "react";
import { MyContext } from "../components/Context";
import { CardItem } from "../components/Card/Card";
import { Skeleton, Card, Typography, Box} from "@mui/material";
import Grid from "@mui/material/Grid"; // Grid version 1
import SearchIcon from "@mui/icons-material/Search";
import {
  queryFilterAndLight,
  convertDate,
  sliceTo,
  prioritySort,
  filters,
} from "../__utils";
import { styles } from "../styles-js/styles";

export const Home: React.FC = () => {
  const { articles } = useContext(MyContext);
  const [text, getText] = useState("");
  let filteredArticles = articles.map((article) =>
  queryFilterAndLight(
    queryFilterAndLight(article, text, "summary"),
    text,
    "title"
  )
)
.sort((a, b) => prioritySort(a, b))
.filter((article) => filters(article, text));;


  return (
    <>
      <Box style={{ position: "relative", fontFamily: "Montserrat" }}>
        <Typography variant="body1" component="div" sx={styles.home.header}>
          Filter by keywords
        </Typography>
        <input
          type="text"
          style={{ fontFamily: "Montserrat" }}
          onChange={(e) => getText(e.target.value)}
          value={text}
          placeholder="Search..."
        ></input>
        <SearchIcon sx={styles.home.searchIcon}></SearchIcon>
      </Box>
      <Typography className="App_results" variant="body1" component="div">
        Results: {filteredArticles.length}{" "}
      </Typography>
      <Grid container spacing={5} columns={12}>
        {filteredArticles.length > 0
          ? filteredArticles.map((article) => {
              const summaryPreview = sliceTo(article);
              const date = convertDate(article);

              return (
                <CardItem
                  key={article.publishedAt}
                  article={article}
                  day={date.day}
                  month={date.month}
                  year={date.year}
                  summary={summaryPreview}
                />
              );
            })
          : new Array(10).fill(0).map((__, index) => {
              return (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    sx={{ backgroundColor: "transparent", boxShadow: "none" }}
                  >
                    {[200, 30, 90, 100].map((val, index) => (
                      <Skeleton
                        key={val + index}
                        height={val}
                        variant="rectangular"
                        sx={{ marginBottom: "20px" }}
                      />
                    ))}
                  </Card>
                </Grid>
              );
            })}
      </Grid>
    </>
  );
};
