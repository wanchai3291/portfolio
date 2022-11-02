import Link from 'next/link'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Background from './Background'

type Props = {}

export default function Hero({ }: Props) {

    const [text] = useTypewriter({
        words: ['Hi!', 'The Name`s Chai', 'It’s nice to meet you'],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className="h-screen flex flex-col space-x-8 item-center justify-center text-center overflow-hidden">
            <Background />
            <div className="z-20 mt-2">
                <div className="pt-5 mr-7">
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>

                    <Link href="#project">
                        <button className='heroButton'>Project</button>
                    </Link>
                </div>

                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#EFDF3B" />
                </h1>
                <h2 className="uppercase text-sm text-gray-500 pb-2 tracking-[15px] mt-5">
                    backend developer
                </h2>
            </div>


        </div>
    )
}