const agendas = [
  {
    header: "Profil Pelajar Pancasila",
    description:
      "Pelajar Pancasila adalah perwujudan pelajar Indonesia sebagai pelajar sepanjang hayat yang memiliki kompetensi global dan berperilaku sesuai dengan nilai-nilai Pancasila, dengan enam ciri utama: beriman, bertakwa kepada Tuhan YME, dan berakhlak mulia, berkebinekaan global, bergotong royong, mandiri, bernalar kritis, dan kreatif.",
    posterImage: "aset/gambar/agendaPoster2.jpeg",
    jadwal: {
      pelaksanaan: "Kamis, 4 January 2023",
      jam: "10.00-Selesai",
    },
    lokasi: "Online",
  },

  {
    header: "Guru Pengerak",
    description:
      "Agenda Guru Pengerak adalah inisiatif yang bertujuan untuk memberdayakan dan menginspirasi para guru dalam meningkatkan mutu pendidikan. Melalui agenda ini, para guru diharapkan dapat menjadi agen perubahan di lingkungan pendidikan mereka. Aktivitas dalam agenda ini mencakup pelatihan, kolaborasi antar-guru, dan pengembangan kurikulum",
    posterImage: "aset/gambar/guru pengerak.jpg",
    jadwal: {
      pelaksanaan: "Senin, 17 January 2023",
      jam: "9.00-Selesai",
    },
    lokasi: "Offline",
  },
];

let currentAgendaIndex = 0;

function nextAgenda() {
  currentAgendaIndex = (currentAgendaIndex + 1) % agendas.length;

  updateAgendaData();
}

function updateAgendaData() {
  const currentAgenda = agendas[currentAgendaIndex];
  document.getElementById("agendaHeader").textContent = currentAgenda.header;
  document.getElementById("agendaDescription").textContent =
    currentAgenda.description;
  document.getElementById("agendaImage").src = currentAgenda.posterImage;
  document.getElementById("agendaPelaksanaan").textContent =
    currentAgenda.jadwal.pelaksanaan;
  document.getElementById("agendaJam").textContent = currentAgenda.jadwal.jam;
  document.getElementById("agendaLokasi").textContent = currentAgenda.lokasi;
}

updateAgendaData();
