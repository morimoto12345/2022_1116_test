// 今日の日にちが偶数だったら「こんにちは！いい天気ですね」にし、
// 奇数だったら「こんにちは！寒いですね」にしてください
// functionを一回は使おう

var text = document.getElementById('text');
var now = new Date();

var changeText = function(value){
    if(value % 2 === 1){
        text.innerHTML = '寒いですね';
    }
};
 changeText(now.getDate());
