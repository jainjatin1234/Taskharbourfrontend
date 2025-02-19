import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCard = ({
  title,
  body,
  id,
  delid,
  showUpdate,
  updateId,
  toBeUpdate,
}) => {
  return (
    <div className="flex flex-col w-full p-4 bg-white shadow-md rounded-lg">
    <div className="mb-4">
      <h5 className="text-xl font-semibold">{title}</h5>
      <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-full">{body.slice(0, 80)}...</p>
    </div>
    <div className="flex justify-around">
      <button
        onClick={() => {
          showUpdate("block");
          toBeUpdate(updateId);
        }}
        className="flex items-center px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 duration-300"
        aria-label="Update Todo"
      >
        <GrDocumentUpdate className="text-xl mr-1" />
        Update
      </button>
      <button
        onClick={() => {
          delid(id);
        }}
        className="flex items-center px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 duration-300"
        aria-label="Delete Todo"
      >
        <AiFillDelete className="text-xl mr-1" />
        Delete
      </button>
    </div>
  </div>
  );
};

export default TodoCard;
