// Master data portal akademik FAPERTA INSTIPER Yogyakarta
// Berdasarkan blueprint dari GAS.txt & integrasi portal layanan modern

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  type: 'online' | 'hybrid';
  typeLabel: string;
  badgeClass: string;
  sla: string;
  desc: string;
  actionUrl: string;
  actionLabel: string;
  isPrimary?: boolean;
  steps: string[];
}

export interface DocumentItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  meta: string;
  file: string;
  format: string;
  icon: string;
}

export interface TicketItem {
  kode: string;
  nim: string;
  nama: string;
  prodi: string;
  semester?: string;
  layananId: string;
  layananNama: string;
  keperluan: string;
  detailTambahan?: string;
  format?: string;
  status: 'Diajukan' | 'Verifikasi Berkas' | 'Persetujuan' | 'Selesai' | 'Perlu Revisi';
  statusStep: number; // 1 to 4
  posisiBerkas: string;
  estimasiSelesai: string;
  slaDays: number;
  catatanAdmin?: string;
  tanggal: string;
  isNewForAdmin?: boolean;
}

// 12 Layanan Pokok Berdasarkan dari GAS.txt
export const PORTAL_SERVICES: ServiceItem[] = [
  {
    id: "khs",
    number: "01",
    title: "Permohonan KHS (Kartu Hasil Studi)",
    subtitle: "Semester 1 - 14",
    category: "Dokumen Akademik",
    type: "online",
    typeLabel: "Layanan Mandiri",
    badgeClass: "badge-online",
    sla: "1 – 2 Hari Kerja",
    desc: "Permohonan penerbitan salinan resmi Kartu Hasil Studi (KHS) atau transkrip nilai akademik sementara untuk prasyarat ujian khusus, beasiswa, maupun dinas.",
    actionUrl: "/layanan/permohonan-khs",
    actionLabel: "Isi Formulir KHS Online",
    isPrimary: true,
    steps: ["Isi Form KHS", "Verifikasi SIAKAD", "Penerbitan KHS Digital"]
  },
  {
    id: "komplain-nilai",
    number: "02",
    title: "Verifikasi / Komplain Nilai",
    subtitle: "Verifikasi Admin & Dosen",
    category: "Nilai & Perkuliahan",
    type: "hybrid",
    typeLabel: "Formulir & Verifikasi",
    badgeClass: "badge-hybrid",
    sla: "2 – 3 Hari Kerja",
    desc: "Pengajuan verifikasi nilai yang belum tercantum, tidak sesuai, atau memerlukan klarifikasi administratif dari dosen pengampu mata kuliah.",
    actionUrl: "/layanan/komplain-nilai",
    actionLabel: "Isi Formulir Komplain Nilai",
    isPrimary: true,
    steps: ["Formulir Pengaduan", "Verifikasi Dosen/Prodi", "Hasil Rekonsiliasi"]
  },
  {
    id: "ujian-khusus",
    number: "03",
    title: "Pengajuan Ujian Khusus",
    subtitle: "Tingkat Akhir (Maks. 2 Matkul)",
    category: "Ujian",
    type: "hybrid",
    typeLabel: "Formulir Mandiri",
    badgeClass: "badge-hybrid",
    sla: "3 – 5 Hari Kerja",
    desc: "Pengajuan ujian khusus bagi mahasiswa tingkat akhir yang memenuhi persyaratan akademik (telah menyelesaikan SKS teori dan sedang menyusun skripsi).",
    actionUrl: "/layanan/ujian-khusus",
    actionLabel: "Isi Formulir Ujian Khusus",
    isPrimary: true,
    steps: ["Lampirkan KHS", "Isi Form Ujian Khusus", "Verifikasi Kaprodi & Penguji"]
  },
  {
    id: "ujian-susulan",
    number: "04",
    title: "Ujian Susulan (UTS / UAS)",
    subtitle: "Alasan Sah & Dispensasi",
    category: "Ujian",
    type: "hybrid",
    typeLabel: "Hybrid",
    badgeClass: "badge-hybrid",
    sla: "2 – 3 Hari Kerja",
    desc: "Pengajuan ujian susulan sesuai ketentuan akademik dan bukti pendukung yang sah (sakit rawat inap, duka cita keluarga inti, tugas dinas resmi).",
    actionUrl: "/faq#tanya-jawab",
    actionLabel: "Baca Ketentuan & Prosedur",
    steps: ["Kirim Bukti Sah", "Verifikasi Prodi", "Jadwal Ujian Offline"]
  },
  {
    id: "izin-penelitian",
    number: "05",
    title: "Surat Izin Penelitian & Data",
    subtitle: "Pengantar Instansi & Laboratorium",
    category: "Penelitian & Skripsi",
    type: "online",
    typeLabel: "Surat Pengantar",
    badgeClass: "badge-online",
    sla: "1 Hari Kerja",
    desc: "Permohonan surat pengantar izin penelitian atau pengambilan data ke kebun percobaan, instansi pemerintah, BUMN, perusahaan, atau laboratorium mitra.",
    actionUrl: "mailto:akademik@instiperjogja.ac.id?subject=Permohonan%20Surat%20Izin%20Penelitian",
    actionLabel: "Ajukan Izin Penelitian",
    steps: ["Unggah Proposal Disetujui", "Verifikasi Dekanat", "Terbit Surat Izin"]
  },
  {
    id: "mengulang-matkul",
    number: "06",
    title: "Mengulang Mata Kuliah",
    subtitle: "Perbaikan Nilai & Remediasi",
    category: "Nilai & Perkuliahan",
    type: "online",
    typeLabel: "SIAKAD Online",
    badgeClass: "badge-online",
    sla: "1 – 2 Hari Kerja",
    desc: "Pendataan dan pengajuan mahasiswa yang akan mengulang mata kuliah pada semester berjalan untuk perbaikan indeks prestasi kumulatif.",
    actionUrl: "https://siakad.instiperjogja.ac.id",
    actionLabel: "Buka KRS SIAKAD",
    steps: ["Konsultasi DPA", "Input Matkul di SIAKAD", "Persetujuan DPA"]
  },
  {
    id: "perubahan-judul",
    number: "07",
    title: "Perubahan Judul Penelitian",
    subtitle: "Persetujuan Dosen Pembimbing",
    category: "Penelitian & Skripsi",
    type: "hybrid",
    typeLabel: "Hybrid",
    badgeClass: "badge-hybrid",
    sla: "2 – 3 Hari Kerja",
    desc: "Pengajuan pencatatan perubahan judul skripsi/penelitian yang telah disetujui secara tertulis oleh dosen pembimbing utama.",
    actionUrl: "mailto:akademik@instiperjogja.ac.id?subject=Pengajuan%20Perubahan%20Judul%20Skripsi",
    actionLabel: "Ajukan Perubahan Judul",
    steps: ["Form Persetujuan Pembimbing", "Verifikasi Kaprodi", "Pencatatan Berita Acara"]
  },
  {
    id: "seminar-skripsi",
    number: "08",
    title: "Seminar Hasil Skripsi",
    subtitle: "Pendaftaran & Verifikasi Berkas",
    category: "Penelitian & Skripsi",
    type: "hybrid",
    typeLabel: "Hybrid",
    badgeClass: "badge-hybrid",
    sla: "3 – 5 Hari Kerja",
    desc: "Informasi dan verifikasi persyaratan pendaftaran seminar hasil penelitian skripsi mahasiswa tingkat akhir.",
    actionUrl: "mailto:akademik@instiperjogja.ac.id?subject=Pendaftaran%20Seminar%20Skripsi",
    actionLabel: "Daftar Seminar Skripsi",
    steps: ["Naskah Disetujui Pembimbing", "Penetapan Penguji", "Jadwal Seminar"]
  },
  {
    id: "ujian-skripsi",
    number: "09",
    title: "Ujian Pendadaran / Skripsi",
    subtitle: "Sidang Akhir Sarjana",
    category: "Penelitian & Skripsi",
    type: "hybrid",
    typeLabel: "Hybrid",
    badgeClass: "badge-hybrid",
    sla: "3 – 5 Hari Kerja",
    desc: "Pendaftaran dan verifikasi kelengkapan berkas pra-ujian pendadaran skripsi mahasiswa program sarjana (S1).",
    actionUrl: "mailto:akademik@instiperjogja.ac.id?subject=Pendaftaran%20Ujian%20Pendadaran%20Skripsi",
    actionLabel: "Daftar Ujian Skripsi",
    steps: ["Bebas Pustaka & SPP", "Verifikasi Naskah", "Sidang Pendadaran"]
  },
  {
    id: "surat-keterangan",
    number: "10",
    title: "Surat Keterangan Akademik",
    subtitle: "Aktif Kuliah / Beasiswa",
    category: "Surat & Dokumen",
    type: "online",
    typeLabel: "Layanan Mandiri",
    badgeClass: "badge-online",
    sla: "1 Hari Kerja",
    desc: "Permohonan penerbitan surat keterangan masih aktif kuliah, surat keterangan kelakuan baik, rekomendasi beasiswa, dan dokumen sejenis.",
    actionUrl: "mailto:akademik@instiperjogja.ac.id?subject=Permohonan%20Surat%20Keterangan%20Akademik",
    actionLabel: "Ajukan Surat Keterangan",
    steps: ["Input Data Pemohon", "Verifikasi Status Aktif", "Terbit Dokumen Digital / Fisik"]
  },
  {
    id: "peminjaman-ruang",
    number: "11",
    title: "Peminjaman Ruang & Fasilitas",
    subtitle: "Kegiatan Akademik & Ormawa",
    category: "Fasilitas",
    type: "online",
    typeLabel: "Reservasi",
    badgeClass: "badge-online",
    sla: "1 Hari Kerja",
    desc: "Permohonan penggunaan ruang kelas, aula, atau laboratorium untuk kegiatan akademik resmi dan organisasi kemahasiswaan.",
    actionUrl: "mailto:akademik@instiperjogja.ac.id?subject=Permohonan%20Peminjaman%20Ruang",
    actionLabel: "Reservasi Ruang",
    steps: ["Cek Ketersediaan", "Persetujuan WD II / Dekanat", "Konfirmasi Penjagaan"]
  },
  {
    id: "surat-tugas-dosen",
    number: "12",
    title: "Surat Tugas & Kegiatan Dosen",
    subtitle: "Penelitian, Publikasi & Pengabdian",
    category: "Layanan Dosen",
    type: "online",
    typeLabel: "Khusus Dosen",
    badgeClass: "badge-online",
    sla: "1 Hari Kerja",
    desc: "Pengajuan surat tugas resmi bagi dosen FAPERTA untuk keperluan penelitian, publikasi jurnal, narasumber, atau pengabdian kepada masyarakat.",
    actionUrl: "mailto:dekanatfaperta@instiperjogja.ac.id?subject=Pengajuan%20Surat%20Tugas%20Dosen",
    actionLabel: "Ajukan Surat Tugas",
    steps: ["Kirim Kerangka Acuan", "Persetujuan Dekan", "Terbit Surat Tugas Resmi"]
  }
];

// 8 Dokumen Pokok Berdasarkan dari GAS.txt
export const PORTAL_DOCUMENTS: DocumentItem[] = [
  {
    id: "buku-panduan",
    category: "Panduan Umum",
    title: "Buku Panduan Akademik",
    desc: "Panduan induk ketentuan studi, hak & kewajiban, kurikulum, dan etika mahasiswa FAPERTA tahun berjalan.",
    meta: "PDF · Tahun 2025 / 2026",
    file: "/dokumen/buku-panduan-akademik.pdf",
    format: "PDF",
    icon: "▣"
  },
  {
    id: "kurikulum-agroteknologi",
    category: "Program Studi",
    title: "Kurikulum Prodi Agroteknologi",
    desc: "Struktur sebaran mata kuliah, silabus, praktikum, dan peminatan konsentrasi Agroteknologi.",
    meta: "PDF · Kurikulum 2025",
    file: "/dokumen/panduan-agroteknologi.pdf",
    format: "PDF",
    icon: "◒"
  },
  {
    id: "kurikulum-agribisnis",
    category: "Program Studi",
    title: "Kurikulum Prodi Agribisnis",
    desc: "Peta kurikulum mata kuliah, manajemen agribisnis, studi kelayakan, dan kewirausahaan pertanian.",
    meta: "PDF · Kurikulum 2025",
    file: "/dokumen/panduan-agribisnis.pdf",
    format: "PDF",
    icon: "◒"
  },
  {
    id: "kalender-akademik",
    category: "Kalender",
    title: "Kalender Akademik FAPERTA",
    desc: "Jadwal penting semester gasal & genap, masa KRS, perkuliahan, UTS, UAS, dan batas yudisium.",
    meta: "PDF · Tahun Akademik 2025 / 2026",
    file: "/dokumen/kalender-akademik.pdf",
    format: "PDF",
    icon: "▦"
  },
  {
    id: "template-skripsi-agrotek",
    category: "Template",
    title: "Template Skripsi Agroteknologi",
    desc: "Format baku penulisan laporan skripsi, tata letak bab, tabel, grafik percobaan, dan daftar pustaka.",
    meta: "DOCX · Format Baku",
    file: "/dokumen/template-skripsi-agroteknologi.docx",
    format: "DOCX",
    icon: "▤"
  },
  {
    id: "template-skripsi-agri",
    category: "Template",
    title: "Template Skripsi Agribisnis",
    desc: "Format baku naskah skripsi penelitian sosial-ekonomi pertanian, studi kasus, dan permodelan bisnis.",
    meta: "DOCX · Format Baku",
    file: "/dokumen/template-skripsi-agribisnis.docx",
    format: "DOCX",
    icon: "▤"
  },
  {
    id: "template-proposal",
    category: "Template",
    title: "Template Proposal Penelitian",
    desc: "Format standar penyusunan naskah proposal penelitian tugas akhir untuk kedua program studi.",
    meta: "DOCX · Agroteknologi & Agribisnis",
    file: "/dokumen/template-proposal.docx",
    format: "DOCX",
    icon: "▤"
  },
  {
    id: "denah-kampus",
    category: "Kampus",
    title: "Denah Kampus INSTIPER",
    desc: "Informasi lokasi gedung dekanat FAPERTA, laboratorium, ruang kuliah, dan kebun percobaan.",
    meta: "SVG · Peta Wilayah Kampus",
    file: "/campus-map.svg",
    format: "SVG",
    icon: "⌖"
  }
];

// Data Awal Demo Permohonan Mahasiswa untuk Pendeteksi NIM & Admin Portal
export const INITIAL_DEMO_TICKETS: TicketItem[] = [
  {
    kode: "KHS-2026-7821",
    nim: "21/12345/SP",
    nama: "Budi Santoso",
    prodi: "S1 Agroteknologi",
    semester: "Semester 8",
    layananId: "khs",
    layananNama: "Permohonan KHS (Semester 1 - 7)",
    keperluan: "Prasyarat Pendaftaran Ujian Khusus",
    detailTambahan: "Dimohon salinan fisik berstempel basah untuk lampiran berkas",
    format: "Cetak Fisik Berstempel Basah",
    status: "Verifikasi Berkas",
    statusStep: 2,
    posisiBerkas: "Meja Verifikasi Administrasi Akademik (Gedung A, Lt. 1)",
    estimasiSelesai: "1 Hari Kerja (Besok, Pukul 14.00 WIB)",
    slaDays: 2,
    catatanAdmin: "Berkas SIAKAD sudah dicocokkan, sedang menunggu proses cetak & tanda tangan dekanat.",
    tanggal: "04 September 2026, 07:30 WIB",
    isNewForAdmin: true
  },
  {
    kode: "UKH-2026-3190",
    nim: "21/12345/SP",
    nama: "Budi Santoso",
    prodi: "S1 Agroteknologi",
    semester: "Semester 8",
    layananId: "ujian-khusus",
    layananNama: "Pengajuan Ujian Khusus",
    keperluan: "Ujian Khusus: Rancangan Percobaan (3 SKS)",
    detailTambahan: "DPA: Ir. H. Sudirman, M.P. | Sisa 1 Mata Kuliah Teori",
    format: "Berkas Verifikasi Hybrid",
    status: "Diajukan",
    statusStep: 1,
    posisiBerkas: "Antrean Pengajuan Mahasiswa (Menunggu Lampiran KHS Terbit)",
    estimasiSelesai: "3 Hari Kerja (Senin, 07 September 2026)",
    slaDays: 5,
    catatanAdmin: "Pengajuan diterima sistem. Menunggu KHS fisik diterbitkan sebelum disposisi ke Kaprodi.",
    tanggal: "04 September 2026, 08:00 WIB",
    isNewForAdmin: true
  },
  {
    kode: "KMP-2026-4412",
    nim: "22/67890/SP",
    nama: "Siti Rahmawati",
    prodi: "S1 Agribisnis",
    semester: "Semester 6",
    layananId: "komplain-nilai",
    layananNama: "Verifikasi / Komplain Nilai",
    keperluan: "Komplain Nilai: Manajemen Agribisnis (Nilai SIAKAD Belum Muncul)",
    detailTambahan: "Dosen: Dr. Ir. Hj. Nurhidayah, M.S. | Presensi 100%, UTS & UAS lengkap",
    format: "Dokumen Digital (Verifikasi Hasil)",
    status: "Persetujuan",
    statusStep: 3,
    posisiBerkas: "Konfirmasi Dosen Pengampu & Bagian Input Nilai SIAKAD",
    estimasiSelesai: "Hari Ini, Pukul 15.00 WIB",
    slaDays: 3,
    catatanAdmin: "Dosen pengampu sudah mengonfirmasi nilai A-. Sedang dilakukan update data di portal SIAKAD.",
    tanggal: "03 September 2026, 11:20 WIB",
    isNewForAdmin: false
  },
  {
    kode: "IZN-2026-9081",
    nim: "20/45678/SP",
    nama: "Ahmad Fauzi",
    prodi: "S1 Agroteknologi",
    semester: "Semester 10",
    layananId: "izin-penelitian",
    layananNama: "Surat Izin Penelitian & Pengambilan Data",
    keperluan: "Pengambilan Sampel Tanah & Daun Kelapa Sawit di PTPN",
    detailTambahan: "Lokasi: Kebun Percobaan & PT Perkebunan Nusantara",
    format: "PDF Digital Berstempel Elektronik",
    status: "Selesai",
    statusStep: 4,
    posisiBerkas: "Dokumen Siap Diambil / Diunduh",
    estimasiSelesai: "Selesai Tepat Waktu",
    slaDays: 1,
    catatanAdmin: "Surat izin nomor 412/FAP/PL/2026 telah ditandatangani Dekan. Salinan PDF dikirim ke email.",
    tanggal: "02 September 2026, 09:15 WIB",
    isNewForAdmin: false
  }
];
