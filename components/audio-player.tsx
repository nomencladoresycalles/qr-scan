"use client"

import React from "react"

import { useCallback, useEffect, useRef, useState } from "react"
import { Pause, Play, Volume2, VolumeX } from "lucide-react"

export function AudioPlayer({
  src,
  title,
}: {
  src?: string
  title?: string
}) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)

  const audioSrc =
    src || "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60)
    const secs = Math.floor(time % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(() => {})
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    const bar = progressRef.current
    if (!audio || !bar) return
    const rect = bar.getBoundingClientRect()
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    audio.currentTime = pct * duration
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onTimeUpdate = () => setCurrentTime(audio.currentTime)
    const onLoadedMetadata = () => setDuration(audio.duration)
    const onEnded = () => setIsPlaying(false)
    audio.addEventListener("timeupdate", onTimeUpdate)
    audio.addEventListener("loadedmetadata", onLoadedMetadata)
    audio.addEventListener("ended", onEnded)
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate)
      audio.removeEventListener("loadedmetadata", onLoadedMetadata)
      audio.removeEventListener("ended", onEnded)
    }
  }, [])

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <div className="w-full rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {/* Title */}
      <p className="mb-4 text-center text-sm font-medium text-muted-foreground">
        {title || "Presiona play para escuchar"}
      </p>

      {/* Big play button */}
      <div className="mb-5 flex items-center justify-center">
        <button
          onClick={togglePlay}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform active:scale-95 md:h-20 md:w-20"
          aria-label={isPlaying ? "Pausar audio" : "Reproducir audio"}
        >
          {isPlaying ? (
            <Pause className="h-7 w-7 md:h-8 md:w-8" />
          ) : (
            <Play className="ml-1 h-7 w-7 md:h-8 md:w-8" />
          )}
        </button>
      </div>

      {/* Progress bar */}
      <div
        ref={progressRef}
        className="group relative mb-2 h-2 cursor-pointer rounded-full bg-muted"
        onClick={seek}
        role="slider"
        aria-label="Progreso del audio"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
      >
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-primary bg-card shadow-sm transition-opacity"
          style={{ left: `calc(${progress}% - 8px)` }}
        />
      </div>

      {/* Time + mute */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">
          {formatTime(currentTime)}
        </span>
        <button
          onClick={toggleMute}
          className="rounded-full p-1.5 text-muted-foreground transition-colors hover:text-foreground"
          aria-label={isMuted ? "Activar sonido" : "Silenciar"}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </button>
        <span className="font-mono text-xs text-muted-foreground">
          {formatTime(duration)}
        </span>
      </div>
    </div>
  )
}
