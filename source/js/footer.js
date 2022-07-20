var calcSiteTime = function () {
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var today = new Date();
    var startYear = "<%- theme.time.year %>";
    var startMonth = "<%- theme.time.month %>";
    var startDate = "<%- theme.time.date %>";
    var startHour = "<%- theme.time.hour %>";
    var startMinute = "<%- theme.time.minute %>";
    var startSecond = "<%- theme.time.second %>";
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth() + 1;
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();
    var t1 = Date.UTC(startYear, startMonth, startDate, startHour, startMinute, startSecond);
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
    var diff = t2 - t1;
    var diffYears = Math.floor(diff / years);
    var diffDays = Math.floor((diff / days) - diffYears * 365);
    // 区分是否有年份.
    var language = '<%- config.language %>';
    if (startYear === String(todayYear)) {
        document.getElementById("year").innerHTML = todayYear;
        var daysTip = 'This site has been running for ' + diffDays + ' days';
        if (language === 'zh-CN') {
            daysTip = '本站已运行 ' + diffDays + ' 天';
        } else if (language === 'zh-HK') {
            daysTip = '本站已運行 ' + diffDays + ' 天';
        }
        document.getElementById("sitetime").innerHTML = daysTip;
    } else {
        document.getElementById("year").innerHTML = startYear + " - " + todayYear;
        var yearsAndDaysTip = 'This site has been running for ' + diffYears + ' years and '
            + diffDays + ' days';
        if (language === 'zh-CN') {
            yearsAndDaysTip = '本站已运行 ' + diffYears + ' 年 ' + diffDays + ' 天';
        } else if (language === 'zh-HK') {
            yearsAndDaysTip = '本站已運行 ' + diffYears + ' 年 ' + diffDays + ' 天';
        }
        document.getElementById("sitetime").innerHTML = yearsAndDaysTip;
    }
}
calcSiteTime();
