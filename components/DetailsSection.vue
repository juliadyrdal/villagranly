<script setup>
import {
    ArrowPathIcon,
    HomeModernIcon,
    KeyIcon,
    ClipboardDocumentIcon,
    DocumentTextIcon,
    InformationCircleIcon,
  } from "@heroicons/vue/24/outline";
  
  const features = [
    {
      name: "Vulputate cursus",
      description:
        "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
      icon: HomeModernIcon,
    },
    {
      name: "Tincidunt mattis",
      description:
        "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
      icon: KeyIcon,
    },
    {
      name: "Ultricies libero",
      description:
        "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
      icon: DocumentTextIcon,
    },
    {
      name: "Risus proin",
      description:
        "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
      icon: InformationCircleIcon,
    },
    ]
</script>

<template>
    <div class="mx-auto py-20 max-w-2xl sm:mt-20 lg:mt-32 lg:max-w-4xl">
          <dl
            class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
          >
            <div class="relative pl-16">
              <dt
                class="text-base uppercase font-sans font-medium leading-7 text-theme-grey-dark"
              >
                <div
                  class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-theme-surface-light"
                >
                  <component
                    :is="features[0].icon"
                    class="h-6 w-6 text-theme-accent"
                    aria-hidden="true"
                  />
                </div>
                {{ $t("features.articles.one.heading") }}
              </dt>
              <dd
                class="mt-2 text-sm font-sans font-normal leading-7 text-gray-600"
              >
                {{ $t("features.articles.one.copy") }}
              </dd>
            </div>
            <div class="relative pl-16">
              <dt
                class="text-base uppercase font-sans font-medium leading-7 text-theme-grey-dark"
              >
                <div
                  class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-theme-surface-light"
                >
                  <component
                    :is="features[1].icon"
                    class="h-6 w-6 text-theme-accent"
                    aria-hidden="true"
                  />
                </div>
                {{ $t("features.articles.two.heading") }}
              </dt>
              <dd
                class="mt-2 text-sm font-sans font-normal leading-7 text-gray-600"
              >
                {{ $t("features.articles.two.copy") }}
              </dd>
            </div>
            <div class="relative pl-16">
              <dt
                class="text-base uppercase font-sans font-medium leading-7 text-theme-grey-dark"
              >
                <div
                  class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-theme-surface-light"
                >
                  <component
                    :is="features[2].icon"
                    class="h-6 w-6 text-theme-accent"
                    aria-hidden="true"
                  />
                </div>
                {{ $t("features.articles.three.heading") }}
              </dt>
              <dd
                class="mt-2 text-sm font-sans font-normal leading-7 text-gray-600"
              >
                {{ $t("features.articles.three.copy") }}
              </dd>
            </div>
            <div class="relative pl-16">
              <dt
                class="text-base uppercase font-sans font-medium leading-7 text-theme-grey-dark"
              >
                <div
                  class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-theme-surface-light"
                >
                  <component
                    :is="features[3].icon"
                    class="h-6 w-6 text-theme-accent"
                    aria-hidden="true"
                  />
                </div>
                {{ $t("features.articles.four.heading") }}
              </dt>
              <dd
                class="mt-2 text-sm font-sans font-normal leading-7 text-gray-600"
              >
                {{ $t("features.articles.four.copy") }}
              </dd>
            </div>
          </dl>
        </div>
</template>