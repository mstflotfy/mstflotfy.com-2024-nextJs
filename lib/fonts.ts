
import { Roboto_Mono, Gloria_Hallelujah, Freehand, DM_Serif_Display } from "next/font/google"

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
export const gloria = Gloria_Hallelujah({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gloria',
})
export const freehand = Freehand({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-freehand',
})
export const dm_serif_display = DM_Serif_Display({
  weight: '400',
  preload: true,
  subsets: ['latin'],
})