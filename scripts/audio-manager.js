
const setupAudio = () => {
    const musicAudio = new Howl ({
        src: ["../assests/music.mp3"],
        autoplay:true,
        loop:true
    });
    musicAudio.play();
}
export default setupAudio