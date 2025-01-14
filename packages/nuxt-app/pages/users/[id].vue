<template>
  <div>
    <div>detail</div>
    <h1>{{ user.lastName }}</h1>
    <p>{{ user.email }}</p>
  </div>
</template>


<script setup lang="ts">
import { useRoute, useAsyncData } from 'nuxt/app'

// TypeScriptインターフェースの定義
interface User {
  id: string;
  lastName: string;
  email: string;
}

// ルートからパラメータを取得
const route = useRoute()
const { id } = route.params as { id: string }

// データフェッチ
const { data: user, pending, error } = await useAsyncData<User>('fetchUser', () =>
  fetch(`https://dummyjson.com/users/${id}`).then(res => {
    if (!res.ok) {
      throw new Error('ユーザーを取得できませんでした')
    }
    return res.json()
  })
)

// エラーハンドリング
if (error.value) {
  console.error(error.value)
}
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
