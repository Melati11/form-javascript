document.addEventListener('DOMContentLoaded', function() {
    // const maxLengthName = document.getElementById('name').maxLength;
    // document.getElementById('sisaKarakter').innerText = maxLengthName;
    const inputName = document.getElementById('name');
    const notifikasi = document.getElementById('notifikasi');

    // document.getElementById('name').addEventListener('input', function(){
    inputName.addEventListener('input', function(){
        const jumlahKarakter = document.getElementById('name').value.length;
        const karakterMaksimal = document.getElementById('name').maxLength;

        const karakterUpdate = karakterMaksimal - jumlahKarakter;
        // document.getElementById('notifikasi').innerText = karakterUpdate.toString();
        notifikasi.innerText = `Karakter ${jumlahKarakter}/${karakterMaksimal}`;

        if (karakterUpdate === 0) {
            document.getElementById('notifikasi').innerText = 'Batas maksimal tercapai!';
        } else if (karakterUpdate < 5) {
            document.getElementById('notifikasi').style.color = 'red';
        } else {
            document.getElementById('notifikasi').style.color = 'black';
        }  

        if (jumlahKarakter > karakterMaksimal) {
            this.value = this.value.slice(0, karakterMaksimal);
            // notifikasi.innerText = 'Batas maksimal tercapai!';
            notifikasi.style.color = 'red';
        }
    });

    document.getElementById('name').addEventListener('focus', function() {
        document.getElementById('notifikasi').style.visibility = 'visible';
    });

    document.getElementById('name').addEventListener('blur', function(){
        document.getElementById('notifikasi').style.visibility = 'hidden';
    });
});

document.getElementById('capctha').addEventListener('change', function() {
    const inputCapctha = document.getElementById('capctha').value;
    const submitButton = document.getElementById('submit');

    if (inputCapctha === 'PRNU') {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', '');
    }
});

const submitAction = document.getElementById('dataDiri');

submitAction.addEventListener('submit', function(e) {
    const nama = document.getElementById('name').value;
    const domisili = document.getElementById('domisili').value;
    const telp = document.getElementById('telp').value;
    const inputCapctha = document.getElementById('captcha').value;
    const hiddenMessage = `Selamat ${nama}! Anda berdomisili di ${domisili} dengan nomor telepon ${telp} berhasil mengirim data!`

    if (inputCapctha === 'PRNU') {
        alert('Capctha Sukses!');
    } else {
        alert('Captcha Belum Tepat');
        document.getElementById('submit').setAttribute('disabled', '');
    }

    document.getElementById('message').innerText = hiddenMessage;
    e.preventDefault();
})