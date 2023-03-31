var charNum = 0;

function KiemTra() {
    if (txtContent.value.length > 200)
        alert("Bạn đã gõ qúa số ký tự cho phép !");
    txtCharNum.value = txtContent.value.length;
}