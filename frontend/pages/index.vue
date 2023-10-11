<template>
  <div>
    <UiContainer>
      <div class="h-full overflow-x-hidden">
        <LayoutTaskbar />
        <div class="px-[200px] min-h-screen pt-11 flex flex-col">
          <UiTypography type="h1" size="heading1" data-aos="fade-up" data-aos-duration="300">
            Mette Ghijsen
          </UiTypography>
          <UiTypography type="h2" size="heading2" class="pb-6" data-aos="fade-up" data-aos-duration="300">
            S6 Advanced Media Design, Research Based
          </UiTypography>
          <div class="flex justify-start w-[900px]" data-aos="fade-up" data-aos-duration="300">
            <div class="w-[400px] my-2 mr-2">
              <UiButton label="deliverables" primary big arrow to="/deliverables" />
            </div>
            <div class="w-[400px] my-2">
              <UiButton label="leeswijzer" secondary big to="/leeswijzer" />
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>
