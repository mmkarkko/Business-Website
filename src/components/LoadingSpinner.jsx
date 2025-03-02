// src/components/LoadingSpinner.jsx
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-circle-dot"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
