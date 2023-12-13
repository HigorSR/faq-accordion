import Questions from "./questions";
import Title from "./title";

function Card() {
    return (
        <div className='
        z-10 mt-32 mb-5 px-5 py-6 rounded-xl bg-white shadow-2xl shadow-black/20 w-[320px]
        xl:mt-[12rem] xl:px-10 xl:pt-10 xl:w-[590px]'>
            <Title />

            <Questions />
        </div>
    );
}

export default Card;