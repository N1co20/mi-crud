import React, { useState, useEffect } from "react";

function Form({ addOrUpdateItem, itemToEdit }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (itemToEdit) {
      setInputValue(itemToEdit.value);
    } else {
      setInputValue("");
    }
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (inputValue.trim() === "") {
      alert("No puedes agregar un elemento vacío.");
      return;
    }

    addOrUpdateItem(inputValue.trim());
    setInputValue("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingrese un elemento"
      />

      <button className="btn" type="submit">
        {itemToEdit ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
}

export default Form;