<script setup lang="ts">
const likes = ref(0)

const currentLike = await useFetch('/api/likes')
likes.value = currentLike.data.value?.likes || 0

const likedStorage = useLocalStorage('liked', false)
const liked = ref(likedStorage.value)
const display = ref('none')

const displayNone = debounce(() => {
  display.value = 'none'
}, 750)

const addLikeToKV = debounce(async () => {
  await useFetch('/api/likes', {
    method: 'POST',
    body: {
      increment: liked.value,
    },
  })
  likedStorage.value = liked.value
}, 1000)

function addLike() {
  display.value = 'block'
  liked.value = !liked.value
  likes.value += liked.value ? 1 : -1
  displayNone()
  addLikeToKV()
}
</script>

<template>
  <brutal-button
    id="like-button"
    class="like-button mt-8 inline-flex cursor-pointer items-center justify-center"
    :class="{
      'heart-like w-40 animate-[bounce-like_200ms_ease-in-out]': liked,
      'heart-unlike w-48 animate-[bounce-unlike_200ms_ease-in-out]': !liked,
    }"
    :style="`--display: ${display}`"
    href=""
    @click="addLike"
  >
    <section
      class="m-2 flex items-center justify-center"
      :class="{
        'flex-row-reverse gap-2': liked,
        'flex-row gap-4': !liked,
      }"
    >
      <img v-if="!liked" src="/heart-transparent.svg" class="h-10 w-10 select-none" />
      <img v-else src="/heart.svg" class="h-8 w-8 select-none" />
      <span class="select-none text-4xl font-bold">{{ liked ? likes : 'Like' }}</span>
    </section>
  </brutal-button>
</template>

<style>
@keyframes bounce-like {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-unlike {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.like-button:before,
.like-button:after {
  position: absolute;
  content: '';
  display: block;
  width: 140%;
  height: 100%;
  left: -20%;
  z-index: -1000;
  transition: all ease-in-out 0.5s;
  background-repeat: no-repeat;
}

.like-button:before {
  display: none;
  top: -75%;
  background-image: url('/heart.svg'), url('/heart.svg'), url('/heart.svg'), url('/heart.svg'), url('/heart.svg'),
    url('/heart.svg'), url('/heart.svg'), url('/heart.svg'), url('/heart.svg');
  background-size:
    10% 10%,
    20% 20%,
    15% 15%,
    20% 20%,
    18% 18%,
    10% 10%,
    15% 15%,
    10% 10%,
    18% 18%;
}

.like-button:after {
  display: none;
  bottom: -75%;
  background-image: url('/heart.svg'), url('/heart.svg'), url('/heart.svg'), url('/heart.svg'), url('/heart.svg'),
    url('/heart.svg'), url('/heart.svg');
  background-size:
    15% 15%,
    20% 20%,
    18% 18%,
    20% 20%,
    15% 15%,
    10% 10%,
    20% 20%;
}

.like-button.heart-like:before {
  display: var(--display);
  animation: top-like ease-in-out 0.75s forwards;
}

.like-button.heart-like:after {
  display: var(--display);
  animation: bottom-like ease-in-out 0.75s forwards;
}

.like-button.heart-unlike:before {
  display: var(--display);
  animation: top-unlike ease-in-out 0.75s forwards;
}

.like-button.heart-unlike:after {
  display: var(--display);
  animation: bottom-unlike ease-in-out 0.75s forwards;
}
@keyframes top-like {
  0% {
    background-position:
      5% 90%,
      10% 90%,
      10% 90%,
      15% 90%,
      25% 90%,
      25% 90%,
      40% 90%,
      55% 90%,
      70% 90%;
  }
  50% {
    background-position:
      0% 80%,
      0% 20%,
      10% 40%,
      20% 0%,
      30% 30%,
      22% 50%,
      50% 50%,
      65% 20%,
      90% 30%;
  }
  100% {
    background-position:
      0% 70%,
      0% 10%,
      10% 30%,
      20% -10%,
      30% 20%,
      22% 40%,
      50% 40%,
      65% 10%,
      90% 20%;
    background-size:
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%;
  }
}
@keyframes bottom-like {
  0% {
    background-position:
      10% -10%,
      30% 10%,
      55% -10%,
      70% -10%,
      85% -10%,
      70% -10%,
      70% 0%;
  }
  50% {
    background-position:
      0% 80%,
      20% 80%,
      45% 60%,
      60% 100%,
      75% 70%,
      95% 60%,
      105% 0%;
  }
  100% {
    background-position:
      0% 90%,
      20% 90%,
      45% 70%,
      60% 110%,
      75% 80%,
      95% 70%,
      110% 10%;
    background-size:
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%;
  }
}
@keyframes top-unlike {
  0% {
    background-position:
      5% 90%,
      10% 90%,
      10% 90%,
      15% 90%,
      25% 90%,
      25% 90%,
      40% 90%,
      55% 90%,
      70% 90%;
  }
  50% {
    background-position:
      0% 80%,
      0% 20%,
      10% 40%,
      20% 0%,
      30% 30%,
      22% 50%,
      50% 50%,
      65% 20%,
      90% 30%;
  }
  100% {
    background-position:
      0% 70%,
      0% 10%,
      10% 30%,
      20% -10%,
      30% 20%,
      22% 40%,
      50% 40%,
      65% 10%,
      90% 20%;
    background-size:
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%;
  }
}
@keyframes bottom-unlike {
  0% {
    background-position:
      10% -10%,
      30% 10%,
      55% -10%,
      70% -10%,
      85% -10%,
      70% -10%,
      70% 0%;
  }
  50% {
    background-position:
      0% 80%,
      20% 80%,
      45% 60%,
      60% 100%,
      75% 70%,
      95% 60%,
      105% 0%;
  }
  100% {
    background-position:
      0% 90%,
      20% 90%,
      45% 70%,
      60% 110%,
      75% 80%,
      95% 70%,
      110% 10%;
    background-size:
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%;
  }
}
</style>
