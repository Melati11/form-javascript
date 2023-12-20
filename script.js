document.addEventListener('DOMContentLoaded', function() {
    const maxLengthName = document.getElementById('name').maxLength;
    document.getElementById('sisaKarakter').innerText = maxLengthName;

    document.getElementById('name').addEventListener('input', function(){
        const jumlahKarakter = document.getElementById('name').value.length;
        const karakterMaksimal = document.getElementById('name').maxLength;

        const karakterUpdate = karakterMaksimal - jumlahKarakter;
        document.getElementById('sisaKarakter').innerText = karakterUpdate.toString();

        if (karakterUpdate === 0) {
            document.getElementById('sisaKarakter').innerText = 'Batas maksimal tercapai!';
        } else if (karakterUpdate <= 5) {
            document.getElementById('notifikasi').style.color = 'red';
        } else {
            document.getElementById('notifikasi').style.color = 'black';
        }  
    });

    document.getElementById('name').addEventListener('focus', function() {
        document.getElementById('notifikasi').style.visibility = 'visible';
    });

    document.getElementById('name').addEventListener('blur', function(){
        document.getElementById('notifikasi').style.visibility = 'hidden';
    });
});

const submitAction = document.getElementById('dataDiri');

submitAction.addEventListener('submit', function(e) {
    const nama = document.getElementById('name').value;
    const domisili = document.getElementById('domisili').value;
    const telp = document.getElementById('telp').value;
    const hiddenMessage = `Selamat ${nama}! Anda berdomisili di ${domisili} dengan nomor telepon ${telp} berhasil mengirim data!`

    document.getElementById('message').innerText = hiddenMessage;
    e.preventDefault();
})