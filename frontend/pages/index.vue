<template>
  <div>
    <UiContainer>
      <div class="h-full overflow-x-auto">
        <LayoutTaskbar />
        <div class="px-[200px] pt-11 flex flex-col">
          <UiTypography type="h1" size="heading1">
            Mette Ghijsen
          </UiTypography>
          <UiTypography type="h2" size="heading2" class="pb-6">
            S6 Advanced Media Design, Research Based
          </UiTypography>
          <div class="flex justify-start w-[900px]">
            <div class="w-[400px] my-2 mr-2">
              <UiButton label="deliverables" primary big arrow to="/deliverables" />
            </div>
            <div class="w-[400px] my-2">
              <UiButton label="leeswijzer" secondary big />
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>
