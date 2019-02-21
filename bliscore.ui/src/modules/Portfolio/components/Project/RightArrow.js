

import * as React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function RightArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='arrow-button arrow-right'
      style={{ display: "block" }}
      onClick={onClick}
    >
    <FontAwesomeIcon icon={["fas","angle-left"]} size="4x" className="img-responsive" style={{width:'100%', height:'100%'}}/>
    </div>
  );
}