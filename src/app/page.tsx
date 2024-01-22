'use client'

import { useState } from 'react'
import styles from './page.module.css'
import { HueSlider } from '@/components/HueSlider'



export default function Home() {
    const [hue, setHue] = useState<number>(0);
    return (
        <main className={styles.main}>
            <HueSlider
                // variants:
                size='lg'
                theme='primary'
                
                
                
                // values:
                value={hue}
                onChange={(event) => setHue(event.target.valueAsNumber)}
            />
            <HueSlider
                // variants:
                size='lg'
                theme='primary'
                nude={false}
                
                
                
                // values:
                value={hue}
                onChange={(event) => setHue(event.target.valueAsNumber)}
            />
            <HueSlider
                // variants:
                size='sm'
                theme='primary'
                orientation='block'
                
                
                
                // values:
                value={hue}
                onChange={(event) => setHue(event.target.valueAsNumber)}
            />
            <HueSlider
                // variants:
                size='sm'
                theme='primary'
                orientation='block'
                nude={false}
                
                
                
                // values:
                value={hue}
                onChange={(event) => setHue(event.target.valueAsNumber)}
            />
            <p>
                Hue: {hue}
            </p>
            <p>
                To customize {'<HueSlider>'}, please edit <strong>theme.config.ts</strong>
            </p>
        </main>
    );
}
