// cssfn:
import {
    // cssfn css specific types:
    CssStyleCollection,
    
    
    
    // writes css in javascript:
    rule,
    children,
    style,
}                           from '@cssfn/core'                          // writes css in javascript

// reusable-ui core:
import {
    // a capability of UI to rotate its layout:
    OrientationableOptions,
    usesOrientationable,
}                           from '@reusable-ui/core'                    // a set of reusable-ui packages which are responsible for building any component

// reusable-ui components:
import {
    // styles:
    usesRangeLayout,
    usesRangeVariants,
    usesRangeStates,
    
    usesRange,
    
    trackElm,
    trackLowerElm,
    trackUpperElm,
    thumbElm,
    
    defaultOrientationableOptions,
}                           from '@reusable-ui/range'        // a base component



/*
    Write stylesheet in *similar* to react_hook.
    We appends our hook with `uses` instead of `use`, so it wouldn't conflict with react hook
*/
export const usesHueSliderLayout = (options?: OrientationableOptions) => {
    // options:
    const orientationableStuff = usesOrientationable(options, defaultOrientationableOptions);
    const {ifOrientationInline, ifOrientationBlock, orientationInlineSelector, orientationBlockSelector} = orientationableStuff;
    const parentOrientationInlineSelector = `${orientationInlineSelector}&`;
    const parentOrientationBlockSelector  = `${orientationBlockSelector }&`;
    const ifParentOrientationInline       = (styles: CssStyleCollection) => rule(parentOrientationInlineSelector, styles);
    const ifParentOrientationBlock        = (styles: CssStyleCollection) => rule(parentOrientationBlockSelector , styles);
    
    
    
    const {rangeVars} = usesRange();
    
    
    
    return style({
        ...usesRangeLayout(), // copy from <Range>
        ...style({
            ...children(trackElm, {
                // backgrounds:
                ...ifParentOrientationInline({
                    backgroundImage: [[
                        'linear-gradient(90deg in hsl increasing hue, hsl(0, 100%, 50%), hsl(359.95, 100%, 50%))',
                    ]],
                }),
                ...ifParentOrientationBlock({
                    backgroundImage: [[
                        'linear-gradient(0deg in hsl increasing hue, hsl(0, 100%, 50%), hsl(359.95, 100%, 50%))',
                    ]],
                }),
                
                
                
                // children:
                ...children(trackLowerElm, {
                    background: 'none',
                }),
                ...children(trackUpperElm, {
                    background: 'none',
                }),
                ...children(thumbElm, {
                    backgroundColor: `hsl(calc(${rangeVars.valueRatio} * 360), 100%, 50%)`,
                }),
            }),
        }),
    });
}
export const usesHueSliderVariants = usesRangeVariants; // copy from <Range>
export const usesHueSliderStates   = usesRangeStates;   // copy from <Range>



export default () => style({
    // layouts:
    ...usesHueSliderLayout(),
    
    // variants:
    ...usesHueSliderVariants(),
    
    // states:
    ...usesHueSliderStates(),
});