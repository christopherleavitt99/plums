// components/hyperlinkintext.js

import { SetStateAction, useState } from 'react';

const EditableTextBox = () => {
const [content, setContent] = useState('');

const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setContent(e.target.value);
};

return (
    <div>
      <textarea value={content} onChange={handleChange} />
      <div>
        
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default EditableTextBox;