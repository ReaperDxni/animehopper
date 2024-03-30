<script setup lang="ts">
import { type FormInst } from 'naive-ui'

const { signUp } = useAuth()

const message = useMessage()

const formRef = ref<FormInst | null>(null)
const formValue = ref({
  name: '',
  password: '',
  repeatPassword: ''
})

const rules = {
  name: {
    required: true,
    message: 'Name is required',
    trigger: 'blur'
  },
  password: {
    required: true,
    message: 'Password is required',
    trigger: 'blur'
  },
  repeatPassword: {
    required: true,
    message: 'Repeat password is required',
    trigger: 'blur'
  }
}

const inputRepeatPasswordValidation = computed(() => {
  if (formValue.value.password === formValue.value.repeatPassword) {
    return undefined
  } else {
    return 'error'
  }
})
const inputRepeatPasswordFeedback = computed(() => {
  return inputRepeatPasswordValidation.value ? 'Passwords do not match' : ''
})

function handleRegister (e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      await signUp(formValue.value.name, formValue.value.password)
      navigateTo('/auth/login')
      message.success('You have successfully registered! Please sign in now!')
    }
  })
}

</script>

<template>
  <div class="flex items-center justify-center grow login-bg">
    <div class="w-full h-full flex items-center justify-center backdrop-blur bg-gradient-to-b from-black to-black/40">
      <n-card class="w-full sm:w-1/2 xl:w-1/4 mx-5 py-2 px-3 shadow -space-y-2">
        <template #header>
          <h1>Sign up</h1>
          <p class="text-sm text-gray-400">
            Create a brand new account
          </p>
        </template>
        <div class="flex flex-col">
          <n-form
            ref="formRef"
            :model="formValue"
            :label-width="80"
            :rules="rules"
            class="flex flex-col -space-y-5"
          >
            <n-form-item path="name">
              <n-input
                v-model:value="formValue.name"
                placeholder="Name"
              />
            </n-form-item>
            <n-form-item path="password">
              <n-input v-model:value="formValue.password" type="password" placeholder="Password" />
            </n-form-item>
            <n-form-item path="repeatPassword" :feedback="inputRepeatPasswordFeedback" :validation-status="inputRepeatPasswordValidation">
              <n-input v-model:value="formValue.repeatPassword" type="password" placeholder="Repeat Password" />
            </n-form-item>

            <n-form-item
              class="mx-auto flex pt-6 pb-3"
            >
              <n-button
                type="primary"
                ghost
                @click="handleRegister"
              >
                <span class="px-3">Submit</span>
              </n-button>
            </n-form-item>
          </n-form>

          <span class="text-center text-gray-400">Already have an account? <NuxtLink href="/auth/login" class="cursor-pointer text-primary hover:text-primary/70 transition">Sign in</NuxtLink></span>
        </div>
      </n-card>
    </div>
  </div>
</template>

<style scoped>

.login-bg {
    background-image: url('https://images6.alphacoders.com/134/thumb-1920-1345614.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

</style>
