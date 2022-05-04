import bgImg from '../imagens/london.jpg'

export function FirstSection(){
    return(
        <>
        <section className="relative">
        <img className=' w-full' src={bgImg} alt="Tela de fundo principal com uma foto de Londres" />
        <div className='absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 w-3/4 bg-white'>
            <div className='flex justify-evenly w-full text-white'>
                <a className='bg-red-600 flex-1 py-3 text-center text-lg' href="#">Flight</a>
                <a className='bg-black flex-1 py-3 text-center text-lg' href="#">Hotel</a>
                <a className='bg-black flex-1 py-3 text-center text-lg' href="#">Rental</a>
            </div>
                <h1 className='text-3xl m-4'>Travel the world with us</h1>
                <div className='flex'>
                    <div className='w-full flex-1 m-3 mr-2'>
                        <p>From</p>
                        <input className='w-full flex-1 p-3 leading-7 bg-neutral-100 border-neutral-300 border-2' placeholder="Departing from" type="search"/>
                    </div>
                    <div className='w-full flex-1 m-3 ml-2'>
                        <p>To</p>
                        <input className='w-full flex-1 p-3 leading-7 bg-neutral-100 border-neutral-300 border-2' placeholder="Arriving at" type="search" required/>
                    </div>
                </div>
                <button className='bg-neutral-500 py-2 px-4 mx-3 text-white mb-4' type="submit">Search and find dates</button>
        </div>
        </section>
        </>
    )
}