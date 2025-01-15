import { useRef, useState, useEffect } from "react";

const MusicPlayer = ({ tracks, initialTrack = 0, skipStartSeconds = 3 }) => {
    const audioRef = useRef(null);
    const [currentTrack, setCurrentTrack] = useState(initialTrack);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = tracks[currentTrack].src;
            audioRef.current.load();
            audioRef.current.currentTime = skipStartSeconds;
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [currentTrack]);

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

    return (
        <div className="bg-[#0b3c65b7] text-white rounded-lg p-4 shadow-md w-full max-w-sm ">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-sm font-bold">{tracks[currentTrack].title}</h3>
                    <p className="text-xs text-[#D7C616]">
                        {tracks[currentTrack].artist}
                    </p>
                </div>
                <div className="flex items-center gap-2 text-xs ">
                    <button
                        onClick={handlePrev}
                        className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 bg-[#469396] rounded-full flex items-center justify-center hover:bg-[#D7C616]"
                        aria-label="Anterior"
                    >
                        <i className="fas fa-backward text-white"></i>
                    </button>
                    <button
                        onClick={togglePlay}
                        className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 bg-[#0087CD] rounded-full flex items-center justify-center text-black"
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"} text-white`}></i>
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 bg-[#469396] rounded-full flex items-center justify-center hover:bg-[#D7C616]"
                        aria-label="Siguiente"
                    >
                        <i className="fas fa-forward text-white"></i>
                    </button>
                </div>
            </div>
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
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleTimeUpdate}
                src={tracks[currentTrack].src}
            />
        </div>
    );
};

export default MusicPlayer;