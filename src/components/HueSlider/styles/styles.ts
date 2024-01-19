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
            // animations:
            filter: 'none !important',
            
            
            
            ...children(trackElm, {
                // animations:
                filter: 'none !important',
                
                
                
                // backgrounds:
                ...ifParentOrientationInline({
                    backgroundImage  : [[
                        // 'linear-gradient(90deg in hsl increasing hue, hsl(0, 100%, 50%), hsl(359.95, 100%, 50%))',
                        "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAABCAYAAADzaTTzAAAAAXNSR0IArs4c6QAAAFpJREFUOE/lk1EKgDAMQ59B739g7SZjDEp/BBmbzI9QQqANpNmyyBzA7rAwT4ILOKmzYQY35yPej77e6obgjwHPDHbgY8me0y3V9pWO9e6tx309uUgfaO64gG9YrbgDh794DAAAAABJRU5ErkJggg==')",
                    ]],
                    backgroundRepeat : 'repeat-y',
                }),
                ...ifParentOrientationBlock({
                    backgroundImage  : [[
                        // 'linear-gradient(0deg in hsl increasing hue, hsl(0, 100%, 50%), hsl(359.95, 100%, 50%))',
                        "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAFoCAYAAACWmZGvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAB2SURBVEhL7ZSxDoAgEEPLIf//wRBqIUYlMLngcMvLtRxLUwARacCBAWmU7rGhSlgBYLmhTw92eauDXXsNCCCNUVKhDUjuTR6F3iyUG3mU7jUADLSoH8uU3BoKd5pW+LinTq9v/M+joFopOiV3QY/1Ld3rQA0oJ+UcwNCeq9/TAAAAAElFTkSuQmCC')",
                    ]],
                    backgroundRepeat : 'repeat-x',
                }),
                backgroundSize   : 'contain',
                
                
                
                // children:
                ...children(trackLowerElm, {
                    background: 'none',
                }),
                ...children(trackUpperElm, {
                    background: 'none',
                }),
                ...children(thumbElm, {
                    // animations:
                    filter: 'none !important',
                    
                    
                    
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