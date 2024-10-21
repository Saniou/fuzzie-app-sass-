import React from 'react';
import ReactFlow from 'reactflow'
import 'reactflow/dist/style.css';
import { EditorNodeType } from '@/lib/types';
import { useEditor } from '@/providers/editor-provider';

const initialNodes: EditorNodeType[] = [];
const initialEdges: { id: string; source: string; target: string }[] = []

const EditorCanvas = () => {

    const { dispatch, state } = useEditor()

    // const nodeTypes = useMemo(
    //     () => ({
    //         Action: EditorCanvasCardSingle,
    //         Trigger: EditorCanvasCardSingle,
    //         Email: EditorCanvasCardSingle,
    //         Condition: EditorCanvasCardSingle,
    //         AI: EditorCanvasCardSingle,
    //         Slack: EditorCanvasCardSingle,
    //         'Google Drive': EditorCanvasCardSingle,
    //         Notion: EditorCanvasCardSingle,
    //         Discord: EditorCanvasCardSingle,
    //         'Custom Webhook': EditorCanvasCardSingle,
    //         'Google Calendar': EditorCanvasCardSingle,
    //         Wait: EditorCanvasCardSingle,
    //     }),
    //     []
    // )

    return (
        <div>Editor</div>
    );
}

export default EditorCanvas