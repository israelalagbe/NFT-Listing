import React from "react";
import './index.scss';
import loading from '../../img/loading.gif';

function Loader() {
  return (
    <div className="loader" >
      <img alt="Loading..." src={loading} />
    </div>
  );
}

export default Loader;