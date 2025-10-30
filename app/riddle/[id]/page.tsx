import Link from 'next/link'
import { riddles } from '@/app/riddles'
import styles from './riddle.module.css'

export default function RiddlePage({ params }: { params: { id: string } }) {
  const riddle = riddles[params.id]

  if (!riddle) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h1 className={styles.errorTitle}>🤔 Хм...</h1>
            <p className={styles.errorText}>
              Похоже, такой загадки не существует.
            </p>
            <p className={styles.errorHint}>
              Проверь номер на стикере и попробуй еще раз!
            </p>
            <Link href="/" className={styles.backButton}>
              ← Вернуться на главную
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.badge}>Загадка #{params.id}</div>
          <h1 className={styles.title}>🎯 Загадка найдена!</h1>
          <div className={styles.riddleBox}>
            <p className={styles.riddleText}>{riddle}</p>
          </div>
          <Link href="/" className={styles.backButton}>
            ← Вернуться к началу
          </Link>
        </div>
      </div>
    </main>
  )
}

// Генерация статических путей для всех загадок
export async function generateStaticParams() {
  return Object.keys(riddles).map((id) => ({
    id: id,
  }))
}

