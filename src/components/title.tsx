import Image from 'next/image'
import iconStar from '../../public/icon-star.svg'

function Title() {
    return (
        <div className='flex items-center gap-5'>
            <Image src={iconStar} alt='' className='w-7 xl:w-9' />
            <h1 className='text-4xl text-Dark-purple font-bold xl:text-5xl'>FAQs</h1>
        </div>
    );
}

export default Title;