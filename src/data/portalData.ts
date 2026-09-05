// Master data portal akademik FAPERTA INSTIPER Yogyakarta
// Terintegrasi dengan Sistem Administrasi Utama & Database Master Kampus

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  type: 'online' | 'hybrid';
  typeLabel: string;
  badgeClass: string;
  desc: string;
  actionUrl: string;
  actionLabel: string;
  isPrimary?: boolean;
  steps: string[];
  keywords?: string[];
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
  isExternal?: boolean;
  isPending?: boolean;
  keywords?: string[];
}

export type TicketStatus = 
  | 'Belum Diproses' 
  | 'Verifikasi Admin Loket' 
  | 'Verifikasi Dosen / Kaprodi' 
  | 'Proses Verifikasi' 
  | 'Selesai (Siap Diambil)' 
  | 'Sudah Diambil'
  | 'Ditolak';

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
  status: TicketStatus;
  statusStep: number;
  posisiBerkas: string;
  estimasiSelesai?: string;
  catatanAdmin?: string;
  tanggal: string;
  isNewForAdmin?: boolean;
  sudahDiambil?: boolean;
  tanggalDiambil?: string;
  petugasPenyerah?: string;
}

// ============================================================
// DATABASE UTAMA ADMINISTRASI (DATA MASTER)
// ============================================================

export interface MasterMahasiswaItem {
  nim: string;
  nama: string;
  prodi: string;
  minat: string;
  angkatan: number;
  semester: string;
  statusAkademik: 'Aktif' | 'Cuti' | 'Lulus';
  dpa: string;
}

export interface MasterDosenItem {
  id: string;
  kodeDosen: string;
  nama: string;
  nidn: string;
  prodi: string;
  jabatan: string;
  email: string;
}

export interface MasterMataKuliahItem {
  kode: string;
  nama: string;
  sks: number;
  semester: number;
  prodi: string;
  dosenPengampu: string;
}

export const MASTER_MAHASISWA: MasterMahasiswaItem[] = [
  { nim: "21/12345/SP", nama: "Budi Santoso", prodi: "S1 Agroteknologi", minat: "SPKS (Kelapa Sawit)", angkatan: 2021, semester: "Semester 8", statusAkademik: "Aktif", dpa: "Ir. H. Sudirman, M.P." },
  { nim: "22/67890/SP", nama: "Siti Rahmawati", prodi: "S1 Agribisnis", minat: "SMBP (Bisnis Perkebunan)", angkatan: 2022, semester: "Semester 6", statusAkademik: "Aktif", dpa: "Dr. Ir. Hj. Nurhidayah, M.S." },
  { nim: "20/45678/SP", nama: "Ahmad Fauzi", prodi: "S1 Agroteknologi", minat: "ANTAN (Tanaman Pangan)", angkatan: 2020, semester: "Semester 10", statusAkademik: "Aktif", dpa: "Prof. Dr. Ir. H. Bambang, M.P." },
  { nim: "23/11223/SP", nama: "Dewi Lestari", prodi: "S1 Agribisnis", minat: "SEA (Ekonomi Agribisnis)", angkatan: 2023, semester: "Semester 4", statusAkademik: "Aktif", dpa: "Ir. FX. Supriyadi, M.P." },
  { nim: "22/33445/SP", nama: "Rian Pratama", prodi: "S1 Agroteknologi", minat: "SPKS (Kelapa Sawit)", angkatan: 2022, semester: "Semester 6", statusAkademik: "Aktif", dpa: "Dr. Eko Widodo, S.P., M.Sc." },
  { nim: "20/55667/SP", nama: "Bagus Saputra", prodi: "S1 Agribisnis", minat: "SPA (Pengolahan Agribisnis)", angkatan: 2020, semester: "Semester 10", statusAkademik: "Aktif", dpa: "Ir. Endang Sulastri, M.M." },
  { nim: "21/44556/SP", nama: "Fajar Nugraha", prodi: "S1 Agroteknologi", minat: "SPKS (Kelapa Sawit)", angkatan: 2021, semester: "Semester 8", statusAkademik: "Aktif", dpa: "Ir. H. Sudirman, M.P." },
  { nim: "22/77889/SP", nama: "Putri Anggraini", prodi: "S1 Agribisnis", minat: "SMBP (Bisnis Perkebunan)", angkatan: 2022, semester: "Semester 6", statusAkademik: "Aktif", dpa: "Dr. Ir. Hj. Nurhidayah, M.S." }
];

export const MASTER_DOSEN: MasterDosenItem[] = [
  { id: "DSN01", kodeDosen: "SDR", nama: "Ir. H. Sudirman, M.P.", nidn: "0512036401", prodi: "S1 Agroteknologi", jabatan: "Kaprodi Agroteknologi", email: "sudirman@instiperjogja.ac.id" },
  { id: "DSN02", kodeDosen: "NRH", nama: "Dr. Ir. Hj. Nurhidayah, M.S.", nidn: "0524086802", prodi: "S1 Agribisnis", jabatan: "Kaprodi Agribisnis", email: "nurhidayah@instiperjogja.ac.id" },
  { id: "DSN03", kodeDosen: "BMG", nama: "Prof. Dr. Ir. H. Bambang, M.P.", nidn: "0511015801", prodi: "S1 Agroteknologi", jabatan: "Dekan Fakultas Pertanian", email: "bambang@instiperjogja.ac.id" },
  { id: "DSN04", kodeDosen: "SPR", nama: "Ir. FX. Supriyadi, M.P.", nidn: "0515096201", prodi: "S1 Agribisnis", jabatan: "Wakil Dekan I Akademik", email: "supriyadi@instiperjogja.ac.id" },
  { id: "DSN05", kodeDosen: "EKW", nama: "Dr. Eko Widodo, S.P., M.Sc.", nidn: "0503047501", prodi: "S1 Agroteknologi", jabatan: "Dosen Pengampu / Peneliti", email: "ekowidodo@instiperjogja.ac.id" },
  { id: "DSN06", kodeDosen: "EDS", nama: "Ir. Endang Sulastri, M.M.", nidn: "0518066701", prodi: "S1 Agribisnis", jabatan: "Dosen Pembimbing Skripsi", email: "endangs@instiperjogja.ac.id" }
];

export const MASTER_MATAKULIAH: MasterMataKuliahItem[] = [
  { kode: "AGT-401", nama: "Rancangan Percobaan Pertanian", sks: 3, semester: 4, prodi: "S1 Agroteknologi", dosenPengampu: "Prof. Dr. Ir. H. Bambang, M.P." },
  { kode: "AGT-402", nama: "Bioteknologi Tanaman Perkebunan", sks: 3, semester: 6, prodi: "S1 Agroteknologi", dosenPengampu: "Dr. Eko Widodo, S.P., M.Sc." },
  { kode: "AGT-403", nama: "Budidaya Kelapa Sawit Berkelanjutan", sks: 3, semester: 5, prodi: "S1 Agroteknologi", dosenPengampu: "Ir. H. Sudirman, M.P." },
  { kode: "AGB-301", nama: "Manajemen Agribisnis Perkebunan", sks: 3, semester: 4, prodi: "S1 Agribisnis", dosenPengampu: "Dr. Ir. Hj. Nurhidayah, M.S." },
  { kode: "AGB-302", nama: "Manajemen Mutu & Rantai Pasok Pertanian", sks: 3, semester: 6, prodi: "S1 Agribisnis", dosenPengampu: "Ir. Endang Sulastri, M.M." },
  { kode: "AGB-303", nama: "Kewirausahaan Sosial & Bisnis Digital", sks: 2, semester: 5, prodi: "S1 Agribisnis", dosenPengampu: "Ir. FX. Supriyadi, M.P." },
  { kode: "FAP-500", nama: "Metodologi Penelitian & Seminar Proposal", sks: 2, semester: 7, prodi: "FAPERTA Bersama", dosenPengampu: "Tim Dosen FAPERTA" },
  { kode: "FAP-501", nama: "Skripsi & Ujian Pendadaran Sarjana", sks: 6, semester: 8, prodi: "FAPERTA Bersama", dosenPengampu: "Dosen Pembimbing Utama" }
];

// ============================================================
// 12 LAYANAN POKOK FAPERTA
// ============================================================

export const PORTAL_SERVICES: ServiceItem[] = [
  {
    id: "khs",
    number: "01",
    title: "Permohonan KHS (Kartu Hasil Studi)",
    subtitle: "Semester 1 - 12",
    category: "Dokumen Akademik",
    type: "hybrid",
    typeLabel: "Ambil di Loket",
    badgeClass: "badge-hybrid",
    desc: "Permohonan penerbitan salinan resmi Kartu Hasil Studi (KHS) berstempel basah untuk prasyarat ujian khusus, beasiswa, maupun arsip dinas. Berkas fisik diambil di Loket FAPERTA.",
    actionUrl: "/layanan/permohonan-khs",
    actionLabel: "Isi Formulir Permohonan KHS",
    isPrimary: true,
    steps: ["Isi Form KHS Online", "Verifikasi Petugas & SIAKAD", "Ambil KHS Fisik di Loket Admin FAPERTA"],
    keywords: ["khs", "kartu hasil studi", "transkrip", "nilai", "salinan nilai", "cetak khs", "stempel basah", "beasiswa", "syarat ujian khusus", "ipk", "ips", "rekap nilai"]
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
    desc: "Pengajuan verifikasi nilai yang belum tercantum, tidak sesuai, atau memerlukan klarifikasi administratif dari dosen pengampu mata kuliah.",
    actionUrl: "/layanan/komplain-nilai",
    actionLabel: "Isi Formulir Komplain Nilai",
    isPrimary: true,
    steps: ["Formulir Pengaduan", "Verifikasi Dosen/Prodi", "Hasil Rekonsiliasi"],
    keywords: ["komplain nilai", "verifikasi nilai", "protes nilai", "sanggah nilai", "perbaikan nilai", "klarifikasi nilai", "nilai salah", "nilai belum muncul", "nilai siakad", "revisi nilai", "dosen pengampu"]
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
    desc: "Pengajuan ujian khusus bagi mahasiswa tingkat akhir yang memenuhi persyaratan akademik (telah menyelesaikan SKS teori dan sedang menyusun skripsi).",
    actionUrl: "/layanan/ujian-khusus",
    actionLabel: "Isi Formulir Ujian Khusus",
    isPrimary: true,
    steps: ["Lampirkan KHS", "Isi Form Ujian Khusus", "Verifikasi Kaprodi & Penguji"],
    keywords: ["ujian khusus", "remidi", "remedial", "ujian ulang", "tingkat akhir", "maksimal 2 matkul", "sisa sks", "skripsi", "perbaikan nilai d e", "ujian kelulusan"]
  },
  {
    id: "ujian-susulan",
    number: "04",
    title: "Ujian Susulan (UTS / UAS)",
    subtitle: "Alasan Sah & Dispensasi",
    category: "Ujian",
    type: "hybrid",
    typeLabel: "Dalam Proses",
    badgeClass: "badge-hybrid",
    desc: "Pengajuan ujian susulan sesuai ketentuan akademik dan bukti pendukung yang sah (sakit rawat inap, duka cita keluarga inti, tugas dinas resmi).",
    actionUrl: "/dalam-proses?item=Ujian+Susulan+(UTS%2FUAS)&tipe=layanan",
    actionLabel: "Lihat Info & Alur Loket",
    steps: ["Kirim Bukti Sah", "Verifikasi Prodi", "Jadwal Ujian Offline"],
    keywords: ["ujian susulan", "susulan", "uts susulan", "uas susulan", "dispensasi ujian", "ijin sakit", "izin sakit", "rawat inap", "surat dokter", "tugas dinas"]
  },
  {
    id: "izin-penelitian",
    number: "05",
    title: "Surat Izin Penelitian & Data",
    subtitle: "Pengantar Instansi & Laboratorium",
    category: "Penelitian & Skripsi",
    type: "online",
    typeLabel: "Dalam Proses",
    badgeClass: "badge-online",
    desc: "Permohonan surat pengantar izin penelitian atau pengambilan data ke kebun percobaan, instansi pemerintah, BUMN, perusahaan, atau laboratorium mitra.",
    actionUrl: "/dalam-proses?item=Surat+Izin+Penelitian+%26+Data&tipe=layanan",
    actionLabel: "Lihat Info & Alur Loket",
    steps: ["Unggah Proposal Disetujui", "Verifikasi Dekanat", "Terbit Surat Izin"],
    keywords: ["surat izin penelitian", "surat ijin penelitian", "izin penelitian", "ijin penelitian", "izin riset", "ijin riset", "penelitian", "riset", "data", "surat pengantar", "kebun percobaan", "laboratorium", "instansi", "perusahaan", "pengambilan data", "bumn", "mitra", "proposal penelitian", "surat izin", "surat ijin"]
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
    desc: "Pendataan dan pengajuan mahasiswa yang akan mengulang mata kuliah pada semester berjalan untuk perbaikan indeks prestasi kumulatif.",
    actionUrl: "https://siakad.instiperjogja.ac.id",
    actionLabel: "Buka KRS SIAKAD",
    steps: ["Konsultasi DPA", "Input Matkul di SIAKAD", "Persetujuan DPA"],
    keywords: ["mengulang mata kuliah", "ulang matkul", "siakad", "krs", "konsultasi dpa", "remediasi", "perbaikan ipk", "isi krs"]
  },
  {
    id: "perubahan-judul",
    number: "07",
    title: "Perubahan Judul Penelitian",
    subtitle: "Persetujuan Dosen Pembimbing",
    category: "Penelitian & Skripsi",
    type: "hybrid",
    typeLabel: "Dalam Proses",
    badgeClass: "badge-hybrid",
    desc: "Pengajuan pencatatan perubahan judul skripsi/penelitian yang telah disetujui secara tertulis oleh dosen pembimbing utama.",
    actionUrl: "/dalam-proses?item=Perubahan+Judul+Penelitian&tipe=layanan",
    actionLabel: "Lihat Info & Alur Loket",
    steps: ["Form Persetujuan Pembimbing", "Verifikasi Kaprodi", "Pencatatan Berita Acara"],
    keywords: ["perubahan judul", "ganti judul", "ubah judul", "revisi judul skripsi", "penelitian", "pembimbing", "berita acara"]
  },
  {
    id: "seminar-skripsi",
    number: "08",
    title: "Seminar Hasil Skripsi",
    subtitle: "Pendaftaran & Verifikasi Berkas",
    category: "Penelitian & Skripsi",
    type: "hybrid",
    typeLabel: "Dalam Proses",
    badgeClass: "badge-hybrid",
    desc: "Informasi dan verifikasi persyaratan pendaftaran seminar hasil penelitian skripsi mahasiswa tingkat akhir.",
    actionUrl: "/dalam-proses?item=Seminar+Hasil+Skripsi&tipe=layanan",
    actionLabel: "Lihat Info & Alur Loket",
    steps: ["Naskah Disetujui Pembimbing", "Penetapan Penguji", "Jadwal Seminar"],
    keywords: ["seminar hasil", "seminar skripsi", "semhas", "kolokium", "naskah skripsi", "jadwal seminar", "penguji", "skripsi"]
  },
  {
    id: "ujian-skripsi",
    number: "09",
    title: "Ujian Pendadaran / Skripsi",
    subtitle: "Sidang Akhir Sarjana",
    category: "Penelitian & Skripsi",
    type: "hybrid",
    typeLabel: "Dalam Proses",
    badgeClass: "badge-hybrid",
    desc: "Pendaftaran dan verifikasi kelengkapan berkas pra-ujian pendadaran skripsi mahasiswa program sarjana (S1).",
    actionUrl: "/dalam-proses?item=Ujian+Pendadaran+%2F+Skripsi&tipe=layanan",
    actionLabel: "Lihat Info & Alur Loket",
    steps: ["Bebas Pustaka & SPP", "Verifikasi Naskah", "Sidang Pendadaran"],
    keywords: ["ujian skripsi", "pendadaran", "sidang skripsi", "sidang akhir", "yudisium", "sarjana s1", "bebas pustaka", "bebas spp", "kelulusan"]
  },
  {
    id: "surat-keterangan",
    number: "10",
    title: "Surat Keterangan Akademik",
    subtitle: "Aktif Kuliah / Beasiswa",
    category: "Surat & Dokumen",
    type: "online",
    typeLabel: "Dalam Proses",
    badgeClass: "badge-online",
    desc: "Permohonan penerbitan surat keterangan masih aktif kuliah, surat keterangan kelakuan baik, rekomendasi beasiswa, dan dokumen sejenis.",
    actionUrl: "/dalam-proses?item=Surat+Keterangan+Akademik&tipe=layanan",
    actionLabel: "Lihat Info & Alur Loket",
    steps: ["Input Data Pemohon", "Verifikasi Status Aktif", "Ambil Berkas Fisik di Loket Admin FAPERTA"],
    keywords: ["surat keterangan", "surat aktif kuliah", "surat masih kuliah", "keterangan aktif", "beasiswa", "kelakuan baik", "tunjangan pns", "tunjangan gaji", "bpjs", "surat pengantar"]
  },
  {
    id: "peminjaman-ruang",
    number: "11",
    title: "Peminjaman Ruang & Fasilitas",
    subtitle: "Kegiatan Akademik & Ormawa",
    category: "Fasilitas",
    type: "online",
    typeLabel: "Dalam Proses",
    badgeClass: "badge-online",
    desc: "Permohonan penggunaan ruang kelas, aula, atau laboratorium untuk kegiatan akademik resmi dan organisasi kemahasiswaan.",
    actionUrl: "/dalam-proses?item=Peminjaman+Ruang+%26+Fasilitas&tipe=layanan",
    actionLabel: "Lihat Info & Alur Loket",
    steps: ["Cek Ketersediaan", "Persetujuan WD II / Dekanat", "Konfirmasi Penjagaan"],
    keywords: ["peminjaman ruang", "pinjam ruang", "pinjam ruangan", "pinjam kelas", "aula", "fasilitas", "laboratorium", "ormawa", "kegiatan kampus", "rapat"]
  },
  {
    id: "surat-tugas-dosen",
    number: "12",
    title: "Surat Tugas & Kegiatan Dosen",
    subtitle: "Penelitian, Publikasi & Pengabdian",
    category: "Layanan Dosen",
    type: "online",
    typeLabel: "Dalam Proses",
    badgeClass: "badge-online",
    desc: "Pengajuan surat tugas resmi bagi dosen FAPERTA untuk keperluan penelitian, publikasi jurnal, narasumber, atau pengabdian kepada masyarakat.",
    actionUrl: "/dalam-proses?item=Surat+Tugas+%26+Kegiatan+Dosen&tipe=layanan",
    actionLabel: "Lihat Info & Alur Loket",
    steps: ["Kirim Kerangka Acuan", "Persetujuan Dekan", "Terbit Surat Tugas Resmi"],
    keywords: ["surat tugas", "tugas dosen", "kegiatan dosen", "penelitian dosen", "publikasi", "jurnal", "pengabdian masyarakat", "narasumber"]
  }
];

// ============================================================
// 8 DOKUMEN POKOK FAPERTA
// ============================================================

export const PORTAL_DOCUMENTS: DocumentItem[] = [
  {
    id: "buku-panduan",
    category: "Panduan Umum",
    title: "Buku Panduan Akademik 2026 - 2027",
    desc: "Buku pedoman induk penyelenggaraan akademik, kurikulum, sistem kredit semester (SKS), hak & kewajiban, serta etika mahasiswa FAPERTA INSTIPER Yogyakarta.",
    meta: "PDF Resmi · Edisi 2026 / 2027 (20 MB)",
    file: "/dokumen/buku-panduan-akademik.pdf",
    format: "PDF",
    icon: "▣",
    isExternal: false,
    keywords: ["buku panduan", "buku pedoman", "panduan akademik", "pedoman akademik", "aturan", "regulasi", "kurikulum", "sks", "etika", "buku saku"]
  },
  {
    id: "kalender-akademik",
    category: "Kalender",
    title: "Kalender Akademik FAPERTA",
    desc: "Jadwal resmi semester gasal & genap, masa pengisian KRS, perkuliahan aktif, UTS, UAS, libur semester, dan batas pendaftaran yudisium kelulusan.",
    meta: "PDF Resmi · Tahun Akademik 2026 / 2027 (4.7 MB)",
    file: "/dokumen/kalender-akademik.pdf",
    format: "PDF",
    icon: "▦",
    isExternal: false,
    keywords: ["kalender akademik", "jadwal kuliah", "kalender", "semester gasal", "semester genap", "jadwal krs", "libur", "jadwal uts", "jadwal uas", "jadwal yudisium"]
  },
  {
    id: "denah-kampus",
    category: "Kampus",
    title: "Denah Kampus INSTIPER",
    desc: "Peta denah resmi lokasi gedung dekanat Fakultas Pertanian, ruang kuliah, laboratorium penelitian, kebun percobaan, dan fasilitas kampus.",
    meta: "JPG Gambar Resmi · Resolusi Tinggi (1.9 MB)",
    file: "/denah-instiper.jpg",
    format: "JPG",
    icon: "⌖",
    isExternal: false,
    keywords: ["denah kampus", "denah", "peta", "lokasi", "gedung faperta", "dekanat", "laboratorium", "kebun", "peta kampus", "ruang kelas"]
  },
  {
    id: "panduan-proposal-agrotek",
    category: "Proposal & Skripsi",
    title: "Panduan Proposal Penelitian Agroteknologi",
    desc: "Akses folder Google Drive resmi berisi panduan baku penyusunan dan template naskah proposal penelitian tugas akhir Program Studi Agroteknologi.",
    meta: "Google Drive Resmi · Prodi Agroteknologi",
    file: "https://drive.google.com/drive/folders/1j3mfUotpP83SYsLnwRZjtBUPr9ehFjnp",
    format: "G-Drive",
    icon: "▤",
    isExternal: true,
    keywords: ["panduan proposal", "template proposal", "proposal agroteknologi", "skripsi agrotek", "format proposal", "naskah proposal"]
  },
  {
    id: "panduan-skripsi-agrotek",
    category: "Proposal & Skripsi",
    title: "Panduan Penulisan Skripsi Agroteknologi",
    desc: "Akses folder Google Drive resmi berisi pedoman penulisan laporan skripsi, tata letak bab, tabel percobaan, dan template baku skripsi Program Studi Agroteknologi.",
    meta: "Google Drive Resmi · Prodi Agroteknologi",
    file: "https://drive.google.com/drive/folders/1_bsyTzr5tGBzMEJsm01EngkfbMEfL1NK",
    format: "G-Drive",
    icon: "▤",
    isExternal: true,
    keywords: ["panduan skripsi", "template skripsi", "laporan skripsi", "format skripsi", "agroteknologi", "tata tulis skripsi"]
  },
  {
    id: "kurikulum-agroteknologi",
    category: "Program Studi",
    title: "Kurikulum Prodi Agroteknologi",
    desc: "Struktur sebaran mata kuliah, silabus, praktikum, dan peminatan konsentrasi Agroteknologi.",
    meta: "Tahap Sinkronisasi Kurikulum FAPERTA",
    file: "/dalam-proses?item=Kurikulum+Prodi+Agroteknologi&tipe=unduhan",
    format: "Dalam Proses",
    icon: "◒",
    isPending: true,
    keywords: ["kurikulum agroteknologi", "silabus", "sebaran matkul", "mata kuliah agrotek", "sks"]
  },
  {
    id: "kurikulum-agribisnis",
    category: "Program Studi",
    title: "Kurikulum Prodi Agribisnis",
    desc: "Peta kurikulum mata kuliah, manajemen agribisnis, studi kelayakan, dan kewirausahaan pertanian.",
    meta: "Tahap Sinkronisasi Kurikulum FAPERTA",
    file: "/dalam-proses?item=Kurikulum+Prodi+Agribisnis&tipe=unduhan",
    format: "Dalam Proses",
    icon: "◒",
    isPending: true,
    keywords: ["kurikulum agribisnis", "silabus", "sebaran matkul agribisnis", "manajemen agribisnis", "mata kuliah"]
  },
  {
    id: "template-skripsi-agri",
    category: "Template",
    title: "Template Skripsi Agribisnis",
    desc: "Format baku naskah skripsi penelitian sosial-ekonomi pertanian, studi kasus, dan permodelan bisnis.",
    meta: "Tahap Finalisasi Naskah Format Dekanat",
    file: "/dalam-proses?item=Template+Skripsi+Agribisnis&tipe=unduhan",
    format: "Dalam Proses",
    icon: "▤",
    isPending: true,
    keywords: ["template skripsi agribisnis", "format skripsi agribisnis", "panduan skripsi agribisnis", "skripsi agribisnis"]
  }
];

// Data Awal Berkas Permohonan Mahasiswa Resmi (Database Portal FAPERTA)
export const INITIAL_PORTAL_TICKETS: TicketItem[] = [
  {
    kode: "KHS-2026-7821",
    nim: "21/12345/SP",
    nama: "Budi Santoso",
    prodi: "S1 Agroteknologi",
    semester: "Semester 8",
    layananId: "khs",
    layananNama: "Permohonan KHS (Semester 1 - 7)",
    keperluan: "Prasyarat Pendaftaran Ujian Khusus",
    detailTambahan: "Dimohon cetak fisik resmi berstempel basah",
    format: "Cetak Fisik Berstempel Basah",
    status: "Verifikasi Admin Loket",
    statusStep: 2,
    posisiBerkas: "Meja Verifikasi Loket Admin FAPERTA",
    estimasiSelesai: "Besok, Pukul 14.00 WIB",
    catatanAdmin: "Petugas sedang mencocokkan data nilai SIAKAD untuk dicetak dan dimintakan stempel basah.",
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
    format: "Berkas Fisik Loket",
    status: "Verifikasi Dosen / Kaprodi",
    statusStep: 3,
    posisiBerkas: "Ruang Kaprodi Agroteknologi (FAPERTA)",
    estimasiSelesai: "Senin, 07 September 2026",
    catatanAdmin: "Berkas fisik KHS telah lolos verifikasi loket. Sedang menunggu persetujuan dan disposisi Kaprodi Agroteknologi.",
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
    detailTambahan: "Dosen: Dr. Ir. Hj. Nurhidayah, M.S. | Presensi 100%",
    format: "Surat Rekonsiliasi Nilai",
    status: "Selesai (Siap Diambil)",
    statusStep: 4,
    posisiBerkas: "Selesai Diproses Online (SIAKAD)",
    estimasiSelesai: "Selesai Diproses Online",
    catatanAdmin: "Komplain nilai telah diverifikasi oleh Dosen Pengampu dan perubahan nilai telah diproses di SIAKAD. Mahasiswa tidak perlu hadir ke loket.",
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
    keperluan: "Pengambilan Sampel Tanah di Kebun Sawit",
    detailTambahan: "Lokasi: PT Perkebunan Nusantara",
    format: "Surat Pengantar Fisik",
    status: "Ditolak",
    statusStep: -1,
    posisiBerkas: "Ditolak Administrasi",
    estimasiSelesai: "-",
    catatanAdmin: "DITOLAK: Berkas proposal belum disetujui Dosen Pembimbing Utama. Silakan minta tanda tangan pembimbing terlebih dahulu.",
    tanggal: "02 September 2026, 09:15 WIB",
    isNewForAdmin: false
  }
];

export const INITIAL_DEMO_TICKETS = INITIAL_PORTAL_TICKETS;

// Daftar Akun Administrator & Petugas Loket FAPERTA (Dikelola Super Admin)
export interface AdminAccountItem {
  id: string;
  nama: string;
  username: string;
  password?: string;
  role: 'Super Admin' | 'Dekanat' | 'Dosen / Kaprodi' | 'Petugas Loket' | string;
  loket: string;
  status: 'Aktif' | 'Nonaktif';
  terakhirAkses: string;
}

export const MASTER_ADMINS: AdminAccountItem[] = [
  {
    id: "ADM-01",
    nama: "Admin Utama Sistem Loket",
    username: "admin",
    password: "admin",
    role: "Super Admin",
    loket: "Loket Admin FAPERTA",
    status: "Aktif",
    terakhirAkses: "Hari Ini, 20:45 WIB"
  },
  {
    id: "ADM-02",
    nama: "Dekanat (Pimpinan Fakultas)",
    username: "dekanat",
    password: "faperta2026",
    role: "Dekanat",
    loket: "Ruang Dekanat FAPERTA",
    status: "Aktif",
    terakhirAkses: "Hari Ini, 16:20 WIB"
  },
  {
    id: "ADM-03",
    nama: "Ir. H. Sudirman, M.P. (Kaprodi)",
    username: "kaprodi",
    password: "faperta2026",
    role: "Dosen / Kaprodi",
    loket: "Ruang Kaprodi Agroteknologi",
    status: "Aktif",
    terakhirAkses: "04 Sep 2026, 15:30 WIB"
  },
  {
    id: "ADM-04",
    nama: "Petugas Loket Agroteknologi",
    username: "agrotek",
    password: "admin123",
    role: "Petugas Loket",
    loket: "Loket Admin FAPERTA",
    status: "Aktif",
    terakhirAkses: "04 Sep 2026, 14:10 WIB"
  },
  {
    id: "ADM-05",
    nama: "Petugas Loket Agribisnis",
    username: "agribisnis",
    password: "admin123",
    role: "Petugas Loket",
    loket: "Loket Admin FAPERTA",
    status: "Aktif",
    terakhirAkses: "04 Sep 2026, 11:30 WIB"
  },
  {
    id: "ADM-06",
    nama: "Staf Verifikasi Tata Usaha",
    username: "legalisir",
    password: "admin123",
    role: "Petugas Loket",
    loket: "Ruang Tata Usaha",
    status: "Aktif",
    terakhirAkses: "03 Sep 2026, 15:00 WIB"
  }
];

