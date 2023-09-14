import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const Examination = ({ placeholder }) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	const config = useMemo(() => ({
		readonly: false,
		placeholder: placeholder || 'Start typing...'
	}), [placeholder]);

	const handleAddButton = () => {
		
		alert('Successufully Added!');
	};

	return (
		<div>
			<JoditEditor
				ref={editor}
				value={content}
				config={config}
				tabIndex={1}
				onBlur={(newContent) => setContent(newContent)}
				onChange={(newContent) => {}}
			/>

			<button className="joditbutton" onClick={handleAddButton}>Add</button>
		</div>
	);
};

export default Examination;
