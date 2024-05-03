declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    'on:clickOutside'?: () => void;
  }
}
