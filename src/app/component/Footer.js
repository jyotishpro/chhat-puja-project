import Link from "next/link";

const Footer = () => {
    return (
      <footer className="bg-yellow-500 p-4 mt-4 flex justify-around">
        <div className="container mx-auto text-center text-white">
          <p>&copy; {new Date().getFullYear()} Chhath Puja Hub. All rights reserved. created by: jyotish kumar</p>
        </div>
        <div>
            <p><Link href={`https://www.linkedin.com/in/jyotish-kumar-b0505b212/`}>Linkedin</Link></p>
        </div>
        <div>
            <p className="ml-5"><Link href={`https://github.com/jyotishpro`}>Github</Link></p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  