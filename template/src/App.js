import React from 'react';

import { cn } from './utils'

const App = () => {
    return (
        <div id='{{projectName}}'>
            <div className='{{tailwindPrefix}}w-full h-48 {{tailwindPrefix}}border'>
                Something is cooking
            </div>
        </div>
    )
}

export default App;