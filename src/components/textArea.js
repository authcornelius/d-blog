import React, { useRef, useEffect } from 'react';

const Textarea = ({ value, onChange }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      className="form-control px-3"
      style={{ overflow: 'hidden', resize: 'none' }}
      placeholder='The body of the post'
    />
  );
};

export default Textarea;
