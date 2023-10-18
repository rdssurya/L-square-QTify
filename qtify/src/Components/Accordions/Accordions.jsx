import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  return (
    <div style={{paddingInline:'20px'}}>
        <h1 style={{textAlign: 'center',paddingBottom:'20px'}}>FAQs</h1>
      <Accordion style={{borderRadius:'15px'}}>
        <AccordionSummary
        style={{color:'#fff', backgroundColor: '#000',borderRadius:'15px', border:"1px solid #fff"}}
          expandIcon={<ExpandMoreIcon style={{color: 'var(--color-primary)'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ borderRadius:'15px'}}>
        <AccordionSummary
        style={{color:'#fff', backgroundColor: '#000',borderRadius:'15px', border:"1px solid #fff"}}
          expandIcon={<ExpandMoreIcon style={{color: 'var(--color-primary)'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sorry, unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}