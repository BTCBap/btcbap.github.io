import { useRef, useState } from 'react'

export default function AudioPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play()
      setPlaying(true)
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/content/wanted_outlaw.mp3" />
      <button onClick={toggle} className="btn btn-circle btn-ghost fixed top-4 left-4 z-50">
        <i className={`fas ${playing ? 'fa-stop' : 'fa-play'}`}></i>
      </button>
    </>
  )
}
