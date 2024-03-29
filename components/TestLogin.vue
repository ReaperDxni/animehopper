<script setup lang="ts">
const { useUser, refreshUserState } = useAuth()
const user = useUser()

async function handleLogin () {
  await $fetch('/api/login', {
    method: 'POST',
    body: {
      name: 'Maga',
      password: '123'
    }
  })
  await refreshUserState()
}

async function handleLogout () {
  await $fetch('/api/logout', {
    method: 'POST'
  })
  await refreshUserState()
}
</script>

<template>
  <div class="flex px-20 py-20 text-gray-300 space-x-5 items-center">
    <span v-if="user">Hello, {{ user.name }}</span>
    <span v-else>Not signed in</span>
    <n-button v-if="!user" type="success" ghost @click="handleLogin">
      Test sign in
    </n-button>
    <n-button v-if="user" type="error" ghost @click="handleLogout">
      Logout
    </n-button>
  </div>
</template>
