import React from "react";

function AddItem(){
    return(
        <div className="addItem">
            <form>
            <input type="file" id="myFile" name="filename"/>
                <input type="text" className="input" placeholder="Add product name here"/>
                <input type="text" className="input" placeholder="productId"/>
                <input type="text" className="input" placeholder="Manufact"/>
                <input type="text" className="input" placeholder="Add product name here"/>
                <input type="text" className="input" placeholder="Add product name here"/>
            </form>
        </div>
    )
}
export default AddItem;