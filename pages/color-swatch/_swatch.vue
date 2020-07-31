<template>
  <div>
    <!-- COLOR PALETTE CARD SECTION -->
    <center
      class="mt-34"
    >
      <div
        style="max-width: 1180px"
      >

        <!-- HEADER SECTION -->
        <div
          class="mx-27"
        >
          <!-- SECTION ONE -->
          <h1
            class="antialiased font-semibold leading-normal tracking-normal text-24 text-left text-css-tools-black"
          >
            Color Swatch {{ swatchNumber }}
          </h1>
          <!-- END -->

          <!-- SECTION TWO -->
          <p
            class="antialiased font-normal leading-normal tracking-normal text-left text-14 text-css-tools-gray-700"
          >
            Let this swatch be the very next one you choose for your upcoming project.
          </p>
          <!-- END -->

          <!-- SECTION THREE -->
          <div
            class="flex flex-wrap w-full items-center mt-16"
          >
            <!-- COLOR SECTION -->
            <div
              v-for="(item, i) in colorSwatch"
              :key="i"
            >
              <!-- COLOR -->
              <div
                class=" w-50 h-116 rounded"
                :class="[i !== 0 ? 'ml-2' : 'ml-0']"
                :style="`background-color:${item}`"
              />
              <!-- END -->
              <!-- COLOR CODE -->
              <div>
                <h3
                  class="mt-2 text-css-tools-black-900 font-medium text-16 text-center antialiased leading-normal tracking-normal text-center"
                  :style="`color: ${item}`"
                >
                  {{ item }}
                </h3>
              </div>
              <!-- END -->
            </div>
            <!-- END -->

          </div>
          <!-- END -->

          <!-- SECTION FOUR -->
          <div
            class="my-20"
          >
            <!-- HEADER SECTION -->
            <h1
              class="antialiased font-semibold leading-normal tracking-normal text-24 text-left text-css-tools-black"
            >
              More Details
            </h1>
            <!-- END -->

            <!-- SUB HEADER SECTION -->
            <p
              class="antialiased font-normal leading-normal tracking-normal text-left text-14 text-css-tools-gray-700"
            >
              An in-depth overview of this color swatch which mainly includes light, dark etc
            </p>
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
