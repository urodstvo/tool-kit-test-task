const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
});

/**
 * Функция для преобразования даты для карточки репозитория
 */
export const formatDate = (date: string | number) => {
    try {
        if (!date) return null;

        let updatedAtDate;
        // Если дата является числовой строкой, конвертируем её в число
        if (!isNaN(Number(date))) {
            updatedAtDate = new Date(Number(date));
        } else {
            updatedAtDate = new Date(date);
        }

        return formatter.format(updatedAtDate);
    } catch {
        return null;
    }
};
