interface Body {
  increment: boolean
}

let x = 0

export default defineEventHandler(async (event) => {
  const body = await readBody<Body>(event)
  // const { cloudflare } = event.context
  const like = body.increment ? 1 : -1
  x += like
  console.log(x)
  // const currentLikes = (await cloudflare.env.MIAOUUU.get('likes')) ?? 0
  // await cloudflare.env.MIAOUUU.put('likes', currentLikes + like)
  return {
    result: 'success',
  }
})
