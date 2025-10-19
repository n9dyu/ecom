const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="logout-screen" onClick={onClose}>

        <div className="logout-card" onClick={(e) => e.stopPropagation()}>
            <h2>Logout</h2>
            <p>Are you sure you want to logout?</p>

            <div className="logout-btn">
                <button onClick={onClose} className="cancel cursor-pointer">Cancel</button>
                <button onClick={onConfirm} className="save cursor-pointer">Logout</button>
            </div>
        </div>
    </div>
  );
};

export default LogoutModal;
