export const formatDate = (date: string) => {
    const updatedAtDate = new Date(date);
    const day = String(updatedAtDate.getDate()).padStart(2, '0');
    const month = String(updatedAtDate.getMonth() + 1).padStart(2, '0');
    const year = updatedAtDate.getFullYear();

    const hour = String(updatedAtDate.getHours()).padStart(2, '0');
    const minute = String(updatedAtDate.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hour}:${minute}`;
};
