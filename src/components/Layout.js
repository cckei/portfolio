import Landing from '@/components/sections/landing'
import Service from '@/components/sections/service'
import Skills from '@/components/sections/skills'
import Works from '@/components/sections/works'
import WorkPopup from '@/components/sections/workDetails'
import Contact from '@/components/sections/contact'

import Image from 'next/image'

export default function Layout(){
    const myLoader = ({ src, width, quality }) => {
        return `./${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <>
            <header className="mast-header">
                <Image loader={myLoader} src='/logo_horizontal.png' alt="cckei.co" width={160} height={51} />
            </header>
            <Landing />
            {/* <Service /> */}
            <Skills />
            <Works />
            <WorkPopup />
            <Contact />
        </>
    )
}