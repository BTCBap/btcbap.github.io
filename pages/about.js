import Layout from '../components/Layout'
import BackButton from '../components/BackButton'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout title="About BTCBap">
      <BackButton />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto max-w-md bg-base-100 dark:bg-neutral p-8 rounded-2xl shadow"
      >
        <header className="mb-4">
          <h1 className="text-3xl font-bold mb-2">About Me</h1>
        </header>
        <p className="mb-4">
          This is my personal site. It's a work in progress as I build it.<br />
          Feel free to browse around while it's under construction.
        </p>
        <div className="text-center">
          <img src="/content/bitcoinzen.jpg" alt="Bitcoin Zen" className="mx-auto rounded-2xl max-h-96 shadow" />
        </div>
      </motion.div>
    </Layout>
  )
}
