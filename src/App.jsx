import { useState, useEffect } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    if (enabled) {
      window.addEventListener("pointermove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("pointermove", handleMouseMove)
    }
  }, [enabled])

  return (
    <main>
      <div style={{
          position: "absolute",
          top: -20,
          left: -20,
          width: 40,
          height: 40,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "3px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      ></div>
      <h1>Mouse Follower</h1>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Disable" : "Enable"} Mouse Tracking
      </button>
    </main>
  )
}

export default App
