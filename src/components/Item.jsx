import React from "react";

function Item({ item, deleteItem, editItem, toggleCompleted }) {
  return (
    <li className="item">
      <span
        style={{
          textDecoration: item.completed ? "line-through" : "none",
        }}
      >
        {item.value}
      </span>

      <div className="actions">
        <button
          className="btn"
          onClick={() => toggleCompleted(item.id)}
        >
          {item.completed ? "Deshacer" : "Completar"}
        </button>

        <button
          className="btn-edit"
          onClick={() => editItem(item)}
        >
          Editar
        </button>

        <button
          className="btn-delete"
          onClick={() => deleteItem(item.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default Item;