

import * as React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function LeftArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='arrow-button arrow-left'
      style={{ display: "block" }}
      onClick={onClick}
    >
    <FontAwesomeIcon icon={["fas","angle-right"]} size="4x" className="img-responsive" style={{width:'100%', height:'100%'}}/>
    </div>

  );
}