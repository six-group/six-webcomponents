export type Country = 'switzerland' | 'germany' | 'france' | 'italy';

export interface City {
  value: string;
  label: string;
}

export const CITY_DATA: Record<Country, City[]> = {
  switzerland: [
    { value: 'zurich', label: 'Zurich' },
    { value: 'geneva', label: 'Geneva' },
    { value: 'basel', label: 'Basel' },
    { value: 'bern', label: 'Bern' },
    { value: 'lausanne', label: 'Lausanne' },
  ],
  germany: [
    { value: 'berlin', label: 'Berlin' },
    { value: 'munich', label: 'Munich' },
    { value: 'hamburg', label: 'Hamburg' },
    { value: 'cologne', label: 'Cologne' },
    { value: 'frankfurt', label: 'Frankfurt' },
  ],
  france: [
    { value: 'paris', label: 'Paris' },
    { value: 'marseille', label: 'Marseille' },
    { value: 'lyon', label: 'Lyon' },
    { value: 'toulouse', label: 'Toulouse' },
    { value: 'nice', label: 'Nice' },
  ],
  italy: [
    { value: 'rome', label: 'Rome' },
    { value: 'milan', label: 'Milan' },
    { value: 'naples', label: 'Naples' },
    { value: 'turin', label: 'Turin' },
    { value: 'florence', label: 'Florence' },
  ],
} as const;