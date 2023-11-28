<script setup>
useHead({
  title: 'Eiendom i Bergen',
})

useSeoMeta({
  title: 'Luksuseiendom i Bergen',
  ogTitle: 'Luksuseiendom i Bergen',
  description: 'Unik og særpreget villa som gir assosiasjoner til vikingetidens høvdinggårder og tradisjonell stølsarkitektur. Villa Granly er omkranset av en vakker park med strandlinje til Kviturspollen.',
  ogDescription: 'Unik og særpreget villa som gir assosiasjoner til vikingetidens høvdinggårder og tradisjonell stølsarkitektur. Villa Granly er omkranset av en vakker park med strandlinje til Kviturspollen.',
  ogImage: 'https://villa-granly.no/_nuxt/_DSC1694.2ee02c40.jpg',
})
</script>

<template>
  <div>
    <TheHero />
    <FeaturesSection id="features" />
    <PhotoSlideFeatures class="w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" />
    <DetailsSection id="details" />
    <MediaRightSection id="contact" />
  </div>
</template>

<style lang="scss" scoped></style>