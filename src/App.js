import React, { useState } from 'react';
import TextEditor from './components/TextEditor';
import Footer from './components/Footer';
import SentimentAnalysis from './components/Sentiment-Analysis';
import ReadingAnalysis from './components/ReadingAnalysis';
import { Grid, Snackbar, Button } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import './App.css';

import copy from 'copy-to-clipboard';


function App() {

  const [content, setContent] = useState('');
  const [openAlert, setOpenAlert] = useState(false);


  const handleContentChange = (value) => {
    setContent(value);
  }

  const CopyHTML = () => {
    copy(content);
    setOpenAlert(true);
  }

  return (
    <div className="main-div">
      <Snackbar
        open={openAlert}
        autoHideDuration={1000}
        // anchorOrigin={{ top, center }}
        message="Copied to Clipboard!"
        onClose={() => setOpenAlert(false)}
      >
      </Snackbar>

      <h1 className="title">WordBox</h1>
      <h3 className="tagline"><i>"Words are free. It's how you use them that may cost you." -KushandWizdom</i></h3>


      <Grid item container xs={12} md={12} spacing={2}>
        <Grid item container xs={12} md={6}>
          <TextEditor handleContentChange={handleContentChange} />
        </Grid>
        <Grid item container xs={12} md={6}  >
          <Button className="clearBtn" variant="outlined" color="primary" onClick={() => CopyHTML()} >
            Copy HTML Code
          </Button>
          <div className="card ql-editor display-box">
            {/* preview */}
            {ReactHtmlParser(content)}
          </div>
        </Grid>
      </Grid>

      <Grid item container xs={12} md={12} spacing={2} className="description"  >
        <Grid item md={6}>
          <ReadingAnalysis content={content}></ReadingAnalysis>
        </Grid>
        <Grid item md={6}>
          <SentimentAnalysis content={content}></SentimentAnalysis>
        </Grid>
      </Grid>

      <Grid container className="footer" >
        <Footer></Footer>
      </Grid>

    </div >
  );
}

export default App;
