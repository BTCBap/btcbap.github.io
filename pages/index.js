import Layout from '../components/Layout'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto max-w-md bg-base-100 dark:bg-neutral p-8 rounded-2xl shadow"
      >
        <header className="mb-4">
          <h1 className="text-3xl font-bold mb-2">BTCBap</h1>
          <a href="https://t.me/btcbap">
            <img
              className="mx-auto rounded-full w-36 h-36 shadow"
              src="https://pbs.twimg.com/profile_images/1923455909247807489/FQ5WPaOf_400x400.jpg"
              alt="BTCBap's Twitter Picture"
            />
          </a>
        </header>
        <p className="mb-4">&#8734; / 21M</p>
        <nav className="space-x-4">
          <a className="btn" href="https://denver.space">The Space</a>
          <a className="btn" href="/book">Book</a>
          <a className="btn" href="https://x.com/@btcbap">Social</a>
        </nav>
      </motion.div>
    </Layout>
  )
}
