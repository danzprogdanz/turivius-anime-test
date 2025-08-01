export interface IProps {
    results: any
    loading: boolean
    error: string | null
    searchTerm: string
    hasMore: boolean
    loadMore: () => void
    onClose: () => void
}