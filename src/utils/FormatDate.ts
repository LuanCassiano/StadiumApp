export function format(value: string): string {
    const newValue = new Date(value);

    const day = newValue.getDate();
    const dayFormatted = day + 1;

    const month = new Intl.DateTimeFormat('pt-BR', {
        month: 'short',
    }).format(newValue);

    return `${dayFormatted} de ${month}`;
}
