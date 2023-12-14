import React from "react";

function AddItem(){
    const handleSubmit = ()=>{
        
        return(
            <div>Item added successfully</div>
        )
    }
    return(
        <div className="addItem">
            <form className="addForm">
            <input type="file" id="myFile" name="filename" className="inputUpload"/>
                <input type="text" className="input" placeholder="Add product name here"/>
                <input type="text" className="input" placeholder="productId"/>
                <input type="text" className="input" placeholder="Manufactrer name"/>
                <input type="text" className="input" placeholder="Add product name here"/>
                <input type="text" className="input" placeholder="Add product name here"/>
                <button onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}
export default AddItem;