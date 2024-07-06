import React, { useRef, useState, useEffect } from "react";
import { MdPlayArrow, MdPause, MdVolumeUp, MdVolumeOff } from "react-icons/md";
import "./styles.css"; // Arquivo de estilos CSS para o componente

const CustomVideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Função para alternar play/pause
  const togglePlayPause = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Função para alternar mudo
  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // Função para controlar o volume
  const handleVolumeChange = (e) => {
    const value = parseFloat(e.target.value);
    videoRef.current.volume = value;
    setVolume(value);
    if (value === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  // Função para controlar o progresso do vídeo
  const handleProgressChange = (e) => {
    const value = parseFloat(e.target.value);
    videoRef.current.currentTime = value;
    setCurrentTime(value);
  };

  // Atualiza o estado do tempo atual e duração do vídeo
  const updateTime = () => {
    setCurrentTime(videoRef.current.currentTime);
    setDuration(videoRef.current.duration);
  };

  // Efeito para adicionar eventos de tempo e atualização
  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener("timeupdate", updateTime);
    return () => {
      video.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  return (
    <div className="custom-video-player">
      <video ref={videoRef} className="video" controls={false}>
        <source src="/assets/VIDEO_PASTOR.mov" type="video/webm" />
        <source src="/assets/VIDEO_PASTOR.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>
      <div className="custom-controls">
        <button className="control-button" onClick={togglePlayPause}>
          {isPlaying ? <MdPause /> : <MdPlayArrow />}
        </button>
        <input
          className="volume-slider"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
        <button className="control-button" onClick={toggleMute}>
          {isMuted ? <MdVolumeOff /> : <MdVolumeUp />}
        </button>
        <input
          className="seek-slider"
          type="range"
          min="0"
          max={duration}
          step="1"
          value={currentTime}
          onChange={handleProgressChange}
        />
        <span className="time-display">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
    </div>
  );
};

// Função utilitária para formatar tempo (segundos para MM:SS)
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default CustomVideoPlayer;
