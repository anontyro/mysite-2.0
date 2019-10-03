import React from 'react';
import {Talk} from '../../../store/portfolio/reducers';
import moment from 'moment';
import Hl from '../../../components/util/Hl';

interface TalkProps {
  talk: Talk;
}

const TalkItem = ({talk}: TalkProps) => {
  const date = moment(talk.presentationDate).format('MMM Do YYYY');
  return (
    <React.Fragment>
      <div className="my-talk-item">
        <div className="talk-header">
          <div>{talk.title}</div>
          <div>{date}</div>
        </div>
        <div>
          <iframe
            width="350"
            height="200"
            src={`https://www.youtube.com/embed/${talk.video.videoId}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="talk-footer">
          <div>
            <Hl>Location:</Hl> {talk.location}
          </div>
          <div>
            <Hl>Event:</Hl> {talk.event}
          </div>
        </div>
      </div>
      <style jsx>{`
        .my-talk-item {
          margin: 0 20px;
          width: 350px;
          height: 100%;
        }
        .talk-header {
          display: flex;
          justify-content: space-between;
        }
        .talk-footer {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </React.Fragment>
  );
};

interface Props {
  myTalks: Talk[];
}

const MyTalksList = ({myTalks}: Props) => (
  <React.Fragment>
    <div className="my-talks-header">
      <h3>
        <Hl>My Talks</Hl>
      </h3>
    </div>
    <div className="my-talks-container">
      {myTalks.map((talk: Talk) => (
        <TalkItem talk={talk} key={talk.archiveUrl} />
      ))}
    </div>
    <style jsx>{`
      .my-talks-header {
        width: 100%;
        text-align: center;
        margin: 10px;
      }
      .my-talks-container {
        display: flex;
        height: 280px;
        overflow-x: auto;
      }
    `}</style>
  </React.Fragment>
);

export default MyTalksList;
