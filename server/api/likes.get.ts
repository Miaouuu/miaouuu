export default defineEventHandler(async (event) => {
  const { cloudflare } = event.context
  const currentLikes = (await cloudflare.env.MIAOUUU.get('likes')) ?? 0
  return {
    likes: currentLikes,
  }
})
