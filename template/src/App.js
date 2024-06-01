import React from 'react';

const App = () => {
    return (
        <div id='{{projectName}}'>
            <div className='{{tailwindPrefix}}w-full {{tailwindPrefix}}h-48 {{tailwindPrefix}}rounded-md {{tailwindPrefix}}flex {{tailwindPrefix}}justify-center {{tailwindPrefix}}items-center {{tailwindPrefix}}border'>
                Welcome to {{ projectName }} plugin
            </div>
        </div>
    )
}

export default App;