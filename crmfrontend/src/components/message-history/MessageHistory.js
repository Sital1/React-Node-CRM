import React from "react";
import PropTypes from "prop-types";
import './message-history.css'  

const MessageHistory = ({ msg }) => {

if(!msg){return null;}

  return msg.map((row,index)=> <div key={index}className="message-history mt-3">
  <div  className="send fw-bold ">
    <div className="sender">{row.messageBy}</div>
    <div className="date">{row.date}</div>
  </div>
  <div className="message">{row.message}</div>
</div>)
    
  ;
};

export default MessageHistory;

MessageHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};
