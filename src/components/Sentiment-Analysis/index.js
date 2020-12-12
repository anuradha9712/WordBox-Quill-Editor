import React, { useState, useEffect } from 'react';
import Sentiment from 'sentiment';
import { Grid } from '@material-ui/core';
import positiveGIF from '../../images/positive.gif';
import negativeGIF from '../../images/negative.gif';
import neutralGIF from '../../images/neutral.gif';
import '../../App.css';

const sentiment = new Sentiment();

function SentimentAnalysis({ content }) {
    const [sentimentScore, setSentimentScore] = useState({ score: 0 });

    useEffect(() => {
        var text = removeTags(content);
        setSentimentScore(sentiment.analyze(text));
    }, [content])

    const removeTags = (str) => {
        if ((str === null) || (str === ''))
            return '';
        else
            str = str.toString();
        return str.replace(/(<([^>]+)>)/ig, '');
    }

    return (
        <Grid item container spacing={2} className="description">
            <Grid item container xs={12} md={6} className="itemGrid">
                <div className="card para">
                    <p>{sentimentScore ? sentimentScore.score : ''}</p>
                    <h3>Sentiment Score</h3>
                </div>
            </Grid>
            <Grid item container xs={12} md={6} className="itemGrid">
                <div className="card  ">
                    {sentimentScore.score === 0 ?
                        <div>
                            <img src={neutralGIF} alt='neutral' />
                            {/* <p>Neutral</p> */}
                        </div>
                        :
                        sentimentScore.score > 1 ?
                            <div>
                                <img src={positiveGIF} alt='positive' />
                                {/* <p>Positive</p> */}
                            </div> :
                            <div>
                                <img src={negativeGIF} alt='negative' />
                                {/* <p>Negative</p> */}
                            </div>}
                    <h3>General Sentiment</h3>
                </div>
            </Grid>

        </Grid>

    )
}

export default SentimentAnalysis;