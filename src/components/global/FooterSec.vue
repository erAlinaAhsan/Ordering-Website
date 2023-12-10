<template>
  <footer class="text-white">
    <div class="container-fluid mt-5 pt-5">
      <div class="flex px-5">
        <div class="w-full lg:w-1/2 md:mb-5 lg:pe-3 lg:pe-xl-5">
          <h5 class="text-secondary text-uppercase mb-4">Get In Touch</h5>
          <p class="mb-4">
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
            et dolor sed dolor. Rebum tempor no vero est magna amet no
          </p>
          <p class="mb-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="me-3 text-warning h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            123 Street, New York, USA
          </p>
          <p class="mb-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="me-3 text-warning h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
              ></path>
              <polyline points="9 14 15 9 9 4"></polyline>
            </svg>
            info@example.com
          </p>
          <p class="mb-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="me-3 text-warning h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10V3M12 21v-7M4 14h16M4 10h16"
              ></path>
            </svg>
            +012 345 67890
          </p>
        </div>
        <div class="w-full lg:w-1/2">
          <div class="flex flex-wrap">
            <div class="mb-5 md:w-1/2 lg:w-1/4">
              <h5 class="text-secondary text-uppercase mb-4">Quick Shop</h5>
              <div class="flex flex-col justify-start">
                <!-- ... (Quick Shop links) ... -->
              </div>
            </div>
            <div class="mb-5 md:w-1/2 lg:w-1/4">
              <h5 class="text-secondary text-uppercase mb-4">My Account</h5>
              <div class="flex flex-col justify-start">
                <!-- ... (My Account links) ... -->
              </div>
            </div>
            <div class="mb-5 md:w-1/2 lg:w-1/4">
              <h5 class="text-secondary text-uppercase mb-4">Newsletter</h5>
              <p class="mb-3">
                Duo stet tempor ipsum sit amet magna ipsum tempor est
              </p>
              <form action="" class="mb-4">
                <!-- ... (Newsletter form) ... -->
              </form>
              <h6 class="text-secondary text-uppercase mb-3">Follow Us</h6>
              <div class="flex">
                <a href="#" class="text-warning me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </a>
                <a href="#" class="text-warning me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19V2m6 0v17m-4-6h7m-11 0H2"
                    ></path>
                  </svg>
                </a>
                <a href="#" class="text-warning me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </a>
                <a href="#" class="text-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="border-top py-4 px-5"
        style="border-color: rgba(256, 256, 256, 0.1) !important"
      >
        <div class="text-lg-start">
          <p>
            &copy; {{ new Date().getFullYear() }} All Right Reserved. Designed
            by
            <em class="text-warning fw-bold">Msallem Yamina</em>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSec",
};
</script>

<style>
/* Add your component-specific styles here */
</style>
