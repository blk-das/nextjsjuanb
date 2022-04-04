import createCache from '@emotion/cache';

// anteponer: true mueve los estilos MUI a la parte superior del <head> para que se carguen primero.
// Permite a los desarrolladores anular fácilmente los estilos MUI con otras soluciones de estilo, como módulos CSS.
export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}