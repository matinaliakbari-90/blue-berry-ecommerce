import { twMerge } from "tailwind-merge";

interface PropsType {
    amount: number | undefined;
    className?: string;
}

export default function PriceFormatter({ amount, className }: PropsType) {
    const formattedPrice = new Number(amount).toLocaleString("en-US", {
        currency: "USD",
        style: "currency",
        minimumFractionDigits: 2,
    });

    return (
        <span className={twMerge("text-sm font-semibold text-darkText", className)}>
            {formattedPrice}
        </span>
    );
}