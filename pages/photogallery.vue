<script setup></script>

<template>
    <div>
      <TheHeader @scroll-to="goTo()" />
      <PageHeader
        title="pages.photoGallery.title"
        body=""
      />
      <PageSection>
        <PhotoGrid />
      </PageSection>
    </div>
  </template>
  
  <style lang="scss" scoped></style>