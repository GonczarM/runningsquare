
const setupAudio = () => {
    const musicAudio = new Howl ({
        src: ["../models/music.mp3"],
        autoplay:true,
        loop:true
    });
    musicAudio.play();
}
export default setupAudio