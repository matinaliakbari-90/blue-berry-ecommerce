import { searchProductsByName } from "@/sanity/helpers";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const { query } = await searchParams;
    const products = await searchProductsByName(query)


    return (
        <div className="max-w-7xl mx-auto mt-60 md:40 px-4">
            matin
        </div>
    )
}
