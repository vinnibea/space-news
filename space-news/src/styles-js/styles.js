export const styles = {
    card: {
        content: {
            height: "100%", padding: "0 25px",
        },

        title: {
            width: "100%",
            maxHeight: "6rem",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "29px",
            fontFamily: 'Montserrat',
        },
        date: {
            fontWeight: "400", fontSize: "14px", lineHeight: "150%", fontFamily: 'Montserrat',
        },

        img: {
            width: "100%",
            height: "220px",
            objectFit: "cover",
            border: "none",
            outline: "none",
        },

        discription: {
            fontSize: "16px",
            lineHeight: "150%",
            height: "5em",
            fontFamily: 'Montserrat',
        },

        button: {
            fontWeight: "700",
            fontSize: "16px",
            fontFamily: 'Montserrat',
            textTransform: "none",
            color: "#363636",
            margin: "0",
            padding: "2px",
        },

        link: {
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
        }
    },

    home: {
        searchIcon: {
            position: "absolute",
            left: "20px",
            top: "50%",
            opacity: "0.3",
            width: "30px",
            height: "30px",
        },

        header: {
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "20px",
            paddingBottom: "10px",
            color: "#363636",
        }
    },

    article: {
        box: {
            position: "relative",
            // minHeight: "100vh",
            margin: "-50px -75px",
            marign: "0 auto"
        },

        boxText: {
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
        },

        title: {
            padding: "35px 0 50px",
            fontStyle: "normal",
            textAlign: "center",
            fontWeight: "400px",
            fontSize: "24px",
            lineHeight: "29px",
            fontFamily: "Montserrat",
            color: "#363636",
        },

        content: {
            fontFamily: 'Montserrat',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "150%",
            color: "#000000",

        },

        button: {
            fontWeight: "700",
            postion: "absolute",
            fontSize: "16px",
            fontFamily: "Montserrat",
            textTransform: "none",
            color: "#363636",
            margin: "0",
            padding: "0",
            bottom: "-52px",
        },

        link: {
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
        }
    }
}