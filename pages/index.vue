<template>
  <div>
    <!-- COLOR PALETTE CARD SECTION -->
    <center
      class="xs:mt-28 md:mt-34"
    >
      <div
        class="relative"
        style="max-width: 1180px"
      >

        <!-- HEADER SECTION -->
        <div
          class="xs:mx-8 md:mx-16 ipadPro:mx-20 lg:mx-27"
        >
          <!-- SECTION ONE -->
          <div
            class="md:flex md:items-center md:justify-between"
          >
            <!-- TEXT SECTION -->
            <h1
              class="antialiased font-semibold leading-normal tracking-normal xs:text-18 md:text-24 text-left text-css-tools-black"
            >
              Color Swatches
            </h1>
            <!-- END -->
            <!-- BUTTON SECTION -->
            <button
              class="xs:hidden md:block rounded px-4 border border-solid border-css-tools-gray-100 text-center py-2 text-css-tools-black font-medium text-14 cursor-pointer"
              @click="openAddSwatchModal"
            >
              Create swatch
            </button>
            <!-- END -->
          </div>
          <!-- END -->

          <!-- SECTION TWO -->
          <p
            class="antialiased font-normal leading-normal tracking-normal text-left text-14 text-css-tools-gray-700"
          >
            Choose your favourite colors with ease for your next project.
          </p>
          <!-- END -->
        </div>
        <!-- END -->

        <!-- PALETTE CONTAINER -->
        <div
          v-if="loading == false"
          class="mt-10 flex flex-wrap justify-center items-start"
        >
          <!-- PALETTE CARD -->
          <div
            v-for="(color, i) in colorPalettes"
            :key="i"
            class="xs:w-5/12 md:w-1/5 xs:ml-2 md:ml-4 px-4 py-6 cursor-pointer mb-8 h-auto rounded-lg bg-css-tools-white shadow-md"
            @click="goTo(i)"
          >
            <!-- FIRST ROW -->
            <div
              class="flex items-center justify-between"
            >
              <!-- COLOR ONE -->
              <div
                class="w-28 xs:h-12 sm:h-16 md:h-26 rounded-md"
                :style="`background-color:${color.color_one}`"
                @mouseover="setActiveColor(i, 1)"
                @mouseleave="resetColor(i)"
              >
                <div
                  v-show="color.color_one_active"
                  class="bg-css-tools-black opacity-50 rounded-t-lg"
                >
                  <h3
                    class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                  >
                    {{ color.color_one }}
                  </h3>
                </div>
              </div>
              <!-- END -->

              <!-- COLOR TWO -->
              <div
                class="w-28 xs:h-12 sm:h-16 md:h-26 rounded-md ml-2"
                :style="`background-color:${color.color_two}`"
                @mouseover="setActiveColor(i, 2)"
                @mouseleave="resetColor(i)"
              >
                <div
                  v-show="color.color_two_active"
                  class="bg-css-tools-black opacity-50 rounded-t-lg"
                >
                  <h3
                    class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                  >
                    {{ color.color_two }}
                  </h3>
                </div>
              </div>
              <!-- END -->
            </div>
            <!-- END -->

            <!-- SECOND ROW -->
            <div
              class="flex items-center justify-between mt-2"
            >
              <!-- COLOR THREE -->
              <div
                class="w-28 xs:h-12 sm:h-16 md:h-26 rounded-md"
                :style="`background-color:${color.color_three}`"
                @mouseover="setActiveColor(i, 3)"
                @mouseleave="resetColor(i)"
              >
                <div
                  v-if="color.color_three_active"
                  class="bg-css-tools-black opacity-50 rounded-t-lg"
                >
                  <h3
                    class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                  >
                    {{ color.color_three }}
                  </h3>
                </div>
              </div>
              <!-- END -->

              <!-- COLOR FOUR -->
              <div
                class="w-28 xs:h-12 sm:h-16 md:h-26 rounded-md ml-2"
                :style="`background-color:${color.color_four}`"
                @mouseover="setActiveColor(i, 4)"
                @mouseleave="resetColor(i)"
              >
                <div
                  v-show="color.color_four_active"
                  class="bg-css-tools-black opacity-50 rounded-t-lg"
                >
                  <h3
                    class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                  >
                    {{ color.color_four }}
                  </h3>
                </div>
              </div>
              <!-- END -->
            </div>
            <!-- END -->
            <!-- THIRD ROW -->
            <div
              class="mt-4"
            >
              <!-- PALETTE NAME -->
              <h3
                class="antialiased font-medium leading-normal tracking-normal text-center xs:text-12 md:text-16 text-css-tools-gray-dark"
              >
                Color Swatch <br> #{{i + 1}}
              </h3>
              <!-- END -->
            </div>
            <!-- END -->
          </div>
          <!-- END -->
        </div>
        <!-- END -->
        <!-- MOBILE ADD SWATCH BUTTON -->
        <div
          class="xs:block md:hidden text-center rounded-full cursor-pointer"
          @click="openAddSwatchModal"
        >
          <button
            class="btn-float rounded-full text-css-tools-black font-semibold text-26 bg-css-tools-white"
          >
            <center>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 32 32"><path d="M 15 5 L 15 15 L 5 15 L 5 17 L 15 17 L 15 27 L 17 27 L 17 17 L 27 17 L 27 15 L 17 15 L 17 5 Z"/></svg>
            </center>
          </button>
        </div>
        <!-- END -->
        <!-- SWATCH LOADER COMPONENT -->
        <swatch-loader
          v-if="loading"
        />
        <!-- END -->
      </div>
      <!-- END -->
      <!-- ADD SWATCH MODAL COMPONENT -->
      <add-swatch-modal/>
      <!-- END -->
    </center>
    <!-- END -->
  </div>
</template>

<script src="./index.js" />
