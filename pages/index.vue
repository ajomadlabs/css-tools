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
            v-for="(color, i) in colorPalettes"
            :key="i"
            class="w-1/5 px-4 py-6 cursor-pointer mb-8 h-auto rounded-lg bg-css-tools-white shadow-md"
            :class="[i > 0 ? 'ml-4' : 'ml-0']"
          >
            <!-- FIRST ROW -->
            <div
              class="flex items-center gap-2 justify-between"
            >
              <!-- COLOR ONE -->
              <div
                class="w-28 h-26 rounded-md"
                :style="`background-color:${color.colorOne}`"
              />
              <!-- END -->

              <!-- COLOR TWO -->
              <div
                class="w-28 h-26 rounded-md"
                :style="`background-color:${color.colorTwo}`"
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
                class="w-28 h-26 rounded-md"
                :style="`background-color:${color.colorThree}`"
              />
              <!-- END -->

              <!-- COLOR FOUR -->
              <div
                class="w-28 h-26 rounded-md"
                :style="`background-color:${color.colorFour}`"
              />
              <!-- END -->
            </div>
            <!-- END -->
            <!-- THIRD ROW -->
            <div
              class="mt-4"
            >
              <!-- PALETTE NAME -->
              <h3
                class="antialiased font-medium leading-normal tracking-normal text-center text-16 text-css-tools-gray-dark"
              >
                Color Swatch #{{i + 1}}
              </h3>
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
