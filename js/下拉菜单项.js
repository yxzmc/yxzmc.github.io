document.addEventListener('DOMContentLoaded', function() {
    // 获取所有的下拉按钮
    var dropdowns = document.getElementsByClassName('dropdown');
    var i;

    // 为每个下拉按钮添加点击事件监听器
    for (i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener('click', function(event) {
            var dropdownContent = this.getElementsByClassName('dropdown-content')[0];
            // 切换下拉菜单的显示状态
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
            event.stopPropagation(); // 阻止事件冒泡
        });
    }

    // 获取所有的下拉菜单项
    var dropdownItems = document.getElementsByClassName('dropdown-content a');
    for (i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].addEventListener('click', function() {
            // 点击菜单项后隐藏下拉菜单
            this.closest('.dropdown-content').style.display = 'none';
            // 这里可以添加其他点击菜单项后的逻辑
            // 例如，可以是导航到链接指向的页面：
            // window.location.href = this.getAttribute('href');
        });
    }

    // 点击页面其他地方时隐藏下拉菜单
    window.addEventListener('click', function(event) {
        var dropdownContents = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdownContents.length; i++) {
            dropdownContents[i].style.display = 'none';
        }
    });
});