<template>
  <div class="data-ai-tree" role="tree" aria-label="Data Science & AI hierarchy">
    <!-- AI column -->
    <div class="col">
      <div class="box root">
        <h4 class="box-title"><i class="fas fa-robot"></i><span>Artificial Intelligence</span></h4>
        <div class="box child">
          <div class="box-header">
            <i class="fas fa-brain"></i>
            <span>Machine Learning</span>
          </div>
          <div class="box child">
            <div class="box-header">
              <i class="fas fa-network-wired"></i>
              <span>Deep Learning</span>
            </div>
            <div class="leaf-row">
              <div class="leaf" title="Computer Vision">
                <i class="fas fa-image"></i>
                <span>Computer Vision</span>
              </div>
              <div class="leaf" title="Natural Language Processing">
                <i class="fas fa-language"></i>
                <span>NLP</span>
              </div>
              <div class="leaf" title="Recommendation Systems">
                <i class="fas fa-star"></i>
                <span>Neural Recommenders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Data Science column -->
    <div class="col">
      <div class="box root">
        <h4 class="box-title"><i class="fas fa-chart-line"></i><span>Data Science</span></h4>
        <div class="grid-ds">
          <div class="ds-item">
            <i class="fas fa-database"></i>
            <span>Data Mining</span>
          </div>
          <div class="ds-item">
            <i class="fas fa-superscript"></i>
            <span>Statistics</span>
          </div>
          <div class="ds-item">
            <i class="fas fa-chart-bar"></i>
            <span>Visualization</span>
          </div>
          <div class="ds-item">
            <i class="fas fa-wrench"></i>
            <span>Feature Engineering</span>
          </div>
        </div>
        <div class="helper">
          <i class="fas fa-link"></i>
          <span>Usa ML y DL como herramientas</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  skills: { type: Array, default: () => [] },
})
</script>

<style scoped>
.data-ai-tree {
  --bd: rgba(30, 144, 255, 0.25);
  --bd-strong: rgba(30, 144, 255, 0.45);
  --bg: rgba(14, 20, 34, 0.45);
  --bg-dark: rgba(17, 24, 42, 0.55);
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 760px) {
  .data-ai-tree {
    grid-template-columns: 1fr 1fr;
  }
}
.col {
  display: grid;
  gap: 10px;
}

.box {
  border: 1px solid var(--bd);
  border-radius: 12px;
  background: var(--bg);
  padding: 12px;
  position: relative;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}
.box:hover {
  border-color: var(--bd-strong);
  transform: translateY(-2px);
}
.box-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 8px;
  font-size: 17px;
  color: #b8daff;
}
.box-title i {
  font-size: 18px;
}

.box.child {
  margin-left: 16px;
  margin-top: 10px;
  background: var(--bg-dark);
}
.box.child::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 0;
  width: 10px;
  height: 100%;
  border-left: 2px solid var(--bd);
}
.box.child .box-header {
  position: relative;
  padding-left: 14px;
}
.box.child .box-header::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 12px;
  height: 0;
  border-top: 2px solid var(--bd);
}
.box-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}
.box-header i {
  font-size: 16px;
  color: #b8daff;
}

.leaf-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 10px;
  position: relative;
  padding-top: 10px;
}
.leaf-row::before {
  content: '';
  position: absolute;
  top: 0;
  left: 12px;
  right: 12px;
  border-top: 2px solid var(--bd);
}
.leaf {
  border: 1px solid var(--bd);
  border-radius: 10px;
  background: var(--bg-dark);
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 6px;
  padding: 10px 8px;
  position: relative;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}
.leaf::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  border-left: 2px solid var(--bd);
}
.leaf:hover {
  border-color: var(--bd-strong);
  transform: translateY(-2px);
}
.leaf i {
  font-size: 18px;
  color: #cfe8ff;
}
.leaf span {
  font-size: 13px;
  color: #d8ecff;
  font-weight: 600;
}

.grid-ds {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.ds-item {
  border: 1px solid var(--bd);
  border-radius: 10px;
  background: var(--bg-dark);
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 6px;
  padding: 10px 8px;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}
.ds-item:hover {
  border-color: var(--bd-strong);
  transform: translateY(-2px);
}
.ds-item i {
  font-size: 18px;
  color: #cfe8ff;
}
.ds-item span {
  font-size: 13px;
  color: #d8ecff;
  font-weight: 600;
}

.helper {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  color: #cfe8ff;
}
.helper i {
  font-size: 16px;
}
</style>
