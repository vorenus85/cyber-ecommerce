<template>
  <div class="small-banner">
    <div class="small-banner-image">
      <slot name="image" />
    </div>
    <div class="small-banner-text-contents">
      <div class="small-banner-title">
        <slot name="title" />
      </div>
      <div class="small-banner-description">
        <slot name="description" />
      </div>
      <slot name="btn" />
    </div>
  </div>
</template>
<style>
.small-banner {
  display: flex;
  padding: 40px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  align-self: stretch;
}

.small-banner-text-contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  align-self: stretch;
}

.small-banner-item-1 {
  background: #ededed;
}

.small-banner-item-2 {
  background: #353535;
}

.small-banner-item-2 .small-banner-title h2 {
  color: #fff;
}

.small-banner-item-3 {
  background: #fff;
}

.small-banner-item-4 {
  background: #ededed;
}

.small-banner-title h2 {
  font-size: 34px;
  font-weight: 300;
  line-height: 40px; /* 117.647% */
  color: #000;
}

.small-banner-title h2 span {
  font-weight: 500;
}

.small-banner-description {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  color: #909090;
  text-align: center;
}

.small-banner-image img {
  max-height: 200px;
}
</style>
