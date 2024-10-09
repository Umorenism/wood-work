// src/TaskModal.tsx
import React from "react";

interface TaskModalProps {
  title: string;
  description: string;
  onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({
  title,
  description,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-11/12 md:w-1/3">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={onClose}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskModal;
