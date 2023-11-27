const SERVER_DOMAIN = 'https://64cfbdccffcda80aff522398.mockapi.io/menu';

export const getDishes = async () =>{
  try {
    const response = await fetch(`${SERVER_DOMAIN}/dishes`);

    if (!response.ok)
      throw new Error('Error');
    return response.json();
  } catch(error) {
    throw new Error ('could not fetch dishes: ');
  }
}