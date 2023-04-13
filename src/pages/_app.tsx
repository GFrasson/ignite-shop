import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        
      </header>

      <Component {...pageProps} />
    </div>
  )
}
