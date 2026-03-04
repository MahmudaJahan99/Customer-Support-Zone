const Hero = ({ selectedTicket }) => {
    return (
        <div className='max-w-350 mx-auto flex flex-col md:flex-row gap-5 text-white text-center'>
            {/******************** IN PROGRESS ********************/}
            <div id='progress' className='w-full md:w-1/2 rounded-sm min-h-60 relative flex flex-col justify-center gap-3'>
                <div className='lines'></div>
                <div className='lines-mirrored'></div>

                <div>
                    <h1>In-Progress</h1>
                    <h2 className='text-3xl font-bold'>{selectedTicket.length}</h2>
                </div>
            </div>

            {/******************** RESOLVED ********************/}
            <div id='resolved' className='w-full md:w-1/2 rounded-sm min-h-60 relative flex flex-col justify-center gap-3'>
                <div className='lines'></div>
                <div className='lines-mirrored'></div>

                <div>
                    <h1>Resolved</h1>
                    <h2 className='text-3xl font-bold'>0</h2>
                </div>
            </div>
        </div>
    );
};

export default Hero;