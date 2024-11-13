'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { currentUser } from '@clerk/nextjs'
import { ConnectionsProvider } from '@/providers/connection-provider'
import EditorProvider from '@/providers/editor-provider'
import EditorCanvas from './[editorId]/_components/editor-canvas'


type Props = {}

const Page = async (props: Props) => {
  const router = useRouter()
  const [workflowLoaded, setWorkflowLoaded] = useState(false)

  useEffect(() => {
    const fetchAndRedirect = async () => {
      const user = await currentUser()
      if (!user) {
        router.push('/login')
        return
      }

      setWorkflowLoaded(true)
    }

    fetchAndRedirect()
  }, [router])

  if (!workflowLoaded) {
    return <p>Loading...</p>
  }

  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas />
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  )
}

export default Page
