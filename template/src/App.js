import React from 'react';

const App = () => {
    return (
        <div id='{{projectName}}'>
            <div className='{{tailwindPrefix}}w-full h-48 {{tailwindPrefix}}border'>
                Welcome to {{ projectName }} plugin
            </div>
        </div>
    )
}

export default App;