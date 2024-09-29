document.addEventListener('DOMContentLoaded', function() {
    // 获取显示时间的元素和显示日期的元素
    var timeElement = document.getElementById('time');
    var dateElement = document.getElementById('dateDisplay');

    // 更新时间和日期的函数
    function updateDateTime() {
        // 创建一个新的Date对象，它将包含当前的系统时间
        var now = new Date();
        
        // 格式化时间显示，例如：'06:45:12'
        var timeString = now.toLocaleTimeString();
        
        // 格式化日期和星期显示，例如：'2024年6月5日 星期日'
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var dateString = now.toLocaleDateString('zh-CN', options);
        
        // 同时更新时间和日期显示
        timeElement.textContent = `${timeString}`;
        dateElement.textContent = `${dateString}`;
    }
    
    // 每秒更新时间和日期
    setInterval(updateDateTime, 1000);
    
    // 初始化时间和日期
    updateDateTime();
});