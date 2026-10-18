// netlify/functions/story.mjs

export default async (request, context) => {
  try {
    // 1. Parse query parameters or request body if needed
    const url = new URL(request.url);
    const storyId = url.searchParams.get("id") || "default";

    // 2. Perform your logic (e.g., fetching a story from a database)
    const storyData = {
      id: storyId,
      title: "An Unexpected Journey",
      content: "Once upon a time in a digital realm...",
      author: "AI Collaborator"
    };

    // 3. Return a JSON response
    return new Response(JSON.stringify(storyData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" // Adjust CORS as needed
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
                      
