import bgImg from '../imagens/london.jpg'

export function FirstSection(){
    return(
        <>
        <section className="relative">
        <img className=' w-full' src={bgImg} alt="Tela de fundo principal com uma foto de Londres" />
        <div className='absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2'>
            <ul className='flex gap-4 justify-evenly w-full'>
                <li><a href="#">Flight</a></li>
                <li><a href="#">Hotel</a></li>
                <li><a href="#">Rental</a></li>
            </ul>
                <h1 className='w-200'>Travel the world with us</h1>
                <div>
                    <div>
                        <p>From</p>
                        <input placeholder="Departing from" type="search"/>
                    </div>
                    <div>
                        <p>To</p>
                        <input placeholder="Arriving at" type="search" required/>
                    </div>
                </div>
                <button type="submit">Search and find dates</button>
        </div>
        </section>
        </>
    )
}