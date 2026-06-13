import { useEffect, useRef } from 'react'
import bodyHTML from './bodyContent.html?raw'
import appScript from './appScript.js?raw'

export default function App() {
  const containerRef = useRef(null)
  const scriptInjected = useRef(false)

  useEffect(() => {
    if (scriptInjected.current) return
    scriptInjected.current = true

    // Inject the original script verbatim as a real <script> tag so it runs
    // in global scope (it relies on global `lucide`, `Chart`, and defines
    // global functions referenced by inline onclick="..." handlers).
    const scriptEl = document.createElement('script')
    scriptEl.text = appScript
    document.body.appendChild(scriptEl)

    return () => {
      document.body.removeChild(scriptEl)
    }
  }, [])

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: bodyHTML }} />
  )
}
