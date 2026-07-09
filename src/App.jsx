import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [itemToEdit, setItemToEdit] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(
        items.map((item) =>
          item.id === itemToEdit.id ? { ...item, value } : item
        )
      );
      setItemToEdit(null);
    } else {
      setItems([
        ...items,
        {
          id: Date.now(),
          value,
          completed: false,
        },
      ]);
    }
  };

  const deleteItem = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este elemento?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };

  const toggleCompleted = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteAll = () => {
    if (window.confirm("¿Eliminar todos los elementos?")) {
      setItems([]);
    }
  };

  const filteredItems = items.filter((item) =>
    item.value.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="title">CRUD con LocalStorage</h1>

      <p className="contador">Total: {items.length}</p>

      <input
        className="input"
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      <Form
        addOrUpdateItem={addOrUpdateItem}
        itemToEdit={itemToEdit}
      />

      <List
        items={filteredItems}
        deleteItem={deleteItem}
        editItem={editItem}
        toggleCompleted={toggleCompleted}
      />

      <button className="btn-delete" onClick={deleteAll}>
        Borrar Todo
      </button>
    </div>
  );
}

export default App;