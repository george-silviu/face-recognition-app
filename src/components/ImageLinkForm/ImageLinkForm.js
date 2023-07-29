import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3 white">{`This Magic app will detect faces from your pictures. Preety scary, huh? Try it!`}</p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5 ">
          <input
            className="f4 pa2 w-70 center bn br3"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple bn br3"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
