import DrawerAppBar from "../navbar/navbar";
import Te1 from "../image/T1.jpg";
import Te2 from "../image/T2.jpg";
import Te3 from "../image/T3.jpg";
import Te4 from "../image/T4.jpg";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "./mytemplate.css";
import { Link } from "react-router-dom";
import { T1, T2, T3, T4 } from "../../state/action";
import { useDispatch } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "whitesmoke",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

//selected template will redirect page to detail filling page
function Mytemplates() {
  const dispatch = useDispatch();

  return (
    <>
      <DrawerAppBar />

      <Box sx={{ flexGrow: 1, m: 3 }}>
        <Typography
          component="span"
          fontFamily="Open sans,sans-serif"
          color="black"
          variant="h5"
        >
          Choose{" "}
        </Typography>
        <Typography
          component="span"
          fontFamily="Open sans, sans-serif"
          color="black"
          variant="h5"
        >
          {" "}
          Template
        </Typography>
        <Grid container spacing={3} paddingTop={2}>
          <Grid item md={3}>
            <Item>
              <Link to="/det">
                <div className="Item">
                  <img
                    id="con"
                    className="Item"
                    onClick={() => {
                      dispatch(T1());
                    }}
                    src={Te1}
                    alt="Template1"
                  />
                </div>
              </Link>
            </Item>
          </Grid>

          <Grid item md={3}>
            <Item>
              <Link to="/det">
                <div className="Item">
                  <img
                    id="con"
                    onClick={() => {
                      dispatch(T2());
                    }}
                    className="Item"
                    src={Te2}
                    alt="Template2"
                  />
                </div>
              </Link>
            </Item>
          </Grid>

          <Grid item md={3}>
            <Item>
              <Link to="/det">
                <div className="Item">
                  <img
                    id="con"
                    className="Item"
                    onClick={() => {
                      dispatch(T3());
                    }}
                    src={Te3}
                    alt="Template3"
                  />
                </div>
              </Link>
            </Item>
          </Grid>

          <Grid item md={3}>
            <Item>
              <Link to="/det">
                <div className="Item">
                  <img
                    id="con"
                    className="Item"
                    onClick={() => {
                      dispatch(T4());
                    }}
                    src={Te4}
                    alt="Template4"
                  />
                </div>
              </Link>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Mytemplates;
