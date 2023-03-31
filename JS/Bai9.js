document.write("<h1>Bảng cửu chương từ 1 đến 12</h1>");
for (var i = 1; i <= 12; i++) {
    document.write("<h2>Bảng cửu chương " + i + "</h2>");
    for (var j = 1; j <= 10; j++) {
        document.write("<p>" + i + " x " + j + " = " + (i * j) + "</p>");
    }
}