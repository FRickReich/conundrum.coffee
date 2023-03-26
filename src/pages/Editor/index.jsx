import React from 'react';
// import { useParams } from 'react-router';

import { EditorProvider, useEditor } from './../../context/EditorContext'
import EditorLayout from '../../layouts/EditorLayout';

const Editor = () =>
{
    // const { username, project } = useParams();
    // <p>Hello World! - {username} { project }</p>

    return(

        <EditorProvider>
            <EditorLayout></EditorLayout>
        </EditorProvider>
    );
};

export default Editor;
