import React from 'react';

const Skills = () => {
    return (
        <div className=' py-10'>
            <h1 className='text-3xl font-bold text-amber-500'>{">_Skills"}</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-5 gap-y-5 py-10 max-w-4xl mx-auto'>
                <button className='bg-amber-400 text-black'>Html5</button>
                <button className='bg-amber-400 text-black'>Css3</button>
                <button className='bg-amber-400 text-black'>Es6</button>
                <button className='bg-amber-400 text-black'>Reactjs</button>
                <button className='bg-amber-400 text-black'>Nextjs</button>
                <button className='bg-amber-400 text-black'>MongoDb</button>
                <button className='bg-amber-400 text-black'>Nodejs</button>
                <button className='bg-amber-400 text-black'>Firebase</button>
                <button className='bg-amber-400 text-black'>Html</button>
            </div>
        </div>
    );
};

export default Skills;