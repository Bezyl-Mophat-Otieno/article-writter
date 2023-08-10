import Image from 'next/image'
import styles from './page.module.css'

// fetch data from external API
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json()
  return data
}

export default async function Home() {
  const data = await getStaticProps()
  console.log(data)
  return (
    <main className={styles.main}>
      <div className={styles.description}>


      </div>
    </main>
  )
}
