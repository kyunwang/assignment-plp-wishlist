
interface PriceProps {
	price: number;
	locale?: string;
	currency?: string;
}

const Price = ({ price, locale = 'nl-NL', currency = 'EUR' }: PriceProps) => {
	const formattedPrice = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
	}).format(price);

	return (
		<span>{formattedPrice}</span>
	);
};

export default Price;