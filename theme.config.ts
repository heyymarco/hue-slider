import '@reusable-ui/typos/effects'
import { defineTheme, colorValues, borderValues, borders, borderRadiuses } from '@reusable-ui/core'
import { rangeValues } from '@reusable-ui/range'

// other libs:
import Color                from 'color'                // color utilities



// Themes:

// const primaryCol = Color('#9FA742').lighten(0.8);
// defineTheme('primary', primaryCol);

// const goldCol = Color('#D19B3E');
// defineTheme('gold', goldCol);
// // @ts-ignore
// colorValues.goldBold = goldCol.darken(1.2);



// Borders:

// borderValues.defaultWidth = '4px';
// borderValues.default = [[borders.style, borders.defaultWidth, borders.color]];

// borderRadiuses.md = '1.5rem' as any;


// because <HueSlider> is made from <Range>, modifying <Range> affects <HueSlider> too:
rangeValues.trackBlockSizeInline = '1em'; // for horizontal <Range>
rangeValues.trackInlineSizeBlock = '1em'; // for vertical <Range>
rangeValues.thumbInlineSize      = '2.5em';
rangeValues.thumbBlockSize       = '2.5em';
rangeValues.minInlineSizeInline  = '12rem'; // for horizontal <Range>
rangeValues.minBlockSizeBlock    = '12rem'; // for vertical <Range>