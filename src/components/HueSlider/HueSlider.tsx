'use client'
import { Range, RangeProps } from '@reusable-ui/range'
import { useHueSliderStyleSheet } from './styles/loader'



export interface HueSliderProps extends RangeProps {}
const HueSlider = (props: HueSliderProps): JSX.Element => {
    // styles:
    const styleSheet = useHueSliderStyleSheet();
    
    
    
    // props:
    const {
        mainClass = styleSheet.main,
        min       = 0,
        max       = 360,
    ...restHueSliderProps} = props;
    
    
    
    // jsx:
    return (
        <Range
            {...restHueSliderProps}
            mainClass={mainClass}
            min={min}
            max={max}
        />
    );
};
export {
    HueSlider,            // as named export
    HueSlider as default, // as default export (support for React.lazy)
}