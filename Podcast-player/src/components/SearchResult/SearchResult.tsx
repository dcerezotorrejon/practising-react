

interface SearchResultProps {
    result: string,
}
export function SearchResult ({result}: SearchResultProps) {
    return (
        <>
            <p>{result}</p>
        </>
    );
}