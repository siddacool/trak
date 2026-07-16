<script lang="ts">
  import '@flightlesslabs/dodo-ui/styles/global/index.scss';
  import '@flightlesslabs/dodo-ui/styles/components.scss';
  // Addon (dodo-ui-bits)
  import '@flightlesslabs/dodo-ui-bits/styles/main.scss';
  // Addon (dodo-ui-date)
  import '@flightlesslabs/dodo-ui-date/styles/main.css';

  import { ModalManager, ToastManager } from '@flightlesslabs/dodo-ui-bits';
  import { Theme } from '@flightlesslabs/dodo-ui';

  let { children } = $props();
</script>

<Theme global class="Theme" type="auto">
  <div class="App">
    {@render children()}
  </div>

  <ToastManager clearAfterDuration={3000} alignmentY="bottom" alignmentX="center" limit={3} />
  <ModalManager />
</Theme>

<style lang="scss">
  :global(*) {
    box-sizing: border-box;
  }

  :global(html) {
    font-family: sans-serif;
    font-optical-sizing: auto;
    font-size: 16px;
  }

  :global(body) {
    margin: 0;
    height: 100vh;
    overflow: hidden;
  }

  :global(.Theme) {
    height: 100vh;
    overflow: hidden;
  }

  .App {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }

  :global(.dodo-theme--dark) {
    color-scheme: dark;
  }
</style>
