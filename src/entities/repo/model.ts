export const formatDate = (date: string) => {
    try {
        const updatedAtDate = new Date(date);

        const formatter = new Intl.DateTimeFormat('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        });

        return formatter.format(updatedAtDate);
    } catch {
        return null;
    }
};
