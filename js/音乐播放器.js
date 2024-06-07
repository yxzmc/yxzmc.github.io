document.addEventListener('DOMContentLoaded', function() {
    var player = document.getElementById('audioPlayer');
    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');
    var nextButton = document.getElementById('nextButton');
    var songList = document.getElementById('song-list');
    var songTitle = document.getElementById('song-title');
    var songs = [
        { title: '《日常》【OP】nichijou', src: '音乐/《日常》【OP】nichijou_音频.mp4' },
        { title: '《日常》【OP】nichijou2', src: '音乐/《日常》【OP】nichijou 2_音频.mp4' },
        { title: 'ambivalent world-神原骏河', src: '音乐/ambivalent world-神原骏河_音频.mp4' },
        { title: 'azure-TrySail', src: '音乐/azure-TrySail_音频.mp4' },
        { title: 'border-ClariS', src: '音乐/border-ClariS_音频.mp4' },
        { title: 'chocolate insomnia-羽川翼', src: '音乐/chocolate insomnia-羽川翼_音频.mp4' },
        { title: 'dark cherry mystery-忍野扇', src: '音乐/dark cherry mystery-忍野扇_音频.mp4' },
        { title: 'Decent Black-忍野扇', src: '音乐/Decent Black-忍野扇_音频.mp4' },
        { title: 'dreamy date drive-战场原黑仪', src: 'dreamy date drive-战场原黑仪_音频.mp4' },
        { title: 'happy bite-八九寺真霄', src: '音乐/happy bite-八九寺真霄_音频.mp4' },
        { title: 'marshmallow justice-阿良良木火怜', src: '音乐/marshmallow justice-阿良良木火怜_音频.mp4' },
        { title: 'mathemagics-老仓育', src: '音乐/mathemagics-老仓育_音频.mp4' },
        { title: 'perfect slumbers-羽川翼', src: '音乐/perfect slumbers-羽川翼_音频.mp4' },
        // 更多歌曲...
    ];
    var currentSongIndex = 0;

    // 渲染歌曲列表
    songs.forEach(function(song, index) {
        var listItem = document.createElement('li');
        listItem.textContent = song.title;
        listItem.onclick = function() { playSong(index); };
        songList.appendChild(listItem);
    });

    // 播放指定索引的歌曲
    function playSong(index) {
        currentSongIndex = index;
        player.src = songs[index].src;
        songTitle.textContent = songs[index].title;
        updateButtonStates();
        player.play();
    }

    // 更新播放/暂停按钮状态
function updateButtonStates() {
    playButton.classList[player.paused ? 'add' : 'remove']('hidden');
    pauseButton.classList[player.paused ? 'remove' : 'add']('hidden');
}

    // 绑定播放和暂停按钮事件
    playButton.addEventListener('click', function() {
        player.play();
        updateButtonStates();
    });

    pauseButton.addEventListener('click', function() {
        player.pause();
        updateButtonStates();
    });

    // 绑定下一首按钮事件
    nextButton.addEventListener('click', function() {
        playSong((currentSongIndex + 1) % songs.length);
    });

    // 监听播放和暂停事件
    player.addEventListener('play', updateButtonStates);
    player.addEventListener('pause', updateButtonStates);
});