function convertFtoC() {
    // Lấy giá trị độ F từ ô nhập liệu
    var degFahren = document.getElementById("input-f").value;
    // Tính toán độ C từ độ F sử dụng công thức chuyển đổi
    var degCent = 5 / 9 * (degFahren - 32);
    // Hiển thị kết quả độ C lên trang web
    document.getElementById("result").innerHTML = degCent.toFixed(2);
}