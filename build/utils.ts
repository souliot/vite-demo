import dotenv from 'dotenv'

export interface ViteEnv {
  VITE_PORT: number
  VITE_PUBLIC_PATH: string
}

/**
 * @description: 加载vite的环境变量配置
 */
export function loadEnv(): ViteEnv {
  const env = process.env.NODE_ENV
  const ret: any = {}
  const envList = [`.env.${env}.local`, `.env.${env}`, '.env.local', '.env']
  envList.forEach((env) => {
    dotenv.config({
      path: env,
    })
  })

  for (const envName of Object.keys(process.env)) {
    let realName = (process.env as any)[envName].replace(/\\n/g, '\n')
    realName =
      realName === 'true' ? true : realName === 'false' ? false : realName
    if (envName === 'VITE_PORT') {
      realName = Number(realName)
    }
    ret[envName] = realName
    process.env[envName] = realName
  }

  return ret
}

export function isDevFn(): boolean {
  return process.env.NODE_ENV === 'development'
}

export function isProdFn(): boolean {
  return process.env.NODE_ENV === 'production'
}
