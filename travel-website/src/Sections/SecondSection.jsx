import cinqueterreImg from '../imagens/cinqueterre.jpg'
import newyorkImg from '../imagens/newyork.jpg'
import sanfranciscoImg from '../imagens/sanfran.jpg'
import pisaImg from '../imagens/pisa.jpg'
import parisImg from '../imagens/paris.jpg'

export function SecondSection(){
    return(
        <>
        <section className='my-10 mx-0 xl:mx-40 sm:mx-20'>
        <h1 className='text-3x1'>Good Offers Right Now</h1>
        <h2>Up to <strong>50%</strong> discount.</h2>
        <div className='grid grid-cols-4 grid-rows-2 gap-3'>
            <div className='relative col-span-2 row-span-2'>
                <img src={cinqueterreImg} alt="Foto turística" className="w-full h-full"/>
                <span className='absolute bottom-5 right-5  text-white '>
                        Cinque Terre
                </span>
            </div>
            <div className='relative '>
                <img src={newyorkImg} alt="Foto de Nova Iorque" className="w-full h-full"/>
                <span className='absolute bottom-4 right-4 text-white'>
                    New York
                </span>
            </div>
            <div className='relative'>
                <img src={sanfranciscoImg} alt="Foto de São Franscisco" className="w-full h-full"/>
                <span className='absolute bottom-4 right-4 text-white'>
                    São Franscisco
                </span>
            </div>
            <div className='relative'>
                <img src={pisaImg} alt="Foto de Pisa" className="w-full h-full"/>
                <span className='absolute bottom-4 right-4 text-white'>
                    Pisa
                </span>
            </div>
            <div className='relative'>
                <img src={parisImg} alt="Foto de Paris" className="w-full h-full"/>
                <span className='absolute bottom-4 right-4 text-white'>
                    Paris
                </span>
            </div>
            </div>
        </section>
        </>
    )
}