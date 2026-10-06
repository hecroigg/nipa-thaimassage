export const business = {
  name: 'Nipa Thaimassage & Kosmetik',
  address: 'R1,14',
  city: '68161 Mannheim',
  phoneDisplay: '0621 43771423',
  phoneHref: 'tel:+4962143771423',
  whatsappDisplay: '0176 72226289',
  whatsappBase: 'https://wa.me/4917672226289',
  maps: 'https://www.google.com/maps/place/Nipa+Thaimassage+%26+Kosmetik/@49.4891815,8.4684367,16z',
  hours: '10:00–19:00',
} as const

export type Language = 'de' | 'en'

export const whatsappLink = (language: Language) => {
  const message = language === 'de'
    ? 'Hallo Nipa, ich würde gerne einen Termin anfragen.'
    : 'Hello Nipa, I would like to request an appointment.'

  return `${business.whatsappBase}?text=${encodeURIComponent(message)}`
}
