import React, { useContext } from "react";
import { MyContext } from "../../App";
import { useLocation, Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import Button from "@mui/material/Button";
import "../Card/Card.scss";
import { LinearProgress } from "@mui/material";

export const ArticlePage: React.FC = () => {
  const { useAPI } = useContext(MyContext);
  const location = useLocation();
  const details = useAPI(location.pathname);
  console.log();
  return !details.id ? (
    // <div
    //   style={{
    //     minHeight: "100vh",
    //     zIndex: "99",
    //   }}
    
      <LinearProgress color="success" sx={{ zIndex: "100" }} />
    // </div>
  ) : (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <img
        src={details.imageUrl}
        alt={details.title}
        width="100%"
        height="245px"
        style={{ objectFit: "cover" }}
      ></img>
      <article
        style={{
          position: "absolute",
          boxSizing: "border-box",
          top: "150px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "0 75px",
          background: "#FFFFFF",
          border: "1px solid #EAEAEA",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
          borderRadius: "5px",
          zIndex: "10",
          width: "80%",
          minHeight: "70vh",
          fontFamily: "Montserrat",
        }}
      >
        <h5
          style={{
            padding: "35px 0 50px",
            fontStyle: "normal",
            textAlign: "center",
            fontWeight: "400px",
            fontSize: "24px",
            lineHeight: "29px",
            fontFamily: "Montserrat",
            color: "#363636",
          }}
        >
          {details.title}
        </h5>
        <p> {details.summary}</p>
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit eligendi consequatur tempora alias, praesentium adipisci
          iure minima aperiam quia explicabo, perferendis possimus, voluptatem
          numquam nemo ea facilis vitae repudiandae dolores expedita. Placeat
          nulla quo vero. Dignissimos dolores eveniet maxime blanditiis? Autem
          id magni soluta delectus omnis beatae laudantium, adipisci, nobis ab
          error velit vitae illo laborum reiciendis sunt eaque. Voluptas
          possimus placeat suscipit sint facere voluptates ab accusantium totam,
          quis neque! Ratione facilis vero explicabo mollitia perspiciatis ex
          esse quasi reiciendis laboriosam nisi delectus, harum sint, ducimus
          vel, in aliquam fuga maiores commodi non et enim. Ipsa reprehenderit
          nihil hic.
        </p>
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          consequuntur quia vero natus, voluptatum numquam deleniti eos saepe
          unde, repudiandae libero, sequi iste sint eligendi illo. Cum tempore,
          voluptas quasi libero quas quaerat neque quisquam aut veniam
          voluptatum quibusdam quod fugiat, atque error? Non similique
          voluptatem explicabo. Omnis dolorem sapiente autem exercitationem sunt
          earum voluptatum assumenda, debitis corporis, recusandae id! Aut
          consectetur ea quas possimus illum debitis quibusdam, alias cumque at
          optio delectus fugiat! Tenetur iusto, provident mollitia ducimus nam
          porro iste perferendis magnam incidunt, ipsam odio reprehenderit!
          Beatae tenetur, omnis eum quis molestias exercitationem. Illo vero
          consequuntur qui veritatis.
        </p>

        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          expedita officiis maxime sunt modi omnis. Molestiae ullam maiores ex
          rem.
        </p>
        <Button
          className="card_button"
          size="small"
          sx={{
            fontWeight: "700",
            postion: "absolute",
            fontSize: "16px",
            fontFamily: "Montserrat",
            textTransform: "none",
            color: "#363636",
            margin: "0",
            padding: "0",
            bottom: "-52px",
          }}
        >
          <Link
            style={{
              margin: "0",
              padding: "0",
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              textDecoration: "none",
              gap: "8px",
              fontWeight: "700",
              fontSize: "16px",
              fontFamily: "Montserrat",
              color: "#363636",
            }}
            to={{
              pathname: "/",
            }}
          >
            <WestIcon sx={{ width: "12px" }} /> Back to homepage
          </Link>
        </Button>
      </article>
    </div>
  );
};
