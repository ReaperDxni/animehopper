<script setup lang="ts">
const { useUser, signOut } = useAuth()
const user = useUser()

function handleClick (key: string | number) {
  if (key === 'logout') {
    signOut()
  }
}
const options = [
  {
    label: 'Profile',
    key: 'profile'
  },
  {
    label: 'Logout',
    key: 'logout'
  }
]

</script>

<template>
  <div class="flex items-center gap-2 mr-3">
    <span class="text-gray-300 font-semibold"> <span class="text-gray-400 font-medium">Hello, </span> {{ user?.name }}</span>
    <n-dropdown :options="options" class="bg-lightbackcolor" @select="handleClick">
      <n-avatar
        round
        :size="38"
        :bordered="true"
        src="https://pics.craiyon.com/2023-10-19/ebd05cc8b06f4c439bccef6994f74fc1.webp"
        class="hover:cursor-pointer"
      />
    </n-dropdown>
  </div>
</template>
