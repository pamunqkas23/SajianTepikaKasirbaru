window.onload = function() {
  const data = JSON.parse(localStorage.getItem("strukTerakhir"));

  if (!data) {
    document.body.innerHTML = "Data struk kosong";
    return;
  }

  // Isi struk
  document.getElementById("no").innerText = data.no;
  document.getElementById("tanggal").innerText = data.tanggal;

  const itemsDiv = document.getElementById("items");
  itemsDiv.innerHTML = ""; // kosongkan dulu

  for (let name in data.items) {
    const item = data.items[name];
    itemsDiv.innerHTML += `
      <div class="row">
        <span>${name} x${item.qty}</span>
        <span>${format(item.price * item.qty)}</span>
      </div>
    `;
  }

  document.getElementById("total").innerText = format(data.total);
  document.getElementById("bayar").innerText = format(data.bayar);
  document.getElementById("kembali").innerText = format(data.kembalian);

  // Cetak & auto-close
  window.print();

  setTimeout(() => {
    window.close(); // otomatis tutup setelah print
  }, 500); // 0.5 detik, bisa disesuaikan
};

function format(num) {
  return "Rp" + num.toLocaleString("id-ID");
}
