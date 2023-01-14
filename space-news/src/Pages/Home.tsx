import React, { useEffect, useState, useContext } from "react";
import { CardItem } from "../components/Card/Card";
import { Skeleton, Card } from "@mui/material";
import Grid from "@mui/material/Grid"; // Grid version 1
import { MyContext } from "../App";
import SearchIcon from "@mui/icons-material/Search";

interface Article {
  summary: string;
  publishedAt: string;
  title: string;
  imageUrl: string;
  id: number;
  timesSelectedTitle: number;
  timesSelectedSummary: number;
}

const queryFilterAndLight = (article: Article, query: string): Article => {
  let titleCount = 0;
  let summaryCount = 0;
  const articleArraySummary = article.summary
    .slice(0, 97)
    .split(" ")
    .map((word) => {
      const preparedWord = word.replace(/[.,]/gi, "").toLowerCase();
      const preparedQuery: string[] = query.toLowerCase().split(" ");
      const find = preparedQuery.find((query) => query === preparedWord);
      if (find) {
        summaryCount++;
        return `<span style="background: yellow">${word}</span>`;
      }

      return word;
    })
    .join(" ");

  const articleArrayTitle = article.title
    .split(" ")
    .map((word) => {
      const preparedWord = word.replace(/[.,]/gi, "").toLowerCase();
      const preparedQuery: string[] = query.toLowerCase().split(" ");
      const find = preparedQuery.find((query) => query === preparedWord);
      if (find) {
        titleCount++;
        return `<span style="background: yellow">${word}</span>`;
      }

      return word;
    })
    .join(" ");

  const newArticle: Article = {
    ...article,
    summary: articleArraySummary,
    title: articleArrayTitle,
    timesSelectedTitle:
      `<span style="background: yellow"></span>`.length * titleCount,
    timesSelectedSummary:
      `<span style="background: yellow"></span>`.length * summaryCount,
  };

  return newArticle;
};
export const Home: React.FC = () => {
  const { articles } = useContext(MyContext);

  const [text, getText] = useState("");
  const filteredArticlesDescriptions = articles
    .map((article) => queryFilterAndLight(article, text))
    .filter((article) => {
      if (text) {
        return article.timesSelectedSummary || article.timesSelectedTitle;
      }
      return article;
    });

  return (
    <>
      <div style={{ position: "relative", fontFamily: "Montserrat" }}>
        <h3
          style={{
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "20px",
            paddingBottom: "10px",
            color: "#363636",
          }}
        >
          Filter by keywords
        </h3>
        <input
          type="text"
          style={{ fontFamily: "Montserrat" }}
          onChange={(e) => getText(e.target.value)}
          value={text}
          placeholder="Search..."
        ></input>
        <SearchIcon
          sx={{
            position: "absolute",
            left: "20px",
            top: "50%",
            opacity: "0.3",
            width: "30px",
            height: "30px",
          }}
        ></SearchIcon>
      </div>
      <p className="App_results">
        Results: {filteredArticlesDescriptions.length}{" "}
      </p>
      <Grid container spacing={5} columns={12}>
        {filteredArticlesDescriptions.length > 0
          ? filteredArticlesDescriptions.map((article) => {
              const sliceTo = 97 + article.timesSelectedSummary || 0;
              const summaryPreview = article.summary.slice(0, sliceTo) + "...";
              const dateToArray = article.publishedAt.split("T")[0].split("-");
              const year = dateToArray[0];

              const month = Intl.DateTimeFormat("en", { month: "long" }).format(
                new Date(dateToArray[1])
              );

              const day = dateToArray[2] + "th";
              return (
                <CardItem
                  key={article.publishedAt}
                  article={article}
                  day={day}
                  month={month}
                  year={year}
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
                    <Skeleton
                      height={200}
                      variant="rectangular"
                      sx={{ marginBottom: "20px" }}
                    />
                    <Skeleton
                      height={30}
                      variant="rectangular"
                      sx={{ marginBottom: "20px" }}
                    />
                    <Skeleton
                      height={90}
                      variant="rectangular"
                      sx={{ marginBottom: "20px" }}
                    />
                    <Skeleton
                      height={100}
                      variant="rectangular"
                      sx={{ marginBottom: "20px" }}
                    />
                  </Card>
                </Grid>
              );
            })}
      </Grid>
    </>
  );
};
