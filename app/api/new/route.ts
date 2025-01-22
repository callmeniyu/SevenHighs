export const GET = async () => {
    try {
        return new Response("Hello World", { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts", { status: 502 })
    }
}
