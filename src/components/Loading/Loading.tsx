import Loader from "react-loader-spinner";

import './Loading.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loading() {
  return (
    <div className="loading">
      <div className="loading__icon-wrapper">
        <Loader type="Circles" color="#FFFFFF" height={80} width={80} />
      </div>
    </div>
  )
};

export default Loading;