export default defineEventHandler(async (event) => {
  const apiKey = process.env.GOOGLE_API_KEY; // Your Google API Key
  const placeId = "ChIJu0tIdzrZxIkR6PqbqyB58v8"; // Place ID of your business

  // URL for Google Places API to fetch place details including ratings
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total&key=${apiKey}`;

  try {
    // Making the API call to Google Places
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Checking if the API response is successful
    if (!response.ok) {
      const errorBody = await response.json(); // Parsing the error
      throw new Error(
        `Failed to fetch place details: ${response.status} ${errorBody.error_message}`
      );
    }

    // Parsing the JSON response
    const { result } = await response.json();

    // Constructing the result to only return necessary details
    return {
      name: result.name,
      rating: result.rating,
      reviewCount: result.user_ratings_total,
    };
  } catch (error) {
    // Error handling if the API call fails
    console.error("Failed to fetch place details:", error);
    return { error: "Failed to fetch place details", details: error.message };
  }
});
