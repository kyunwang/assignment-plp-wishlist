import cars from './cars.json';

export const GET = async () => {
	return new Response(JSON.stringify(cars));
};
