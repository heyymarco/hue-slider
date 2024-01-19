'use client'

import '@/../theme.config'            // custom theme colors

import './globals.css'

// cssfn:
import {
    StylesCSR,
} from './StylesCSR'                  // client_side_rendering CSS (required)
import {
    StylesSSR,
} from './StylesSSR'                  // server_side_rendering CSS (optional)



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <StylesCSR />
                <StylesSSR />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
