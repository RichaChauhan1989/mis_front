import React from 'react';

function Home() {
    // Check if the user is already logged in (you can adjust this logic as needed)
    const username = localStorage.getItem('username');
    const isLoggedIn = !!username; // Convert to boolean

    if (isLoggedIn) {
        // Redirect to the Main page if the user is logged in
        window.location.href = '/main';
        return null; // No need to render anything on this page
    }

    const homeContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    textAlign: 'center'
  };

    return (
        <div style={homeContainerStyle}>
            <p>
            <h1>Welcome to MIS Application!</h1>
            </p>

        </div>
    );
}
// }function Home(props) {
//     return (
//         <div>
//             <h1>Welcome to Maungawhau Institute of Studies (MIS)</h1>
//         </div>
//     );
// }

export default Home;