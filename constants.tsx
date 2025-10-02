import React from 'react';
import {
  IconBriefcase,
  IconChartBar,
  IconLightBulb,
  IconMegaphone,
  IconRocketLaunch,
  IconUsers,
} from './components/Icons';
import type { Service, TeamMember, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    title: 'Standarisasi & SOP',
    description: 'Menciptakan konsistensi rasa dan layanan di semua cabang dengan Standard Operating Procedures yang teruji.',
    features: [
      'Resep & Preparasi Terstandar',
      'Panduan Kualitas Layanan',
      'Manajemen Kebersihan & Keamanan',
      'Sistem Pelaporan Harian',
    ],
    icon: <IconBriefcase className="h-8 w-8" />,
  },
  {
    title: 'Strategi Branding & Marketing',
    description: 'Membangun identitas brand yang kuat dan strategi pemasaran digital yang efektif untuk menjangkau lebih banyak pelanggan.',
    features: [
      'Positioning & Brand Identity',
      'Manajemen Media Sosial',
      'Kampanye Iklan Digital (Meta & Google Ads)',
      'Program Loyalitas Pelanggan',
    ],
    icon: <IconMegaphone className="h-8 w-8" />,
  },
  {
    title: 'Pengembangan Menu & Inovasi',
    description: 'Merancang menu yang menarik, menguntungkan, dan sesuai dengan tren pasar terkini untuk meningkatkan penjualan.',
    features: [
      'Analisis Food Costing & Profitabilitas',
      'Menu Engineering',
      'Pengembangan Resep Baru',
      'Fotografi Makanan Profesional',
    ],
    icon: <IconLightBulb className="h-8 w-8" />,
  },
  {
    title: 'Manajemen Keuangan & Operasional',
    description: 'Mengoptimalkan profitabilitas melalui kontrol biaya yang ketat dan manajemen operasional yang efisien.',
    features: [
      'Analisis Laporan Laba Rugi',
      'Manajemen Inventaris & Stok',
      'Sistem Point of Sale (POS) Terintegrasi',
      'Perencanaan Anggaran & Proyeksi',
    ],
    icon: <IconChartBar className="h-8 w-8" />,
  },
  {
    title: 'Pelatihan & Pengembangan SDM',
    description: 'Meningkatkan kapabilitas tim Anda, dari juru masak hingga manajer, untuk memberikan performa terbaik.',
    features: [
      'Pelatihan Service Excellence',
      'Leadership untuk Manajer Cabang',
      'Teknik Memasak Dasar & Lanjutan',
      'Program Pengembangan Karyawan',
    ],
    icon: <IconUsers className="h-8 w-8" />,
  },
  {
    title: 'Sistemasi & Skalabilitas Bisnis',
    description: 'Mempersiapkan bisnis Anda untuk ekspansi dengan sistem yang solid, siap untuk diduplikasi di cabang baru.',
    features: [
      'Pembuatan Business Blueprint',
      'Panduan Pembukaan Cabang Baru',
      'Sistem Waralaba (Franchise)',
      'Penerapan Teknologi & Otomatisasi',
    ],
    icon: <IconRocketLaunch className="h-8 w-8" />,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Erwan',
    role: 'Founder - CEO',
    imageUrl: 'https://picsum.photos/200/200?random=1',
  },
  {
    name: 'Anton',
    role: 'Co-Founder - COO',
    imageUrl: 'https://picsum.photos/200/200?random=2',
  },
  {
    name: 'Dwi Agus Winarko',
    role: 'Co-Founder - CCO',
    imageUrl: 'https://picsum.photos/200/200?random=3',
  },
  {
    name: 'Kurniawan Mahdi',
    role: 'Co-Founder - CTO',
    imageUrl: 'https://picsum.photos/200/200?random=4',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "GastroPreneur mengubah cara kami melihat bisnis. SOP yang mereka implementasikan membuat kualitas kami konsisten dan profitabilitas meningkat 30% dalam 6 bulan!",
    name: 'Ahmad Subarjo',
    business: 'Owner, Sate Klathak Pak Budi',
    imageUrl: 'https://picsum.photos/200/200?random=5',
  },
  {
    quote: "Dari satu warung tenda, kini kami punya 5 cabang di 3 kota. Semua berkat blueprint bisnis dan sistemasi dari tim GastroPreneur. Sangat direkomendasikan.",
    name: 'Rina Wijaya',
    business: 'Founder, Ayam Geprek Juara',
    imageUrl: 'https://picsum.photos/200/200?random=6',
  },
  {
    quote: "Strategi branding mereka luar biasa. Brand kami jadi lebih dikenal dan penjualan online kami naik drastis. Tim yang sangat profesional dan suportif.",
    name: 'Kevin Tan',
    business: 'CEO, Kopi Senja',
    imageUrl: 'https://picsum.photos/200/200?random=7',
  },
];


export const FINANCIAL_PROJECTION_DATA = {
  title: "Contoh Proyeksi Peningkatan Profitabilitas",
  headers: ["Metrik", "Sebelum Konsultasi", "Setelah Konsultasi (6 Bulan)", "Peningkatan"],
  data: [
    ["Omset Bulanan", 150000000, 210000000, "+40%"],
    ["Food Cost", "35%", "28%", "-7%"],
    ["Biaya Operasional", 45000000, 42000000, "-6.7%"],
    ["Laba Bersih", 18750000, 52800000, "+181%"],
  ]
};