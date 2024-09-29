const images = document.querySelectorAll('.slider img');
        let currentIndex = 0;

        function changeImage(step) {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + step + images.length) % images.length;
            images[currentIndex].classList.add('active');
            updateProgressBar();
        }

        function updateProgressBar() {
            const progressBar = document.querySelector('.progress-bar');
            const progressSpans = progressBar.querySelectorAll('span');
            progressSpans.forEach((span, index) => {
                if (index === currentIndex) {
                    span.classList.add('active');
                } else {
                    span.classList.remove('active');
                }
            });
        }

        document.getElementById('prevBtn').addEventListener('click', function() {
            changeImage(-1);
        });

        document.getElementById('nextBtn').addEventListener('click', function() {
            changeImage(1);
        });

        setInterval(function() {
            changeImage(1);
        }, 3000); // 每隔3秒切换一次图片