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
    <span class="text-gray-300 font-semibold"> {{ user?.name }}</span>
    <n-dropdown :options="options" class="bg-lightbackcolor" @select="handleClick">
      <n-avatar
        round
        :size="32"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        class="hover:cursor-pointer"
      />
    </n-dropdown>
  </div>
</template>
