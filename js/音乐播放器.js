document.addEventListener('DOMContentLoaded', function() {
    var player = document.getElementById('audioPlayer');
    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');
    var nextButton = document.getElementById('nextButton');
    var previousButton = document.getElementById('previousButton');
    var randomButton = document.getElementById('randomButton');
    var songList = document.getElementById('song-list');
    var songTitle = document.getElementById('song-title');
    var progressBar = document.getElementById('progressBar');
    var volumeControl = document.getElementById('volumeControl');
    var songs = [
        { title: '《孤独摇滚》OP「青春コンプレックス」', src: '音乐/《孤独摇滚》OP「青春コンプレックス」.mp4' },
        { title: '【千恋万花op】恋ひ恋ふ縁', src: '音乐/【千恋万花op】恋ひ恋ふ縁.mp4' },
        { title: '败犬女主太多了！ED「LOVE_2000」__八奈見杏菜', src: '音乐/败犬女主太多了！ED「LOVE_2000」__八奈見杏菜.mp4' },
        { title: '别当欧尼酱了！OP', src: '音乐/别当欧尼酱了！OP.mp4' },
        { title: '别当欧尼酱了！ED', src: '音乐/别当欧尼酱了！ED.mp4' },
        { title: '抚物语_OP', src: '音乐/抚物语_OP.mp4' },
        { title: '高分少女ed', src: '音乐/高分少女ed.mp4' },
        { title: '葬送的芙莉莲_特殊ED「bliss」', src: '音乐/葬送的芙莉莲_特殊ED「bliss」.mp4' },
        { title: '葬送的芙莉莲_主题曲OP「勇者」', src: '音乐/葬送的芙莉莲_主题曲OP「勇者」.mp4' },
        { title: '葬送的芙莉莲Anytime_Anywhere', src: '音乐/葬送的芙莉莲Anytime_Anywhere.mp4' },
        { title: '葬送的芙莉莲OP2「晴る_放晴」', src: '音乐/葬送的芙莉莲OP2「晴る_放晴」.mp4' },

        
        { title: '二言目-战场原黒仪', src: '音乐/二言目-战场原黒仪.mp4' },
        { title: 'ambivalent_world-神原骏河', src: '音乐/ambivalent_world-神原骏河.mp4' },
        { title: 'azure-TrySail', src: '音乐/azure-TrySail.mp4' },
        { title: 'border-ClariS', src: '音乐/border-ClariS.mp4' },
        { title: 'chocolate_insomnia-羽川翼', src: '音乐/chocolate_insomnia-羽川翼.mp4' },
        { title: 'dark_cherry_mystery-忍野扇_', src: '音乐/dark_cherry_mystery-忍野扇_.mp4' },
        { title: 'Decent_Black-忍野扇', src: '音乐/Decent_Black-忍野扇.mp4' },
        { title: 'dreamy_date_drive-战场原黑仪', src: '音乐/dreamy_date_drive-战场原黑仪.mp4' },
        { title: 'happy_bite-八九寺真霄', src: '音乐/happy_bite-八九寺真霄.mp4' },
        { title: 'marshmallow_justice-阿良良木火怜', src: '音乐/marshmallow_justice-阿良良木火怜.mp4' },
        { title: 'mathemagics-老仓育', src: '音乐/mathemagics-老仓育.mp4' },
        { title: 'perfect_slumbers-羽川翼', src: '音乐/perfect_slumbers-羽川翼.mp4' },
        { title: 'SHIORI-ClariS', src: '音乐/SHIORI-ClariS.mp4' },
        { title: 'snowdrop-春奈露娜_河野万里奈', src: '音乐/snowdrop-春奈露娜_河野万里奈.mp4' },
        { title: 'staple_stable-战场原黑仪', src: '音乐/staple_stable-战场原黑仪.mp4' },
        { title: 'sugar_sweet_nightmare-羽川翼', src: '音乐/sugar_sweet_nightmare-羽川翼.mp4' },
        { title: 'terminal_terminal-八九寺真霄', src: '音乐/terminal_terminal-八九寺真霄.mp4' },
        { title: 'the_last_day_of_my_adolescence-神原骏河', src: '音乐/the_last_day_of_my_adolescence-神原骏河.mp4' },
        { title: 'whiz-TrySail', src: '音乐/whiz-TrySail.mp4' },
        { title: 'アイヲウタエ-春奈露娜', src: '音乐/アイヲウタエ-春奈露娜.mp4' },
        { title: 'オレンジミント-斧乃木余接', src: '音乐/オレンジミント-斧乃木余接.mp4' },
        { title: 'さよならのゆくえ-泷川亚理沙', src: '音乐/さよならのゆくえ-泷川亚理沙.mp4' },
        { title: 'その声を覚えてる-河野万里奈', src: '音乐/その声を覚えてる-河野万里奈.mp4' },
        { title: 'ナイショの話-ClariS', src: '音乐/ナイショの話-ClariS.mp4' },
        { title: 'もうそう♥えくすぷれす-千石抚子', src: '音乐/もうそう♥えくすぷれす-千石抚子.mp4' },
        { title: '白金ディスコ-阿良良木月火', src: '音乐/白金ディスコ-阿良良木月火.mp4' },
        { title: '帰り道-八九寺真霄', src: '音乐/帰り道-八九寺真霄.mp4' },
        { title: '花痕_-shirushi-_-河野万里奈', src: '音乐/花痕_-shirushi-_-河野万里奈.mp4' },
        { title: '君の知らない物語_-supercell_', src: '音乐/君の知らない物語_-supercell_.mp4' },
        { title: '恋爱循环-千石抚子', src: '音乐/恋爱循环-千石抚子.mp4' },
        { title: '消えるdaydream-河野万里奈', src: '音乐/消えるdaydream-河野万里奈.mp4' },
        // 更多歌曲...{ title: '123', src: '音乐/123.mp4' },
    ];
    var currentSongIndex = 0;

    // 渲染歌曲列表
    songs.forEach(function(song, index) {
        var listItem = document.createElement('li');
        listItem.textContent = song.title;
        listItem.onclick = function() {
            playSong(index);
        };
        songList.appendChild(listItem);
    });

    var songsWithVolumeLimit = [
        { title: '【千恋万花op】恋ひ恋ふ縁' , maxVolume: 0.3 },
        { title: '《孤独摇滚》OP「青春コンプレックス」' , maxVolume: 0.3 },
        { title: '败犬女主太多了！ED「LOVE_2000」__八奈見杏菜', maxVolume: 0.3  },
        { title: '高分少女ed', maxVolume: 0.5  },
        { title: '葬送的芙莉莲_特殊ED「bliss」', maxVolume: 0.3 },
        { title: '葬送的芙莉莲_主题曲OP「勇者」',maxVolume: 0.3  },
        { title: '葬送的芙莉莲Anytime_Anywhere',maxVolume: 0.3  },
        { title: '葬送的芙莉莲OP2「晴る_放晴」',maxVolume: 0.3  },
        // ... 其他需要音量限制的歌曲 ...
    ];

    function playSong(index) {
        var song = songs[index];
        songTitle.textContent = song.title;
        player.src = song.src;
        currentSongIndex = index; // 更新当前歌曲索引

        var limitedVolume = songsWithVolumeLimit.find(function(songInfo) {
            return songInfo.title === song.title;
        });
        if (limitedVolume) {
            player.volume = limitedVolume.maxVolume;
        } else {
            player.volume = parseFloat(volumeControl.value);
        }

        updateButtonStates();
        player.play();
    }

    function updateButtonStates() {
        playButton.classList.toggle('hidden', !player.paused);
        pauseButton.classList.toggle('hidden', player.paused);
    }

    playButton.addEventListener('click', function() {
        player.paused ? player.play() : player.pause();
        updateButtonStates();
    });

    nextButton.addEventListener('click', function() {
        playSong((currentSongIndex + 1) % songs.length);
    });

    previousButton.addEventListener('click', function() {
        playSong((currentSongIndex - 1 + songs.length) % songs.length);
    });

    randomButton.addEventListener('click', function() {
        playSong(Math.floor(Math.random() * songs.length));
    });

    player.addEventListener('timeupdate', function() {
        var percentage = (player.currentTime / player.duration) * 100;
        progressBar.value = percentage;
    });

    progressBar.addEventListener('input', function() {
        player.currentTime = (progressBar.value / 100) * player.duration;
    });

    function initializeProgressBar() {
        progressBar.value = 0;
    }
    document.addEventListener('DOMContentLoaded', initializeProgressBar);

    pauseButton.addEventListener('click', function() {
        player.pause();
        updateButtonStates();
    });

    volumeControl.addEventListener('input', function() {
        var userVolume = parseFloat(this.value);
        var currentSongLimited = songsWithVolumeLimit.find(function(songInfo) {
            return songInfo.title === songs[currentSongIndex].title;
        });

        if (currentSongLimited) {
            player.volume = Math.min(userVolume, currentSongLimited.maxVolume);
        } else {
            player.volume = userVolume;
        }
    });

    randomButton.click();
});