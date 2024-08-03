import { useRouter } from 'next/navigation'

export function useCurrentPath() {
  const router = useRouter()
  return router.pathname()
}