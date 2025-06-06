import Head from 'next/head'
import DrawerMenu from './DrawerMenu'
import DarkModeToggle from './DarkModeToggle'
import AudioPlayer from './AudioPlayer'

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - BTCBap` : 'BTCBap - Personal Site'}</title>
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 dark:bg-neutral relative">
        <AudioPlayer />
        <DrawerMenu />
        {children}
        <DarkModeToggle />
      </div>
    </>
  )
}
