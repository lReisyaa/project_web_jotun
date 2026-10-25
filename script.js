// Halaman kalkulator
function hitungCat() {
    const panjang = document.getElementById('panjang')?.value;
    const lebar = document.getElementById('lebar')?.value;
    const dayaSebar = document.getElementById('dayaSebar')?.value;
    const lapisan = document.getElementById('lapisan')?.value;

    if (!panjang || !lebar || !dayaSebar || !lapisan) {
        alert('Mohon isi semua data!');
        return;
    }

    const luas = parseFloat(panjang) * parseFloat(lebar);
    const kebutuhan = (luas / parseFloat(dayaSebar)) * parseFloat(lapisan);

    document.getElementById('hasilLuas').textContent = luas + ' m²';
    document.getElementById('hasilKebutuhan').textContent = kebutuhan.toFixed(2) + ' liter';
    document.getElementById('hasilContainer').style.display = 'block';
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar aktif
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.style.color = '#cc0000';
        link.style.fontWeight = 'bold';
    }
});

console.log('Website Toko Cat Jotun siap! 🎨');