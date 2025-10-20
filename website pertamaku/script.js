// ==== Website Pertamaku by Abdul Fattah ====

// 1️⃣ Cek apakah tombol "Klik Aku" ada di halaman ini
const tombol = document.getElementById("tombolHalo");

// 2️⃣ Jika tombol ditemukan, tambahkan aksi saat diklik
if (tombol) {
  tombol.addEventListener("click", function() {
    alert("Halo Fattah! Website pertamamu sudah berjalan 🚀");
  });
}

// 3️⃣ (Opsional) Tampilkan pesan di konsol saat halaman dibuka
console.log("Website Abdul Fattah berhasil dimuat!");
