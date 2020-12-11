import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import TextEditor from './components/TextEditor';
import { Grid, Divider } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import readingtime from 'reading-time';
import Sentiment from 'sentiment';
import './App.css';
import positiveGIF from './images/positive.gif';
import negativeGIF from './images/negative.gif';
import neutralGIF from './images/neutral.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const sentiment = new Sentiment();

function App() {

  const [content, setContent] = useState('');
  const [sentimentScore, setSentimentScore] = useState(0);


  const removeTags = (str) => {
    if ((str === null) || (str === ''))
      return '';
    else
      str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '');
  }

  const handleContentChange = (value) => {
    setContent(value);
    // console.log("reaing->", readingtime(value));
    var text = removeTags(value);
    // console.log('sentiment score--> ',text ,sentiment.analyze(text));
    setSentimentScore(sentiment.analyze(text));

  }


  return (
    <div className="main-div">
      <h1 className="title">WordBox</h1>
      <h3 className="tagline"><i>"Words are free. It's how you use them that may cost you." -KushandWizdom</i></h3>
      <Grid container xs={12} md={12} spacing={2}>
        <Grid item container xs={12} md={6}>
          <TextEditor handleContentChange={handleContentChange} />
        </Grid>
        <Grid item container xs={12} md={6}  >
          <div className="card ql-editor">
            {/* preview */}
            {ReactHtmlParser(content)}

            {/* Html code */}
            {/* {content} */}

          </div>
        </Grid>
      </Grid>

      <Grid container xs={12} md={12} spacing={2} className="description"  >
        <Grid item container xs={12} md={3} className="itemGrid" >
          <div className="card para ">
            <p>{readingtime(content).minutes + ' ' + 'minutes'}</p>
            <h3>Reading Time</h3>
          </div>
        </Grid>
        <Grid item container xs={12} md={3} className="itemGrid">
          <div className="card para">
            <p>{readingtime(content).words + ' ' + 'words'}</p>
            <h3>Words</h3>
          </div>
        </Grid>
        <Grid item container xs={12} md={3} className="itemGrid">
          <div className="card para">
            <p>{sentimentScore ? sentimentScore.score : ''}</p>
            <h3>Sentiment Score</h3>
          </div>
        </Grid>
        <Grid item container xs={12} md={3} className="itemGrid">
          <div className="card ">
            {sentimentScore.score === 0 ?
              <div>
                <img src={neutralGIF} alt='neutral' />
                <p>Neutral</p>
              </div>
              :
              sentimentScore.score > 1 ?
                <div>
                  <img src={positiveGIF} alt='positive' />
                  <p>Positive</p>
                </div> :
                <div>
                  <img src={negativeGIF} alt='negative' />
                  <p>Negative</p>
                </div>}
            <h3>General Sentiment</h3>
          </div>
        </Grid>

      </Grid>

      <Grid container xs={12} className="footer" >
        {/* <div id="footer"> */}
        <Grid item container xs={12} className="footerGrid">
         <h4> Made with <span role="img" aria-label="heart"> 💜</span> by Anuradha Aggarwal </h4>
                <Grid item container xs={12} className="footerGrid" >
            <a href="https://github.com/anuradha9712"  ><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/anuradha-aggarwal-4a2751107/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://twitter.com/Anuradh06359394/"><FontAwesomeIcon icon={faTwitter} /></a>
          </Grid>
        </Grid>

        {/* </div> */}
      </Grid>

    </div>
  );
}

export default App;
