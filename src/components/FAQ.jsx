import React, { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b py-3 cursor-pointer"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">{question}</h3>
        <span>{open ? "−" : "+"}</span>
      </div>
      {open && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

export default FAQ;
