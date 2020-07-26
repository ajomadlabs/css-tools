<template>
  <div>
    <!-- TOP NAVBAR COMPONENT -->
    <top-navbar/>
    <!-- END -->
    <!-- COLOR PALETTE CARD SECTION -->
    <center
      class="mt-20"
    >
      <div
        style="max-width: 1180px"
      >
        <!-- PALETTE CONTAINER -->
        <div
          class="flex flex-wrap justify-center items-start"
        >
          <!-- PALETTE CARD -->
          <div
            v-for="i in 18"
            :key="i"
            class="w-1/5 px-2 py-4 cursor-pointer mb-8 h-64 rounded-lg bg-css-tools-white shadow-md"
            :class="[i > 0 ? 'ml-4' : 'ml-0']"
          >
            <!-- FIRST ROW -->
            <div
              class="flex items-center gap-2 justify-between"
            >
              <!-- COLOR ONE -->
              <div
                class="w-28 h-28 bg-red-300"
              />
              <!-- END -->

              <!-- COLOR TWO -->
              <div
                class="w-28 h-28 bg-yellow-400"
              />
              <!-- END -->
            </div>
            <!-- END -->

            <!-- SECOND ROW -->
            <div
              class="flex items-center gap-2 justify-between mt-2"
            >
              <!-- COLOR THREE -->
              <div
                class="w-28 h-28 bg-green-200"
              />
              <!-- END -->

              <!-- COLOR FOUR -->
              <div
                class="w-28 h-28 bg-pink-900"
              />
              <!-- END -->
            </div>
            <!-- END -->
          </div>
          <!-- END -->
        </div>
        <!-- END -->
      </div>
    </center>
    <!-- END -->
  </div>
</template>

<script src="./index.js" />
