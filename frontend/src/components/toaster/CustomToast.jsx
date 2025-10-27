import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const baseStyle = {
  borderRadius: '12px',
  padding: '16px 20px',
  fontWeight: 600,
  fontSize: '1rem',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
};

const themeStyles = {
  light: {
    success: { background: '#22c55e', color: '#fff' },
    error: { background: '#ef4444', color: '#fff' },
    warning: { background: '#facc15', color: '#000' },
    normal: { background: '#f3f4f6', color: '#111827' },
  },
  blueDark: {
    success: { background: '#3B82F6', color: '#fff' },
    error: { background: '#ef4444', color: '#fff' },
    warning: { background: '#facc15', color: '#000' },
    normal: { background: '#1F2937', color: '#E0F2FE' },
  },
};

const CustomToast = ({ msg, type = 'normal', show, onClose }) => {
  useEffect(() => {
    if (show && msg) {
      const currentTheme = document.documentElement.dataset.theme || 'light';
      const style = { ...baseStyle, ...themeStyles[currentTheme][type] };
      const content = typeof msg === 'string' ? msg : msg;

      switch (type) {
        case 'success':
          toast.success(content, { style });
          break;
        case 'error':
          toast.error(content, { style });
          break;
        case 'warning':
          toast(content, { style, icon: '⚠️' });
          break;
        default:
          toast(content, { style });
      }

      if (onClose) onClose();
    }
  }, [show, msg, type, onClose]);

  return <Toaster position="top-right" reverseOrder={false} />;
};

export default CustomToast;
