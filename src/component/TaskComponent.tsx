// src/TaskComponent.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import TaskModal from "./TaskModel"; // Ensure this import is correct

interface TaskComponentProps {
  title: string;
  description: string;
  onComplete: () => void;
}

const TaskComponent: React.FC<TaskComponentProps> = ({
  title,
  description,
  onComplete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        className="bg-[#d4b299] shadow-md rounded-lg p-4 mb-4"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <button
          onClick={handleOpenModal}
          className="mt-2 bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600"
        >
          View Task
        </button>
        <button
          className="mt-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 ml-2"
          onClick={onComplete}
        >
          Complete Task
        </button>
      </motion.div>

      {isModalOpen && (
        <TaskModal
          title={title}
          description={description}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default TaskComponent;
