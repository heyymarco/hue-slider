// cssfn:
import {
    // style sheets:
    dynamicStyleSheet,
}                           from '@cssfn/cssfn-react'               // writes css in react hook



// styles:
import './styles'; // to satisfy hot reload
export const useHueSliderStyleSheet = dynamicStyleSheet(
    () => import(/* webpackPrefetch: true */ './styles')
, { id: 'hue-slider' }); // a unique salt for SSR support, ensures the server-side & client-side have the same generated class names
