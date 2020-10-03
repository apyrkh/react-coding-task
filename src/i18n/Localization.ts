export interface LocalizationTexts {[x: string]: string}

export interface TextParams {[x: string]: any}

export class Localization {
  public locale: string
  private readonly texts: LocalizationTexts

  constructor (locale: string, texts: LocalizationTexts) {
    this.locale = locale
    this.texts = texts
  }

  public getText = (code: string, parameters?: TextParams): string => {
    const text = this.texts[code]
    if (!text) return code
    if (!parameters) return text

    return this.insertParams(text, parameters)
  }

  private readonly insertParams = (text: string, params: TextParams): string => {
    if (!params) throw new Error('Localization: missed params')

    let result = text
    for (const key in params) {
      result = result.replace('{{' + key + '}}', params[key])
    }
    return result
  }
}
