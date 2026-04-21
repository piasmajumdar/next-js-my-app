// import React from 'react';
import butterfly from "../../assets/images/butterfly.avif"

import Image from "next/image";

const AboutPage = () => {
    return (
        <div>
            <h2>This is About Page</h2>
            <Image src="https://i.ibb.co/WNDdTBvV/butterfly.avif" alt="Butterfly" width="500" height="300"></Image>
            <Image src='/nature.jpg' alt="Nature" width="500" height="300"></Image>
            <Image src={butterfly} alt="Butterfly" width="500" height="300"></Image>
            <Image src="https://images.unsplash.com/photo-1773332611613-dbdc64f09807?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Butterfly" width="500" height="300"></Image>
        </div>
    );
};

export default AboutPage;