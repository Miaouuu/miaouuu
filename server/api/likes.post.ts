interface Body {
  increment: boolean
}

export default defineEventHandler(async (event) => {
  const body = await readBody<Body>(event)
  const { cloudflare } = event.context
  const like = body.increment ? 1 : -1
  const currentLikes = +(await cloudflare.env.MIAOUUU.get('likes')) ?? 0
  const sum = currentLikes + like
  await cloudflare.env.MIAOUUU.put('likes', sum > 0 ? sum : 0)
  return {
    result: 'success',
  }
})
