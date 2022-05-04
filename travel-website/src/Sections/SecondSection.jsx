import cinqueterreImg from '../imagens/cinqueterre.jpg'
import newyorkImg from '../imagens/newyork.jpg'
import sanfranciscoImg from '../imagens/sanfran.jpg'
import pisaImg from '../imagens/pisa.jpg'
import parisImg from '../imagens/paris.jpg'

export function SecondSection(){
    return(
        <>
        <section className='my-10 mx-0 xl:mx-40 sm:mx-20'>
        <h1 className='text-3xl leading-8'>Good Offers Right Now</h1>
        <h2 className='leading-8'>Up to <strong>50%</strong> discount.</h2>
        <div className='grid grid-cols-4 grid-rows-2 gap-3'>
            <div className='relative col-span-2 row-span-2 hover:border-2 hover:border-red-500 hover:-translate-y-2 transition'>
                <img src={cinqueterreImg} alt="Foto turística" className=""/>
                <span className='absolute leading-10 bottom-0 left-0 p-2 hover:bg-neutral-800 text-white'>
                        Cinque Terre
                </span>
            </div>
            <div className='relative hover:border-2 hover:border-red-500 hover:-translate-y-2'>
                <img src={newyorkImg} alt="Foto de Nova Iorque" className=""/>
                <span className='absolute leading-10 bottom-0 left-0 p-2 w-full hover:bg-neutral-800 text-white'>
                    New York
                </span>
            </div>
            <div className='relative hover:border-2 hover:border-red-500 hover:-translate-y-2'>
                <img src={sanfranciscoImg} alt="Foto de São Franscisco" className=""/>
                <span className='absolute leading-10 bottom-0 left-0 p-2 w-full hover:bg-neutral-800 text-white'>
                    São Franscisco
                </span>
            </div>
            <div className='relative hover:border-2 hover:border-red-500 hover:-translate-y-2'>
                <img src={pisaImg} alt="Foto de Pisa" className=""/>
                <span className='absolute leading-10 bottom-0 left-0 p-2 w-full hover:bg-neutral-800 text-white'>
                    Pisa
                </span>
            </div>
            <div className='relative hover:border-2 hover:border-red-500 hover:-translate-y-2'>
                <img src={parisImg} alt="Foto de Paris" className=""/>
                <span className='absolute leading-10 bottom-0 left-0 p-2 w-full hover:bg-neutral-800 text-white'>
                    Paris
                </span>
            </div>
            </div>
        </section>
        </>
    )
}