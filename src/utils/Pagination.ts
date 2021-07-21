interface IPaginate<T> {
    currentPage: number;
    pages: number;
    perPage: number;
    data: T;
}

export function paginate<T>(
    item: T[],
    currentPage: number,
    limitItems: number,
): IPaginate<T[]> {
    const perPage = currentPage * limitItems - limitItems;
    const pages = Math.ceil(item.length / limitItems);

    const newArr = item.slice(
        (currentPage - 1) * limitItems,
        currentPage * limitItems,
    );

    return {
        currentPage,
        pages,
        perPage: perPage === 0 ? limitItems : perPage,
        data: newArr,
    };
}
