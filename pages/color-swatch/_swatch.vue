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
                class=" w-50 h-116 rounded cursor-pointer"
                :class="[i !== 0 ? 'ml-2' : 'ml-0']"
                :style="`background-color:${item}`"
                @mouseover="viewColorInfo(item)"
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
              class="antialiased font-bold leading-normal tracking-normal text-30 text-left"
              :style="`color:${colorTitle}`"
            >
              {{ colorTitle }}
            </h1>
            <!-- END -->

            <!-- SUB HEADER SECTION -->
            <p
              class="antialiased font-normal leading-normal tracking-normal text-left text-14 text-css-tools-gray-700"
            >
              An in-depth overview of this color swatch which mainly includes light, dark etc
            </p>
            <!-- END -->

            <!-- COLOR FORMATS -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium text-css-tools-black"
              >
                Color Formats
              </h1>
              <!-- END -->
              <!-- BOX SECTION -->
              <div
                class="mt-6 bg-css-tools-gray-200 w-full border border-solid border-css-tools-light rounded px-8 py-4"
              >
                <!-- HEX SECTION -->
                <div
                  class="antialiased text-css-tools-black leading-normal tracking-normal text-left text-14 font-medium"
                >
                  <p>
                    Hex Value - {{ this.hexValue }}
                  </p>
                  <p
                    class="mt-4"
                  >
                    Hex8 Value - {{ this.hex8Value }}
                  </p>
                  <p
                    class="mt-4"
                  >
                    RGB Value - {{ this.rgbValue }}
                  </p>
                  <p
                    class="mt-4"
                  >
                    HSL Value - {{ this.hslValue }}
                  </p>
                  <p
                    class="mt-4"
                  >
                    HSV Value - {{ this.hsvValue }}
                  </p>
                </div>
                <!-- END -->
              </div>
              <!-- END -->
            </div>
            <!-- END -->
            <!-- LIGHT SHADES -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium text-css-tools-black"
              >
                Light Shades
              </h1>
              <!-- END -->
              <!-- LIGHT COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in lightShades"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    v-if="color.name !== '#ffffff'"
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div
                    v-if="color.name !== '#ffffff'"
                  >
                    <h3
                      class="mt-2 ml-2 text-css-tools-black text-css-tools-black-900 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- DARK SHADES -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium text-css-tools-black"
              >
                Dark Shades
              </h1>
              <!-- END -->
              <!-- LIGHT COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in darkShades"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    v-if="color.name !== '#000000'"
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div
                    v-if="color.name !== '#000000'"
                  >
                    <h3
                      class="mt-2 ml-2 text-css-tools-black text-css-tools-black-900 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- ANALOGOUS -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium text-css-tools-black"
              >
                Analogous
              </h1>
              <!-- END -->
              <!-- SUB HEADER SECTION -->
              <p
                class="antialiased font-normal leading-normal tracking-normal text-left text-14 text-css-tools-gray-700"
              >
                Groups of three colours that are next to each other on the colour wheel.
              </p>
              <!-- END -->
              <!-- ANALOGOUS COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in analogous"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div>
                    <h3
                      class="mt-2 ml-2 text-css-tools-black text-css-tools-black-900 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- MONOCHROMATIC -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium text-css-tools-black"
              >
                Monochromatic
              </h1>
              <!-- END -->
              <!-- SUB HEADER SECTION -->
              <p
                class="antialiased font-normal leading-normal tracking-normal text-left text-14 text-css-tools-gray-700"
              >
                Color schemes are derived from a single base hue and extended using its shades, tones and tints.
              </p>
              <!-- END -->
              <!-- MONOCHROMATIC COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in monochromatic"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div>
                    <h3
                      class="mt-2 ml-2 text-css-tools-black text-css-tools-black-900 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- SPLIT COMPLEMENT -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium text-css-tools-black"
              >
                Split Complement
              </h1>
              <!-- END -->
              <!-- SUB HEADER SECTION -->
              <p
                class="antialiased font-normal leading-normal tracking-normal text-left text-14 text-css-tools-gray-700"
              >
                Color scheme using one base color and two secondary colors.
              </p>
              <!-- END -->
              <!-- SPLIT COMPLEMENT COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in splitComplement"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div>
                    <h3
                      class="mt-2 ml-2 text-css-tools-black text-css-tools-black-900 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- TRIADS -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium text-css-tools-black"
              >
                Triads
              </h1>
              <!-- END -->
              <!-- SUB HEADER SECTION -->
              <p
                class="antialiased font-normal leading-normal tracking-normal text-left text-14 text-css-tools-gray-700"
              >
                All three colors are distributed evenly around the color wheel, causing no clear dominance of one color.
              </p>
              <!-- END -->
              <!-- TRIADS COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in triads"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div>
                    <h3
                      class="mt-2 ml-2 text-css-tools-black text-css-tools-black-900 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- TETRAD -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium text-css-tools-black"
              >
                Tetrad
              </h1>
              <!-- END -->
              <!-- SUB HEADER SECTION -->
              <p
                class="antialiased font-normal leading-normal tracking-normal text-left text-14 text-css-tools-gray-700"
              >
                All four colors are distributed evenly around the color wheel, causing no clear dominance of one color.
              </p>
              <!-- END -->
              <!-- TRIADS COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in tetrads"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div>
                    <h3
                      class="mt-2 ml-2 text-css-tools-black text-css-tools-black-900 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
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
