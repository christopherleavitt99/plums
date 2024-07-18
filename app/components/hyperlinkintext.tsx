// components/hyperlinkintext.js

import { useState } from 'react';

const EditableTextBox = () => {
const [content, setContent] = useState('');



return (
    <div>
        <textarea value={content} onChange={handleChange} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
);
};

export default EditableTextBox;
