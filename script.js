document.getElementById('magicButton').addEventListener('click', function() {
    const messages = [
        "编程其实很有趣！",
        "你迈出了第一步！",
        "Hello, World!",
        "继续加油！"
    ];
    
    // 随机选择一条消息
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').innerText = randomMessage;
    
    // 随机改变背景颜色
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});
