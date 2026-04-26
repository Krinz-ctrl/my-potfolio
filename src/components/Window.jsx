import { useRef, useState } from "react";

function Window({ title, isOpen, onClose, children }) {
  const [position, setPosition] = useState({ x: 200, y: 100 });
  const windowRef = useRef(null);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  if (!isOpen) return null;

  const handleMouseDown = (e) => {
    if (!windowRef.current) return;

    e.preventDefault();

    const rect = windowRef.current.getBoundingClientRect();

    isDragging.current = true;

    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    setPosition({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
  };

  const handleMouseUp = () => {
    isDragging.current = false;

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={windowRef}
      className="window"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="titlebar" onMouseDown={handleMouseDown}>
        {title}
        <span
          className="close"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={onClose}
        >
          X
        </span>
      </div>

      <div className="content">
        {children || `Your ${title} content here...`}
      </div>
    </div>
  );
}

export default Window;
