<script setup>
const features = ref(null);
const details = ref(null);
const contact = ref(null);

function goTo(n) {
    console.log("success" + n)
      n.$el.scrollIntoView({behavior: "smooth"});
}
</script>

<template>
  <div>
    <TheHeader @scroll-to-features="goTo(features)" @scroll-to-details="goTo(details)" @scroll-to-contact="goTo(contact)" />
    <TheHero />
    <FeaturesSection ref="features" />
    <DetailsSection ref="details" />
    <MediaRightSection ref="contact" />
  </div>
</template>

<style lang="scss" scoped></style>