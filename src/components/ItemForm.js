import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formData, setFormData] = useState({id: uuid(), name: "", category: "Produce"});

  const handleItemFormDataChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };
  return (
    <form className="NewItem" onSubmit={() => onItemFormSubmit(formData)}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemFormDataChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemFormDataChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
