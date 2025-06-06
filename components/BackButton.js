import { useRouter } from 'next/router'

export default function BackButton() {
  const router = useRouter()
  return (
    <button onClick={() => router.back()} className="btn btn-circle btn-ghost fixed top-4 left-16 z-50">
      <i className="fas fa-arrow-left"></i>
    </button>
  )
}
