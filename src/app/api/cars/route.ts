import { NextRequest } from 'next/server';
import cars from '../cars.json';

export const GET = async (request: NextRequest) => {
	const searchParams = request.nextUrl.searchParams;
	const ids = searchParams.get('ids');

	if (!ids) return;

	const idsArray = ids.split(',');
	const filteredCars = cars.filter((car) => idsArray.includes(car.id));
	return new Response(JSON.stringify(filteredCars));
};
