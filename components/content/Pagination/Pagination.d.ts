/** Mono pager: prev/next text links, 40px number cells, active = inverted ink. Renders nothing when total ≤ 1. */
export interface PaginationProps { current?: number; total?: number; onChange?: (page: number) => void; prevLabel?: string; nextLabel?: string }
export declare function Pagination(props: PaginationProps): JSX.Element | null;
