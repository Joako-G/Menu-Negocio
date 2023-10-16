const SERVER_DOMAIN = 'https://64cfbdccffcda80aff522398.mockapi.io/menu';

export const getDishes = async () =>{
  try {
    const response = await fetch(`${SERVER_DOMAIN}/dishes`);
    return response.json();
  } catch {
    throw new Error ('could not fetch dishes');
  }
}