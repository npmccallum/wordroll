class Song {
    constructor(file, end) {
        this.start = end - 180;
        this.end = end;

        this.audio = new Audio();
        this.audio.currentTime = this.start;
        this.audio.volume = 0.0;
        this.audio.src = file;

        this.audio.addEventListener('error', function () {
            console.log("error");
        }, false);

        this.audio.addEventListener('playing', function () {
            console.log("playing");
            let fade = setInterval(function () {
                console.log("fading");
                let next = this.audio.volume + 0.1;
                this.audio.volume = next > 1.0 ? 1.0 : next;
                if (this.audio.volume == 1.0) {
                    clearInterval(fade);
                }
            }.bind(this), 200);
        }.bind(this), false);
    }

    play(progress, ended) {
        this.audio.addEventListener('timeupdate', function () {
            let remaining = this.end - this.audio.currentTime;
            let duration = this.end - this.start;
            if (remaining <= 0) {
                this.audio.pause();
                this.audio.currentTime = this.start;
                this.audio.volume = 0.0;
                ended();
            } else {
                progress(remaining / duration);
            }
        }.bind(this), false);

        this.audio.play();
    }
}

class Music {
    constructor() {
        this.songs = [
            new Song("music/crowander-the.grasshopper.mp3", 194.0),
            new Song("music/crowander-come.to.an.end.mp3", 218.75),
            new Song("music/crowander-in.sweden.mp3", 272.0),
            new Song("music/crowander-fairies.mp3", 200.0),
            new Song("music/crowander-still.mp3", 184.0),
            new Song("music/crowander-film.mp3", 274.0),


        ];
    }

    play(progress, ended) {
        this.songs[Math.floor(Math.random() * this.songs.length)].play(progress, ended);
    }
}