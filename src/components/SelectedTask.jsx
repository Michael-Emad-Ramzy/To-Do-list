export default function SelectedTask({task}){
    

    //const to formatted date to be more readable
    const formattedStarteDate = new Date(task.startDate).toLocaleDateString('en-US',{
        year:'numeric',
        month:'short',
        day:'numeric'
    });
    const formattedEndDate = new Date(task.startDate).toLocaleDateString('en-US',{
        year:'numeric',
        month:'short',
        day:'numeric'
    });

    return(
        <div className=" w-[35rem] mt-16">
            <header className=" pb-4 mb-4 border-b-2 border-stone-300">
                <div className=" flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{task.title}</h1>
                    <button className=" text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone-400">You Start Your task in: {formattedStarteDate}</p>
                <p className="mb-4 text-stone-400">You have to end it in: {formattedEndDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{task.description}</p>
            </header>
        </div>
    )
}