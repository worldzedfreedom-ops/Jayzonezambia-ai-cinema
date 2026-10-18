JAYZONEZAMBIA AI CINEMA — AI STORY STUDIO UPGRADE

WHAT THIS ADDS
- Replaces the local story brief template with a real Gemini text-generation call.
- Uses a Netlify Function as a server-side proxy.
- The API key is read only from the server environment variable GEMINI_API_KEY.
- Does not generate actual video; it generates story, characters, scene breakdowns, and video prompts.

DEPLOY FROM ANDROID
1. Keep this ZIP and extract it using your phone's Files app.
2. In Netlify, open your existing site: sensational-stardust-66cbfa.
3. Go to Project configuration / Build & deploy / Environment variables (labels may vary).
4. Add variable:
   Key: GEMINI_API_KEY
   Value: your Gemini API key from https://aistudio.google.com/apikey
5. Save the environment variable.
6. Upload the extracted project folder containing index.html, netlify.toml, and the netlify/ folder to the existing site's deploy area. If Netlify's manual deploy interface only accepts a publish folder, use GitHub-connected deployment instead; Netlify Functions must be included in the deploy source.
7. Trigger a new deploy and wait for it to finish.
8. Open the live site, choose AI Studio, enter a story idea, and tap “Generate with AI”.

IMPORTANT SECURITY NOTES
- Never put the Gemini key in index.html, browser JavaScript, a public GitHub repository, or a chat.
- Add the key only as a Netlify environment variable.
- Do not enable paid billing if your budget is strictly zero. The Gemini free tier has model-specific limits and may change. If you hit quota, wait for reset.
- Netlify's free plan also has usage limits. Check Netlify usage before sharing widely.
- Because this is a public endpoint with no user accounts yet, keep it for personal/testing use. Before public launch, add abuse protection, request limits, and preferably authentication.
- AI provider free-tier requests may be used to improve Google's products; do not send private or sensitive information.
- If the current Netlify project was created using drag-and-drop, simply uploading only index.html will NOT deploy the server function. Deploy the full project source through a Git-connected repository or a deploy method that includes Netlify Functions.

TROUBLESHOOTING
- “AI setup is incomplete”: add GEMINI_API_KEY and redeploy.
- “Gemini rejected the request or API key”: verify the key and API access in Google AI Studio.
- “free AI quota or rate limit”: wait for quota reset; do not add billing if staying free.
- 404 at /.netlify/functions/story: Netlify Functions were not included in the deployment source.
