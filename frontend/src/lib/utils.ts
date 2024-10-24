import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const toRupiah = (angka: number): string => {
  // Bulatkan angka ke bawah untuk menghilangkan semua pecahan
  const angkaBulat = Math.floor(angka);

  // Format angka sebagai rupiah
  const rupiah = new Intl.NumberFormat('id-ID', { 
    style: 'currency', 
    currency: 'IDR', 
    minimumFractionDigits: 0 // Menentukan jumlah digit di belakang koma (dalam kasus ini 0)
  }).format(angkaBulat);

  return rupiah;
}

export function epochToDateTime(epochTimestamp: string): string {
  // Epoch timestamp biasanya dalam satuan milidetik, jadi kita perlu mengalikannya dengan 1000
  const milliseconds = Number(epochTimestamp) * 1000;

  // Membuat objek Date dari nilai milidetik
  const date = new Date(milliseconds);

    // Format tanggal menggunakan Intl.DateTimeFormat
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
  
    const formattedDate = date.toLocaleDateString('id-ID',options);

  return formattedDate;
}