export function FourthSection(){
    return (
        <>
        <section className="py-10 px-0 xl:px-40 sm:px-20">
        <div className="bg-neutral-500 p-3 text-white leading-10">
            <h1 className="text-3xl my-2">Get the best offers firt!</h1>
            <p className="text-lg my-2">Join our newsletter.</p>
            <p className="leading-5">E-mail</p>
            <input className="leading-8 px-3 w-full" placeholder="Your e-mail adress" type="email" required/>
            <button className="block my-2 py-0 px-3 bg-red-400" name="submit" type="submit">Subscribe</button>
        </div>
        <div>
            <h1 className="text-3xl mt-6 pb-5">Contact</h1>
            <p>Let us book next trip!</p>
            <p>
            Chicago, US <br/>
            Phone: +00 151515 <br/>
            Email: mail@mail.com
            </p>
            <input className="w-full p-3 leading-7 my-1 bg-neutral-100 border-neutral-300 border-2" placeholder="Name" type="text" name="" id="name"/>
            <input className="w-full p-3 leading-7 my-1 bg-neutral-100 border-neutral-300 border-2" placeholder="Email" type="email" name="" id="email"/> 
            <input className="w-full p-3 leading-7 my-1 bg-neutral-100 border-neutral-300 border-2" placeholder="message" type="text" name="" id="msg"/>
            <button name="submit" type="submit">SEND MESSAGE</button>
        </div>
        </section>
        </>
    )
}