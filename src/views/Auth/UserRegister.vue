<template>
  <div class="w-full h-screen">
    <div class="bg-white w-full">
      <form @submit.prevent="handleSubmit">
        <div
          class="form-body max-w-xl mx-auto lg:p-20 p-8 lg:mt-10 mt-5 space-y-8"
        >
          <!-- <div>
              <img src="../../../assets/logo/logo.svg" alt="" class="w-10" />
            </div> -->
          <div class="space-y-3">
            <h2 class="font-semibold text-gray-800 text-4xl">
              Create new account?
            </h2>
            <p class="text-gray-700">
              Please enter your information to register account.
            </p>
          </div>
          <button
            type="button"
            class="text-gray-700 flex justify-center gap-2 bg-gray-300 hover:bg-gray-100/50 p-2 w-full rounded-md"
          >
            <!-- <img
                class="w-8"
                src="../../../assets/logo/google-logo.svg"
                alt=""
              /> -->
            <a href="#" class="mt-1 text-gray-700"> Sign up with Google </a>
          </button>
          <span class="flex items-center justify-center space-x-2">
            <span class="h-px dark:bg-gray-600 bg-gray-200 w-full"></span>
            <span class="font-normal text-gray-500">or </span>
            <span class="h-px dark:bg-gray-600 bg-gray-200 w-full"></span>
          </span>
          <div class="space-y-5">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                v-model="userName"
                name="floating_text"
                id="floating_text"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
              />
              <label
                for="floating_text"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Username</label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="email"
                v-model="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Email address</label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="password"
                v-model="password"
                name="floating_password"
                id="floating_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
              />
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Create new password</label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="password"
                v-model="passwordConfirm"
                name="floating_password"
                id="floating_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
              />
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Confirm password</label
              >
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  autocomplete="off"
                  class="accent-primary focus:ring-4 cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary/30"
                />
              </div>
              <label
                for="remember"
                class="ml-2 text-sm cursor-pointer font-normal dark:text-white text-gray-500"
                >I accept term of service
              </label>
            </div>
          </div>

          <button
            class="text-white bg-primary hover:bg-primary/80 p-3 w-full rounded-md"
            @click="redirectToDashboard"
          >
            Submit, and Register
          </button>
          <p class="dark:text-white text-center text-gray-700">
            Already have an account?<button
              type="button"
              @click="$router.push('/auth/login')"
              class="ml-2 text-primary"
            >
              Login here
            </button>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "UserRegister",
  data() {
    return {
      baseURL: "https://ecommerce.hyperzod.dev/api/user/register",
      userName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post(this.baseURL, {
          userName: this.name,
          email: this.email,
          password: this.password,
        });

        const token = response.data.token;

        if (token) {
          localStorage.setItem("authToken", token);
          this.redirectToDashboard();
        } else {
          this.showRegisterErrorAlert();
        }
      } catch (error) {
        console.error("API Error:", error);
        this.showRegisterErrorAlert();
      }
    },
    redirectToDashboard() {
      this.$router.push("/").then(() => {
        this.showRegisterSuccessAlert();
      });
    },
    showRegisterSuccessAlert() {
      Swal.fire({
        text: "Register Success",
        icon: "success",
      });
    },

    showRegisterErrorAlert() {
      Swal.fire({
        text: "Invalid email or password",
        icon: "error",
      });
    },
  },
};
</script>
