const form = document.querySelector('form');
const output = document.querySelector('#output');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nama = document.querySelector('#nama').value;
    const tanggalLahir = document.querySelector('#tanggal_lahir').value;
    const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    const pesan = document.querySelector('#pesan').value;

    // Menampilkan output
    output.innerHTML = `
        <h2>Data yang Dikirim</h2>
        <ul>
            <li>Nama: ${nama}</li>
            <li>Tanggal Lahir: ${tanggalLahir}</li>
            <li>Jenis Kelamin: ${jenisKelamin}</li>
            <li>Pesan: ${pesan}</li>
        </ul>
    `;
});
