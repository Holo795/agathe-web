import { useEffect, useRef, useState } from 'react'

export default function BackgroundMusic() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.22

    const tryPlay = () =>
      audio.play().then(() => setPlaying(true)).catch(() => {})

    tryPlay()

    const onInteraction = () => {
      if (audio.paused) tryPlay()
    }
    window.addEventListener('pointerdown', onInteraction)
    window.addEventListener('keydown', onInteraction)

    return () => {
      window.removeEventListener('pointerdown', onInteraction)
      window.removeEventListener('keydown', onInteraction)
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/musics/background.mp3" loop preload="auto" />
      <button
        className={`audio-toggle ${playing ? 'playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Couper la musique' : 'Activer la musique'}
        title={playing ? 'Couper la musique' : 'Activer la musique'}
      >
        <span className="audio-bars" aria-hidden="true">
          <i></i><i></i><i></i><i></i>
        </span>
      </button>
    </>
  )
}
