import React, { useContext } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid"; // Grid version 1
import TodayIcon from "@mui/icons-material/CalendarToday";
import EastIcon from "@mui/icons-material/East";
import Button from "@mui/material/Button";
import "./Card.scss";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

interface Article {
  summary: string;
  publishedAt: string;
  title: string;
  imageUrl: string;
  id: number;
}
interface CardItemProps {
  article: Article;
  summary: string;
  month: string;
  day: string;
  year: string;
}

function Set() {
  return { __html: "Setting HTML using dangerouslySetInnerHTML attribute" };
}

export const CardItem: React.FC<CardItemProps> = ({
  article,
  summary,
  month,
  day,
  year,
}) => {
  return (
    <Grid item xs={12} md={4} key={summary}>
      <Card className="card">
        <img
          src={article.imageUrl}
          alt="img"
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            border: "none",
            outline: "none",
          }}
        />
        <CardContent sx={{ height: "100%", padding: "0 25px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="card_date"
            sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "150%", fontFamily: 'Montserrat' }}
          >
            <TodayIcon sx={{ width: "16px" }} /> {month} {day}, {year}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="card_title"
            sx={{
              width: "100%",
              maxHeight: "6rem",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "29px",
              fontFamily: 'Montserrat',
            }}
            dangerouslySetInnerHTML={{ __html: article.title }}
          ></Typography>
          <Typography sx={{ height: "20px" }}></Typography>
          <Typography
            className="card_discription"
            sx={{
              fontSize: "16px",
              lineHeight: "150%",
              height: "5em",
              fontFamily: 'Montserrat',
            }}
            dangerouslySetInnerHTML={{ __html: summary }}
          ></Typography>

          <Button
            className="card_button"
            size="small"
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              fontFamily: 'Montserrat',
              textTransform: "none",
              color: "#363636",
              margin: "0",
              padding: "2px",
            }}
          >
            <Link
              style={{
                margin: "0",
                padding: "0",
                display: "flex",
                justifyContent: 'left',
                alignItems: 'center',
                textDecoration: "none",
                gap: "12px",
                fontWeight: "700",
                fontSize: "16px",
                fontFamily: 'Montserrat',
                color: "#363636",
              }}
              to={{
                pathname: "/" + article.id,
              }}
            >
              Read more <EastIcon sx={{ width: "12px" }} />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
