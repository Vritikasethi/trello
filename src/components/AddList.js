import React,{ useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const AddList=()=>{
    const [listDescription, setListDescription] = useState(['']);
    
    const handleList = (e)=>{
        setListDescription([...listDescription,'']);
    }

    const handleListDescription =(index, value)=>{
        const newInput = [...listDescription];
        newInput[index] = value;
        setListDescription(newInput);
    }

    const handleRemoveInput = (index) => {
        const newInputs = [...listDescription];
        newInputs.splice(index, 1);
        setListDescription(newInputs);
    };

    return(
        <div>
            <React.Fragment>
            {
                listDescription.map((input, index) => (
                <div key={index}>
                  <input
                    className="input-field"
                    type="text"
                    value={input}
                    onChange={(e) => handleListDescription(index, e.target.value)}
                    placeholder="add description..."
                  />
                  </div>
              ))
            }
               
            </React.Fragment>
            <button className="add-card11" onClick={handleList}><div class="o"><i class="fa-solid fa-plus"></i></div>
                    Add Card 
                </button>
                
                  
        </div>
    )
}

export default AddList;