$(document).ready(function() {
    let firstSongName: string = $('.player__song').text();
    cutSongName(firstSongName);
    $( window ).resize(function() {
        cutSongName(firstSongName);
    });
    function cutSongName(songName: string): void{
        let width = $(window).width() || null;
        if(width){
            if ( width < 450) {
                let a = songName;
                if (a.length > 23) {
                    a = a.substring(0, 23);
                    a += "...";
                }
                $('.player__song').text(a);
            }
        }
    }
});

