const scrollToBottomBtn = document.getElementById('scroll-to-bottom');

// Fungsi untuk menggulir ke bawah halaman
scrollToBottomBtn.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight, // Gulir ke bagian paling bawah
        behavior: 'smooth' // Animasi smooth scrolling
    });
});

// Tampilkan atau sembunyikan tombol saat scroll
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        scrollToBottomBtn.style.display = 'none'; // Sembunyikan jika sudah di bawah
    } else {
        scrollToBottomBtn.style.display = 'block'; // Tampilkan jika belum di bawah
    }
});
