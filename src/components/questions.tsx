import Image from 'next/image'
import iconPlus from '../../public/icon-plus.svg'
import iconMinus from '../../public/icon-minus.svg'

import { useState } from "react";

function Questions() {
    const [items, setItems] = useState([
        {
            id: 1,
            isVisible: true,
            title: 'What is Frontend Mentor, and how will it help me?',
            text: `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`,
        },
        {
            id: 2,
            isVisible: false,
            title: 'Is Frontend Mentor free?',
            text: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`,
        },
        {
            id: 3,
            isVisible: false,
            title: 'Can I use Frontend Mentor projects in my portfolio?',
            text: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`,
        },
        {
            id: 4,
            isVisible: false,
            title: `How can I get help if I'm stuck on a challenge?`,
            text: `The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`,
        }
    ])

    const handleToggle = (id: Number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, isVisible: !item.isVisible } : item
            )
        );
    };

    return (
        <>
            {
                items.map((item) => (
                    <div key={item.id} className='flex flex-col gap-4 mt-5'>
                        <div className='flex items-center justify-between'>
                            <button
                                onClick={() => handleToggle(item.id)}
                                className='text-start text-lg text-Dark-purple font-bold leading-5 w-[90%] hover:text-[#AD28EB] xl:w-[100%]'>
                                {item.title}
                            </button>
                            <button onClick={() => handleToggle(item.id)}>
                                {item.isVisible ?
                                    (<Image src={iconPlus} alt='Icon plus' />)
                                    :
                                    (<Image src={iconMinus} alt='Icon Minus' />)
                                }
                            </button>
                        </div>
                        {item.isVisible && <p className='text-Grayish-purple text-sm font-semibold xl:pr-10 xl:font'> {item.text} </p>}
                        <div className='w-full border-[1px] border-Light-pink'></div>
                    </div>
                ))
            }
        </>
    );
}

export default Questions;