import React, { useContext, useEffect } from "react";
import { MyContext } from "../Context";
import { useLocation, Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import Button from "@mui/material/Button";
import "../Card/Card.scss";
import { Container, CircularProgress, Box, Typography } from "@mui/material";
import { styles } from "../../styles-js/styles";

export const ArticlePage: React.FC = () => {
  const { useAPI } = useContext(MyContext);
  const location = useLocation();
  const details = useAPI(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  }, []);

  document.body.style.overflow = "visible";

  return !details.id ? (
    <Container
      sx={{
        ...styles.article.box,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <CircularProgress />
      <CircularProgress />
      <CircularProgress />
    </Container>
  ) : (
    <Box sx={styles.article.box}>
      <img
        src={details.imageUrl}
        alt={details.title}
        width="100%"
        height="245px"
        style={{ objectFit: "cover" }}
      ></img>
      <Box sx={styles.article.boxText}>
        <Typography
          sx={styles.article.title}
          gutterBottom
          variant="h5"
          component="div"
        >
          {details.title}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={styles.article.content}
        >
          {details.summary}
        </Typography>
        {[1, 2, 3].map((p) => (
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            key={p}
            sx={styles.article.content}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit eligendi consequatur tempora alias, praesentium
            adipisci iure minima aperiam quia explicabo, perferendis possimus,
            voluptatem numquam nemo ea facilis vitae repudiandae dolores
            expedita. Placeat nulla quo vero. Dignissimos dolores eveniet maxime
            blanditiis? Autem id magni soluta delectus omnis beatae laudantium,
            adipisci, nobis ab error velit vitae illo laborum reiciendis sunt
            eaque. Voluptas possimus placeat suscipit sint facere voluptates ab
            accusantium totam, quis neque! Ratione facilis vero explicabo
            mollitia perspiciatis ex esse quasi reiciendis laboriosam nisi
            delectus, harum sint, ducimus vel, in aliquam fuga maiores commodi
            non et enim. Ipsa reprehenderit nihil hic.
          </Typography>
        ))}
        <Button className="card_button" size="small" sx={styles.article.button}>
          <Link
            style={styles.article.link}
            to={{
              pathname: "/",
            }}
          >
            <WestIcon sx={{ width: "12px" }} /> Back to homepage
          </Link>
        </Button>
      </Box>
    </Box>
  );
};
