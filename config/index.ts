import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Pi',
  description: '嘿！👋 我是 Pi-您的私人人工智能助理。我随时为您提供帮助，满足您的任何需求-只需提出即可！😊',
  copyright: 'AxzAI',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = true
export const promptTemplate = ''

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
