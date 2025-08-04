import React from 'react';
import { useEffect } from 'react';
import { useProduct } from '../contextAPI/FuncContext'; // <-- import context

const Notification = () => {

  const { notif, setNotif } = useProduct(); // get from context
    const { message, type } = notif;

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setNotif({ message: '', type: '' });
      }, 3000); // hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [message, setNotif, notif]);


  const baseStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    padding: '14px 22px',
    color: 'white',
    borderRadius: '8px',
    fontSize: '16px',
    zIndex: 9999,
    animation: 'fadeInOut 3s ease-in-out',
    backgroundColor:
      type === 'success'
        ? '#28a745'
        : type === 'error'
        ? '#dc3545'
        : '#007bff',
  };

  if (!message) return null;

  return (
    <>
      <div style={baseStyle}>{message}</div>

      <style>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </>
  );
};

export default Notification;
