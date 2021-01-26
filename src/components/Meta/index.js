import Head from 'next/head'
import db from '../../../db.json'


const Meta =() =>(
     <Head>
         <title key="title"> {db.title}</title>
        <meta
            key="og:image"
            name="og:image"
            content={db.bg}
        />
     </Head>

)

export default Meta;

