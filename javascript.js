// Background music: play automatically on page load and allow toggling mute/unmute

window.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById("bg-music");
    const toggleMusicBtn = document.getElementById("toggle-music");

    if (music) {
        music.play().catch(() => {}); // Ignore errors if already playing or autoplay is blocked
    }

    if (toggleMusicBtn && music) {
        toggleMusicBtn.textContent = music.muted ? "🔇" : "🌚";

        toggleMusicBtn.addEventListener("click", () => {
            music.muted = !music.muted;
            toggleMusicBtn.textContent = music.muted ? "🔇" : "🌚";
        });
    }
});