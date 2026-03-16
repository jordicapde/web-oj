import { getCollection } from 'astro:content';

export async function GET({ request }) {
  try {
    const url = new URL(request.url);
    const bggId = url.searchParams.get('bggId');

    if (!bggId) {
      return new Response(JSON.stringify({ error: 'Missing bggId parameter' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Get all games from the collection
    const allGames = await getCollection('jocs');

    // Find the game with matching BGG ID
    const game = allGames.find((game) => String(game.data.bgg) === String(bggId));

    if (!game) {
      return new Response(JSON.stringify({ error: 'Game not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Return the game data
    return new Response(
      JSON.stringify({
        title: game.data.game,
        extras: game.data.extras,
        game_image: game.data.game_image,
        id: game.data.id,
        date: game.data.date,
        partner_present: game.data.partner_present,
        price: game.data.price,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error in API route:', error);

    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
