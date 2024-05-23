import React, { useState } from "react";
import AddCard from "./AddCard";

const Body = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputs, setInputs] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddInput = () => {
    if (inputValue.trim() !== "") {
      setInputs([...inputs, inputValue]);
      setInputValue("");
      setShowComponent(false); 
    }
  };

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <div className="main-body">
      
      <div className="body">
        {setShowComponent && <AddCard inputs={inputs} setInputs={setInputs} />}
        
          
          {showComponent ? (
            <React.Fragment>
              <div className="add-card-div">
              <input
                type="text"
                className="input-field"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="add title.."
              />
              <button className="add-card3" onClick={handleAddInput}>
                <div className="pp"></div>Add List
              </button>
              </div>
            </React.Fragment>
          ) : (
           <button className="add-card123" onClick={handleClick}>
              + Add a list
            </button>
          )}
        </div>
      </div>
    
  );
};

export default Body;
