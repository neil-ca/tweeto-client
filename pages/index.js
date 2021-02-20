
import Link from 'next/link'
export default function Home(props) {
  return (
    <div>
      <h1>Hello! my name is Neil and this is the home</h1>
      <Link href="login"><a>Login</a></Link>
    </div>
  )
}
