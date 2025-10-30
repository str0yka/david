// Загадки хранятся в .env.local для безопасности
// Чтобы изменить загадки, отредактируйте файл .env.local

export const riddles: Record<string, string> = (() => {
  try {
    const riddlesData = process.env.NEXT_PUBLIC_RIDDLES_DATA;
    if (!riddlesData) {
      console.error(
        'NEXT_PUBLIC_RIDDLES_DATA not found in environment variables'
      );
      return {};
    }
    return JSON.parse(riddlesData);
  } catch (error) {
    console.error('Failed to parse NEXT_PUBLIC_RIDDLES_DATA:', error);
    return {};
  }
})();
