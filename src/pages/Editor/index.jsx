import React from 'react';
import { useParams } from 'react-router';
import EditorLayout from '../../layouts/EditorLayout';

const Editor = () =>
{
    const { username, project } = useParams();

    return(
        // <p>Hello World! - {username} { project }</p>
            <EditorLayout></EditorLayout>
    );
};

export default Editor;
