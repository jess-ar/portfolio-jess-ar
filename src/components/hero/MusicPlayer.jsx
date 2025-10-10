import { useRef, useState, useEffect } from "react";

const MusicPlayer = ({ tracks, initialTrack = 0, skipStartSeconds = 3 }) => {
  const audioRef = useRef(null);

  const [currentTrack, setCurrentTrack] = useState(initialTrack);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);


  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = tracks[currentTrack].src;
      audioRef.current.load();
      audioRef.current.currentTime = skipStartSeconds;
      audioRef.current.volume = volume;

      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.currentTime = Math.max(
        audioRef.current.currentTime,
        skipStartSeconds
      );
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const realCurrentTime = audioRef.current.currentTime - skipStartSeconds;
    setCurrentTime(Math.max(realCurrentTime, 0));
    setDuration(audioRef.current.duration - skipStartSeconds);
  };

  const handleSeek = (e) => {
    const normalizedSeekTime = (e.target.value / 100) * duration + skipStartSeconds;
    audioRef.current.currentTime = normalizedSeekTime;
    setCurrentTime(normalizedSeekTime - skipStartSeconds);
  };

  const handleNext = () => {
    const nextTrack = (currentTrack + 1) % tracks.length;
    setCurrentTrack(nextTrack);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    const prevTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    setCurrentTrack(prevTrack);
    setIsPlaying(false);
  };

  const handleTrackEnd = () => {
    const nextTrack = (currentTrack + 1) % tracks.length;
    setCurrentTrack(nextTrack);
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const wasMuted = !isMuted;
      setIsMuted(wasMuted);

      if (wasMuted) {
        audioRef.current.muted = true;
      } else {
        audioRef.current.muted = false;
      }
    }
  };


  return (
    <div className="bg-[#0b3c65b7] text-white rounded-lg p-4 shadow-md w-full max-w-[414px] min-w-[280px]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h3 className="text-sm font-bold truncate">
            {tracks[currentTrack].title}
          </h3>
          <p className="text-xs text-[#D7C616] truncate">
            {tracks[currentTrack].artist}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-3 md:mt-0">
          <button
            onClick={handlePrev}
            className="w-8 h-8 bg-[#469396] rounded-full flex items-center justify-center hover:bg-[#D7C616]"
            aria-label="Anterior"
          >
            <i className="fas fa-backward text-white"></i>
          </button>
          <button
            onClick={togglePlay}
            className="w-10 h-10 bg-[#0087CD] rounded-full flex items-center justify-center text-black hover:bg-[#D7C616]"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <i
              className={`fas ${isPlaying ? "fa-pause" : "fa-play"} text-white`}
            ></i>
          </button>
          <button
            onClick={handleNext}
            className="w-8 h-8 bg-[#469396] rounded-full flex items-center justify-center hover:bg-[#D7C616]"
            aria-label="Siguiente"
          >
            <i className="fas fa-forward text-white"></i>
          </button>
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="mt-4">
        <input
          type="range"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{
            background: "linear-gradient(to right,#D7C616, #469396, #0087CD)",
          }}
        />
        <div className="flex justify-between text-xs mt-1">
          <span>{Math.floor(currentTime)}s</span>
          <span>{Math.floor(duration)}s</span>
        </div>
      </div>

      {/* Control de volumen */}
      <div className="flex flex-col items-center mt-4">
        <div className="flex items-center gap-2 w-40">

          {/* Botón de mute */}
          <button onClick={toggleMute} className="focus:outline-none">
            <i className={`fas ${isMuted ? "fa-volume-mute" : "fa-volume-down"}`}></i>
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => {
              const newVolume = parseFloat(e.target.value);
              setVolume(newVolume);

              if (audioRef.current) {
                audioRef.current.volume = newVolume;
                if (newVolume === 0) {
                  setIsMuted(true);
                  audioRef.current.muted = true;
                } else {
                  setIsMuted(false);
                  audioRef.current.muted = false;
                }
              }
            }}
            className="volume-slider w-full"
            style={{
              '--volumen-percentage': `${volume * 100}%`,
            }}
          />

          <i className="fas fa-volume-up text-sm"></i>
        </div>
      </div>

      <div className="overflow-x-auto mt-4">
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          onEnded={handleTrackEnd}
          src={tracks[currentTrack].src}
        />
      </div>

      {/* Puntos de navegación de pista */}
      <div className="flex justify-center mt-4 space-x-2">
        {tracks.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTrack === index
              ? "bg-[#D7C616] scale-125"
              : "bg-gray-500"
              }`}
            onClick={() => {
              setCurrentTrack(index);
              setIsPlaying(false); // Solo cambia, no reproduce
            }}
            aria-label={`Seleccionar pista ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;