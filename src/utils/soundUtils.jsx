import { Howl } from "howler";

/**
 * Reproduce un sonido si no está muteado.
 * @param {string} src
 * @param {boolean} isMuted
 * @param {number} volume 
 */
export const playSound = (src, isMuted, volume = 1) => {
    if (isMuted) return;

    const sound = new Howl({
        src: [src],
        volume,
    });

    sound.play();
};
