import {
  Grid,
  Typography,
  Box,
  
} from "@mui/material";
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import '../styles/ReactMachineCoding.css'
const ReactMachineCoding = () => {
  return (
    <Box
      display="flex"
    //   height="100vh"
      width="100%"
      justifyContent="start"
      alignItems="center"
      flexDirection="column"
      mt={6}
      m={4}
    >
      <Typography variant="body1" style={{ textAlign: "left" }} mt={2} >
        Home - Tech - React Machine Coding
      </Typography>
      <Typography variant="h4" style={{ textAlign: "left" }} mt={5}>
        ReactJs Machine Coding Challenges
      </Typography>
      <Typography variant="h6" style={{ textAlign: "left" }}>
        ReactJs Machine Coding Challenges this is a description
      </Typography>
      <Box mt={6} >
        <Grid container  display="flex" justifyContent="center" >
          <Grid item md={7.5}>
            {/* <Typography variant="body1" style={{ textAlign: "left" }}>
              Accordion
            </Typography> */}

            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header" 
              >
               Counter
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
              <AccordionActions>
          <Button >Demo</Button>

          <Button >Github</Button>
          <Button>More</Button>
        </AccordionActions>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
              <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
              <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ReactMachineCoding;
