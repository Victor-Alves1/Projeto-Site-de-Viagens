import oceanImg from '../imagens/ocean.jpg'
import mountainsImg from '../imagens/mountains.jpg'

export function ThirdSection(){
    return(
        <>
        <section>
        <div className='mx-0 xl:mx-40 sm:mx-20'>
            <h1 className='text-3xl '>Explore Nature</h1>
            <h3>Travel with us and see natura at its finest</h3>
        </div>
        <div className='flex gap-3 my-2 mx-0 xl:mx-40 sm:mx-2'>
            <div className=''>
                <img src={oceanImg} alt="imagem da costa oeste da Noruega" className="w-100% h-100%"/>
                <div className='p-3'>
                    <h1 className='text-3xl'>
                        West Coast, NORWAY
                    </h1>
                    <p >
                        Roundtrip from $79
                    </p>
                    <p >
                        Praesent tincidunt sed tellus ut retrum sed vitae justo
                    </p>
                    <a href='#' className='py-1 px-3 my-3 hover:bg-red-400 hover:text-white'>
                        Buy Tickets
                    </a>
                </div>
            </div>
            <div >
                <img src={mountainsImg} alt="Monstranhas austriacas" className="w-100% h-100%"/>
                <div >
                    <h1 className="text-3xl">
                        Mountains, Austria
                    </h1>
                    <p >
                        One-way from $39
                    </p>
                    <p >
                        Praesent tincidunt sed tellus ut retrum sed vitae justo
                    </p>
                    <a href='#' className='py-1 px-3 my-3 hover:bg-red-400 hover:text-white'>
                        Buy Tickets
                    </a>
                </div>
        </div>
        </div>
        </section>
        </>
    )
}