/** ISO 3166-1 alpha-2 → English country / territory names used by timeline region codes */
export const countryNamesByCode: Record<string, string> = {
  AT: 'Austria',
  BE: 'Belgium',
  BR: 'Brazil',
  CH: 'Switzerland',
  CI: 'Ivory Coast',
  CM: 'Cameroon',
  CN: 'China',
  DE: 'Germany',
  EG: 'Egypt',
  ES: 'Spain',
  FR: 'France',
  GB: 'United Kingdom',
  GH: 'Ghana',
  GR: 'Greece',
  GT: 'Guatemala',
  IN: 'India',
  IQ: 'Iraq',
  IR: 'Iran',
  IT: 'Italy',
  JP: 'Japan',
  KR: 'South Korea',
  MX: 'Mexico',
  NG: 'Nigeria',
  NL: 'Netherlands',
  NO: 'Norway',
  PE: 'Peru',
  PK: 'Pakistan',
  RU: 'Russia',
  SA: 'Saudi Arabia',
  SY: 'Syria',
  TR: 'Türkiye',
  US: 'United States',
};

export function countryNameOrCode(code: string): string {
  return countryNamesByCode[code] ?? code;
}
