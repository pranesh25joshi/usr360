import axios from "axios";
import sites from "@/app/sites";

export async function POST(req) {
  const { username } = await req.json();

  if (!username)
    return new Response(JSON.stringify({ error: "Username is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });

  const check = Object.entries(sites).map(async ([siteName, details]) => {
    const url = details.url.replace("{}", username);

    try {
      const response = await axios.get(url);
      if (response.status === 200 && response.data.includes(username)) {
        return { siteName, available: true, url };
      } else {
        return { siteName, available: false, url };
      }
    } catch (e) {
      return { siteName, available: false, url };
    }
  });

  const results = await Promise.all(check);
  const available = results.filter((result) => result.available);

  return new Response(JSON.stringify({ available }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
