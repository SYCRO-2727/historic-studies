//Cultural Resource services page
import Header from '../../components/header';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Footer from '../../components/footer';
import {DropCard_l, DropCard_r} from '../../components/dropdowncard';
import styles from "../../styles/services.module.css";

const CulturalResources = () => {
    return (
        <>
            <Head>
                <title>Cultural Resources | Historic Studies Limited</title>
                <meta property="og:title" content="Cultural Resources | Historic Studies Limited"/>
                <meta property="og:type" content="website"/>
                <meta name="description" content="Historic Studies Limited is operated by Charles Philips, a freelance historian who seeks to provide the best research and analysis on historical sites and landmarks, King's grants, and cemetaries. He also develops oral history projects and home and land history studies." />
            </Head>
            <section className={styles.full_env}>
                <div className={styles.d_encompass}>
                    <div className={styles.d_header}>
                        <Header />
                    </div>
                    <div className={styles.d_title}>
                        <h1 className={styles.title}>Cultural Resource Services</h1>
                    </div>
                    <div className={styles.d_dropcard}>
                        <DropCard_r 
                            imageurl={"/images/hsl_logo.jpg"} 
                            imagealt={"an image"}
                            width={400}
                            height={300}
                            title={"this is a title"}
                            text={"this is a test of the dropdown component!"}
                            links={[["https://amazon.com", "amazon"], ["https://amazon.com", "more amazon links?"], ["https://amazon.com", "more amazon links!!!"]]}
                            droptext={"Recent Projects"}
                        />
                    </div>
                    <div className={styles.d_dropcard}>
                        <DropCard_l
                            imageurl={"/images/hsl_logo.jpg"} 
                            imagealt={"an image"}
                            width={313}
                            height={195}
                            title={"this is a title"}
                            text={"this is a test of the dropdown component!"}
                            links={[["https://amazon.com", "amazon"], ["https://amazon.com", "more amazon links?"], ["https://amazon.com", "more amazon links!!!"]]}
                            droptext={"Recent Projects"}
                        />
                    </div>
                    <div className={styles.d_dropcard}>
                        <DropCard_r
                            imageurl={"/images/hsl_logo.jpg"} 
                            imagealt={"an image"}
                            width={500}
                            height={350}
                            title={"this is a title"}
                            text={"this is a test of the dropdown component!"}
                            links={[["https://amazon.com", "amazon"], ["https://amazon.com", "more amazon links?"], ["https://amazon.com", "more amazon links!!!"]]}
                            droptext={"Recent Projects"}
                        />
                    </div>
                    <div className={`${styles.d_footer}`}>
                        <Footer />
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default CulturalResources;