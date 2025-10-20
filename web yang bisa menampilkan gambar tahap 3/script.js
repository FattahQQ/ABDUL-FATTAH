const gambar = document.getElementById('gambar');
const tombolTampil = document.getElementById('tampil');
const tombolGanti = document.getElementById('ganti');
const tombolHapus = document.getElementById('hapus');

// Daftar gambar (sesuaikan dengan folder kamu)
const daftarGambar = [
  'images/imagesgambar1.jpg',
  'images/imagesgambar2.jpg',
  'images/imagesgambar3.jpg'
];

let index = 0;

// Tampilkan gambar pertama
tombolTampil.addEventListener('click', () => {
  gambar.src = daftarGambar[index];
});

// Ganti ke gambar berikutnya
tombolGanti.addEventListener('click', () => {
  index = (index + 1) % daftarGambar.length;
  gambar.src = daftarGambar[index];
});

// Hapus gambar
tombolHapus.addEventListener('click', () => {
  gambar.src = '';
});
