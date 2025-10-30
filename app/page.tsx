'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Home() {
  const [riddleId, setRiddleId] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (riddleId.trim()) {
      router.push(`/riddle/${riddleId.trim()}`);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>🎭 Квест загадок</h1>
          <p className={styles.description}>
            Привет! Ты нашел загадочное приложение...
          </p>
          <div className={styles.instructions}>
            <p>
              Когда ты найдешь первую ножку, рядом с ней будет бумажка с
              математической загадкой
            </p>
            <p>Это число ты должен ввести в поле ввода</p>
            <p>
              После того как ты введешь верное число, появится загадка с тем
              местом, где находится следующая ножка
            </p>
            <p>Первое число - это пароль от компьютера Никиты Миронова</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              value={riddleId}
              onChange={(e) => setRiddleId(e.target.value)}
              placeholder="Введи число из математической загадки"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Открыть загадку 🎯
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
