import type { Language } from './business'

export type Service = {
  id: string
  name: Record<Language, string>
  detail: Record<Language, string>
  prices: string[]
  featured?: boolean
}

export const massages: Service[] = [
  { id: 'thai', featured: true, name: { de: 'Traditionelle Thaimassage', en: 'Traditional Thai massage' }, detail: { de: 'Akupressur, sanfte Dehnungen und bewusste Berührung.', en: 'Acupressure, gentle stretching and mindful touch.' }, prices: ['60 Min · 55 €', '90 Min · 75 €'] },
  { id: 'oil', featured: true, name: { de: 'Ölmassage', en: 'Oil massage' }, detail: { de: 'Entspannende Ganzkörpermassage mit warmem Öl.', en: 'Relaxing full-body massage with warm oil.' }, prices: ['60 Min · 55 €', '90 Min · 75 €'] },
  { id: 'aroma', featured: true, name: { de: 'Aromaölmassage', en: 'Aromatic oil massage' }, detail: { de: 'Warme Duftöle und fließende Massagebewegungen.', en: 'Warm aromatic oils and flowing massage movements.' }, prices: ['60 Min · 55 €', '90 Min · 75 €'] },
  { id: 'back', featured: true, name: { de: 'Rücken & Nacken', en: 'Back & neck' }, detail: { de: 'Eine konzentrierte Auszeit für Rücken und Nacken.', en: 'A focused treatment for the back and neck.' }, prices: ['30 Min · 30 €', '60 Min · 55 €'] },
  { id: 'hot-stone', featured: true, name: { de: 'Hot Stone Massage', en: 'Hot stone massage' }, detail: { de: 'Warme Lavasteine treffen auf duftendes Öl.', en: 'Warm lava stones meet aromatic oil.' }, prices: ['90 Min · 90 €'] },
  { id: 'herbal', featured: true, name: { de: 'Kräuterstempelmassage', en: 'Herbal compress massage' }, detail: { de: 'Warme Kräuterstempel und eine tief beruhigende Wärme.', en: 'Warm herbal compresses and deeply calming heat.' }, prices: ['60 Min · 75 €', '90 Min · 100 €'] },
  { id: 'face-dry', name: { de: 'Gesichts- & Kopfmassage', en: 'Face & head massage' }, detail: { de: 'Ohne Öl.', en: 'Without oil.' }, prices: ['30 Min · 30 €'] },
  { id: 'face-cream', name: { de: 'Gesichtsmassage mit Creme', en: 'Face massage with cream' }, detail: { de: 'Sanfte Gesichtsmassage mit Massagecreme.', en: 'Gentle face massage with massage cream.' }, prices: ['30 Min · 30 €'] },
  { id: 'foot', name: { de: 'Fußmassage', en: 'Foot massage' }, detail: { de: 'Wohltuende Behandlung für Füße und Beine.', en: 'Soothing treatment for feet and legs.' }, prices: ['30 Min · 30 €', '60 Min · 55 €'] },
  { id: 'back-foot', name: { de: 'Rücken- & Fußmassage', en: 'Back & foot massage' }, detail: { de: 'Zwei Schwerpunkte in einer Behandlung.', en: 'Two areas of focus in one treatment.' }, prices: ['60 Min · 55 €'] },
  { id: 'herbal-oil', name: { de: 'Kräuterölmassage', en: 'Herbal oil massage' }, detail: { de: 'Wärmendes Kräuteröl und gezielte Massage.', en: 'Warming herbal oil and focused massage.' }, prices: ['30 Min · 33 €', '60 Min · 60 €', '90 Min · 80 €'] },
  { id: 'elements', name: { de: 'Energie-Elemente-Massage', en: 'Energy elements massage' }, detail: { de: 'Nur bei Nipa: Erde, Wasser, Wind und Feuer.', en: 'Only at Nipa: earth, water, wind and fire.' }, prices: ['30 Min · 30 €'] },
]

export const cosmetics: Service[] = [
  { id: 'manicure', name: { de: 'Maniküre', en: 'Manicure' }, detail: { de: 'Pflege für Hände und Nägel.', en: 'Care for hands and nails.' }, prices: ['25 €'] },
  { id: 'manicure-polish', name: { de: 'Maniküre mit Lack', en: 'Manicure with polish' }, detail: { de: 'Gepflegt und mit Farbe vollendet.', en: 'Care completed with your chosen colour.' }, prices: ['30 €'] },
  { id: 'pedicure', name: { de: 'Pediküre', en: 'Pedicure' }, detail: { de: 'Wohltuende Pflege für Füße und Nägel.', en: 'Soothing care for feet and nails.' }, prices: ['30 €'] },
  { id: 'pedicure-polish', name: { de: 'Pediküre mit Lack', en: 'Pedicure with polish' }, detail: { de: 'Pflege und ein gepflegtes Farbfinish.', en: 'Care with a polished colour finish.' }, prices: ['35 €'] },
]
