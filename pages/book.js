import Layout from '../components/Layout'
import BackButton from '../components/BackButton'

export default function Book() {
  return (
    <Layout title="The Bitcoin Tao">
      <BackButton />
      <div className="w-full h-screen pt-20">
        <iframe src="/book.html" className="w-full h-full" />
      </div>
    </Layout>
  )
}
