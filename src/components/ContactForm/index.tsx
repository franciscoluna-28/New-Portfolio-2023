export default function ContactForm() {

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        console.log("The button works as expected")
    }

    return (
        <div className="">
            <form>
                <div className="flex flex-col">
                    <div className="mb-4">
                        <input type="text" className="border-2 bg-transparent p-4 rounded-md dark:border-mainCyan" placeholder="Your Full Name"></input>
                    </div>

                    <div className="mb-4">
                        <input type="email" className="border-2 bg-transparent p-4 rounded-md dark:border-mainCyan" placeholder="Your Email"></input>
                    </div>

                    {/* // We need to explicitly specific the width of the div
// Since it's not taking the 100% of the width of its parent */}

                    <div className="mb-4">
                        <input type="text" className="border-2 bg-transparent p-4 rounded-md dark:border-mainCyan" placeholder="Your Message"></input>
                    </div>

                    <div>
                        <button className="flex justify-center primary-button p-4" onClick={handleSubmit}>Send</button>
                    </div>
                </div>
            </form>
        </div>

    )
}