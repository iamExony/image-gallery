// Inside SortableUser.js

import React, { useState } from "react";
import { useSortable, CSS } from "@dnd-kit/sortable";
import Modal from "./Modal"; // Import the Modal component

const SortableUser = ({ user }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: user.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    textAlign: "center",
    position: "relative", // Add relative positioning for overlay
  };

  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)", // Transparent black overlay
    opacity: isHovered ? 1 : 0, // Show overlay on hover
    transition: "opacity 0.3s", // Smooth transition
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white", // Title text color
    fontSize: "1.5rem", // Title font size
    fontWeight: "bold", // Title font weight
    cursor: "pointer", // Add pointer cursor for clickable effect
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="user-container"
      onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on hover
      onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
      onClick={() => setIsModalOpen(true)} // Open modal when clicked
    >
      {/* ... (rest of your code remains the same) */}
      {/* Overlay with title */}
      <div style={overlayStyle}>{user.title}</div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imgSrc={user.imgsrc}
      />
    </div>
  );
};

export default SortableUser;
