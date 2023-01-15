import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Grid"; // Grid version 1
import TodayIcon from "@mui/icons-material/CalendarToday";
import EastIcon from "@mui/icons-material/East";
import Button from "@mui/material/Button";
import "./Card.scss";
import { Link } from "react-router-dom";
import { styles } from "../../styles-js/styles";
import { CardItemProps } from "../../types/types";

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
        <CardMedia
          image={article.imageUrl}
          alt="img"
          sx={styles.card.img}
          component="img"
        />
        <CardContent sx={styles.card.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="card_date"
            sx={styles.card.date}
          >
            <TodayIcon sx={{ width: "16px" }} /> {month} {day}, {year}
          </Typography>
          
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="card_title"
            sx={styles.card.title}
            dangerouslySetInnerHTML={{ __html: article.title }}
          ></Typography>
    
          <Typography
            className="card_discription"
            sx={styles.card.discription}
            dangerouslySetInnerHTML={{ __html: summary }}
          ></Typography>

          <Button className="card_button" size="small" sx={styles.card.button}>
            <Link
              style={styles.card.link}
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
