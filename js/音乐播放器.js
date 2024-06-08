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
        { title: 'dreamy date drive-战场原黑仪', src: '音乐/dreamy date drive-战场原黑仪_音频.mp4' },
        { title: 'happy bite-八九寺真霄', src: '音乐/happy bite-八九寺真霄_音频.mp4' },
        { title: 'marshmallow justice-阿良良木火怜', src: '音乐/marshmallow justice-阿良良木火怜_音频.mp4' },
        { title: 'mathemagics-老仓育', src: '音乐/mathemagics-老仓育_音频.mp4' },
        { title: 'perfect slumbers-羽川翼', src: '音乐/perfect slumbers-羽川翼_音频.mp4' },
        { title: 'SHIORI-ClariS', src: '音乐/SHIORI-ClariS_音频.mp4' },
        { title: 'snowdrop', src: '音乐/snowdrop-春奈露娜 河野万里奈_音频.mp4' },
        { title: 'staple stable-战场原黑仪', src: '音乐/staple stable-战场原黑仪_音频.mp4' },
        { title: 'sugar sweet nightmare', src: '音乐/sugar sweet nightmare-羽川翼(写实版)_音频.mp4' },
        { title: 'terminal terminal', src: '音乐/terminal terminal-八九寺真霄_音频.mp4' },
        { title: 'the last day of my adolescence', src: '音乐/the last day of my adolescence-神原骏河_音频.mp4' },
        { title: 'whiz-TrySail', src: '音乐/whiz-TrySail_音频.mp4' },
        { title: 'アイヲウタエ-春奈露娜', src: '音乐/アイヲウタエ-春奈露娜_音频.mp4' },
        { title: 'オレンジミント-斧乃木余接', src: '音乐/オレンジミント-斧乃木余接_音频.mp4' },
        { title: 'さよならのゆくえ-泷川亚理沙', src: '音乐/さよならのゆくえ-泷川亚理沙_音频.mp4' },
        { title: 'その声を覚えてる-河野万里奈', src: '音乐/その声を覚えてる-河野万里奈_音频.mp4' },
        { title: 'ナイショの話', src: '音乐/ナイショの話-ClariS_音频.mp4' },
        { title: 'もうそう♥えくすぷれす', src: '音乐/もうそう♥えくすぷれす-千石抚子_音频.mp4' },
        { title: '白金ディスコ', src: '音乐/白金ディスコ-阿良良木月火_音频.mp4' },
        { title: '别当欧尼酱了！OP', src: '音乐/别当欧尼酱了！OP&ED【1080P】_P1_OP_音频.mp4' },
        { title: '别当欧尼酱了！ED', src: '音乐/别当欧尼酱了！OP&ED【1080P】_P2_ED_音频.mp4' },
        { title: '二言目-战场原黒仪', src: '音乐/二言目-战场原黒仪_音频.mp4' },
        { title: '高分少女ED', src: '音乐/高分少女ED 放課後ディストラクション」- やくしまるえつこ(药师丸悦子)_音频.mp4' },
        { title: '帰り道-八九寺真霄', src: '音乐/帰り道-八九寺真霄_音频.mp4' },
        { title: '花痕 -shirushi- -河野万里奈', src: '音乐/花痕 -shirushi- -河野万里奈_音频.mp4' },
        { title: '君の知らない', src: '音乐/君の知らない物語 -supercell_音频.mp4' },
        { title: '恋爱循环-千石抚子', src: '音乐/恋爱循环-千石抚子_音频.mp4' },
        { title: '超炮1 OP1', src: '音乐/某科学的超电磁炮系列OP ED全合集 (AI画质提升版)_P1_超炮1 OP1_音频.mp4' },
        { title: '超炮1 OP2', src: '音乐/某科学的超电磁炮系列OP ED全合集 (AI画质提升版)_P2_超炮1 OP2_音频.mp4' },
        { title: '木枯らしセンティメント', src: '音乐/木枯らしセンティメント-战场原黑仪  贝木泥舟_音频.mp4' },
        { title: '夕立方程式', src: '音乐/夕立方程式-老仓育_音频.mp4' },
        { title: '消えるdaydream-河野万里奈', src: '音乐/消えるdaydream-河野万里奈_音频.mp4' },
        { title: '千恋万花', src: '音乐/千恋万花.mp4' },
        { title: '葬送的芙莉莲op2', src: '音乐/葬送的芙莉莲op2.mp4' },


        // 更多歌曲...{ title: '123', src: '音乐/123.mp4' },
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