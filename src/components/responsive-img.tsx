import Image from 'next/image'
import bgPatterDesktop from '../../public/background-pattern-desktop.svg'
import bgPatterMobile from '../../public/background-pattern-mobile.svg'
import { useEffect, useState } from 'react';

function ResponsiveImg() {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        if (process.browser) {
            setIsSmallScreen(window.innerWidth < 1280);

            const handleResize = () => {
                setIsSmallScreen(window.innerWidth < 1280);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <>
            {isSmallScreen ?
                (<Image src={bgPatterMobile} alt='' className='absolute z-0' />)
                :
                (<Image src={bgPatterDesktop} alt='' className='absolute z-0' />)
            }
        </>

    );
}

export default ResponsiveImg;