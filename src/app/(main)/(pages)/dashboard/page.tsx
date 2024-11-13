import React from 'react'
import EditorCanvas from '../workflows/editor/[editorId]/_components/editor-canvas'

type Props = {}

function DashboardPage({ }: Props) {
  return (
    <>
      {/* <div className='flex flex-col gap-4 relative'>
        <h1 className='text-4xl sticky top-0 z-[10] bg-background/50 backdrop-blur-lg flex items-center border-b'> */}
          <EditorCanvas />
        {/* </h1>
      </div> */}
    </>
  )
}

export default DashboardPage