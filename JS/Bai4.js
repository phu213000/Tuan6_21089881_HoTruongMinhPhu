function TinhTuoi() {
    var D = new Date();
    var ns, nht;
    nht = D.getFullYear();
    do {
        ns = prompt("Nhập năm sinh : ", "");
    } while (parseInt(ns) > nht || parseInt(ns) < 0);
    var tuoi = nht - parseInt(ns);
    alert(`Tuổi của bạn là : ${tuoi}`);
}