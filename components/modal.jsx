"use client";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="bg-[white] p-[20px] rounded-[8px] min-w-[300px] relative">
        <button className="absolute top-[10px] right-[10px] border-[none] bg-transparent cursor-pointer" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}