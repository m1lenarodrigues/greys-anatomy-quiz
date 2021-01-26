import Head from 'next/head'
import db from '../../../db.json'


const Meta =() =>(
     <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" /> 
        
        <title key="title"> {db.title}</title>
        <meta key="og:image" name="og:image" content={db.bg} />
     </Head>

)

export default Meta;

