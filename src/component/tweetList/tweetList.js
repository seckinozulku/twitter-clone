import React from 'react';
import Tweet from "../tweet";

const TweetList = ({ tweets }) => {
    return (
        <div>
            {tweets.map((tweet, index) => <Tweet key={index} {...tweet} />)}
        </div>
    );
}

export default TweetList;
