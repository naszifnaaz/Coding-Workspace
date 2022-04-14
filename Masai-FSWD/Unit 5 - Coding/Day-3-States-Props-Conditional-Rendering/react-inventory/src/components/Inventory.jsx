import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });

  const [total, setTotal] = useState(63);

  const handleTotal = (inv) => {
    const total = inv.books + inv.notebooks + inv.pens;
    setTotal(total);
  };
  // Create add and remove functions here that changes the
  // state.
  const handleBooks = (value) => {
    const book = inv.books + value;
    if (book <= 0) return;
    setInv({ ...inv, books: book });
    handleTotal(inv);
  };

  const handleNotebooks = (value) => {
    const notebook = inv.notebooks + value;
    if (notebook <= 0) return;
    setInv({ ...inv, notebooks: notebook });
    handleTotal(inv);
  };

  const handlePens = (value) => {
    const pen = inv.pens + value;
    if (pen <= 0) return;
    setInv({ ...inv, pens: pen });
    handleTotal(inv);
  };
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={() => handleBooks(1)}>
          +
        </button>
        <button className="circlularButton" onClick={() => handleBooks(-1)}>
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={() => handleNotebooks(1)}>
          +
        </button>
        <button className="circlularButton" onClick={() => handleNotebooks(-1)}>
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={() => handlePens(1)}>
          +
        </button>
        <button className="circlularButton" onClick={() => handlePens(-1)}>
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {total}
    </div>
  );
};
