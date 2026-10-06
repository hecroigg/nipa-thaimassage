import { de } from './de'
import { en } from './en'

export const translations = { de, en }
export type Translation = typeof de | typeof en
