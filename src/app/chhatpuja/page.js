"use client";

import Navbar from "@/app/component/Navbar";
import Footer from "../component/Footer";
import RitualCard from "../component/RitualCard";
import WishForm from "../component/WishForm";
import Calendar from '../calendar/page.js';
import { Poppins } from 'next/font/google';
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; 

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');


  useEffect(() => {
    if (!router.isReady) return; 

    console.log('Router Object:', router);
    console.log('Router Query:', router.query);

    
    if (router.query.user) {
      setName(router.query.user);
    }
  }, [router.isReady, router.query]);

  const rituals = [
    { title: 'नहाए खाए', description: 'नहाए खाए छठ पूजा का पहला दिन होता है। इस दिन, भक्त नदी या तालाब में पवित्र स्नान करते हैं और सूर्य देव को अपने प्रार्थनाएं अर्पित करते हैं। यह एक शुद्धिकरण का समय है, और वे खाने के लिए पारंपरिक व्यंजन तैयार करते हैं। इस अनुष्ठान को शरीर और आत्मा को शुद्ध करने के लिए माना जाता है, ताकि भक्त आगामी पूजा के दिनों के लिए आध्यात्मिक रूप से तैयार हो सकें।', imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.livehindustan.com%2Flh-img%2Fuploadimage%2Flibrary%2F2023%2F11%2F15%2F16_9%2F16_9_6%2Fchhath_puja_nahay_khay_prasad_kaddu_ki_sabji_recipe_1700026880.jpg&f=1&nofb=1&ipt=afe5ac41170bfc6d92503a0ae62920bbee74e0f3f59d9fb3bc9182e47c940179&ipo=images" },
    { title: 'खारना', description: 'खारना छठ पूजा का दूसरा दिन होता है। इस दिन, भक्त दिनभर उपवासी रहते हैं और सूर्य को प्रसन्न करने के लिए शाम को मिठाई, फल और अन्य विशेष व्यंजन बनाते हैं। यह अनुष्ठान विशेष रूप से संतान सुख की प्राप्ति के लिए किया जाता है। भक्त सूर्योदय से पूर्व उपवास करते हैं और शाम को सूर्य को अर्घ्य देकर अपना उपवास समाप्त करते हैं।', imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FY0W1K2hO3wk%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=98d2174b667d4e8e8a4a69d1c3b79ca6d3f248918627ab6eef71a438c36061f1&ipo=images' },
    { title: 'संध्या अर्घ्य', description: 'संध्या अर्घ्य छठ पूजा का तीसरा दिन है। इस दिन, भक्त सूर्य को सूर्यास्त के समय अर्घ्य अर्पित करते हैं। भक्त अपने परिवार और समाज के कल्याण के लिए विशेष प्रार्थनाएं करते हैं। इस अवसर पर, भक्त खास तौर पर ताजे फल, खीर और अन्य पकवानों का भोग लगाते हैं। यह समय सूर्य देवता की कृपा पाने का होता है, ताकि जीवन में खुशहाली और समृद्धि बनी रहे।', imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fenglish.cdn.zeenews.com%2Fsites%2Fdefault%2Ffiles%2F2023%2F11%2F18%2F1320425-chhath-puja.png&f=1&nofb=1&ipt=d5eaa83f391848530ab918a44eb6b235102684b0648879baa8999fdab5dc2b82&ipo=images" },
    { title: 'उषा अर्घ्य', description: 'उषा अर्घ्य छठ पूजा का चौथा और अंतिम दिन होता है। इस दिन, भक्त सुबह के समय सूर्य उगने से पहले उन्हें अर्घ्य अर्पित करते हैं। भक्त इस समय विशेष रूप से धन्यवाद अर्पित करते हैं और संतान सुख की कामना करते हैं। इस अवसर पर, भक्त अपने प्रियजनों के साथ मिलकर इस पवित्र अनुष्ठान का पालन करते हैं। उषा अर्घ्य का महत्व इस बात में है कि यह नई शुरुआत और जीवन के नए दिन की प्रतीक है।', imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.financialexpress.com%2Fwp-content%2Fuploads%2F2022%2F10%2FChhath-Puja.jpg&f=1&nofb=1&ipt=8af2dd257f99abc54160bb881a5061a1a22f91d0ede3df875b8972b360bf561d&ipo=images' },
  ];

  return (
    <div className={poppins.className}>
      <Navbar />
      <div className="p-7" style={{
        backgroundImage: "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fca%2Feb%2Fee%2Fcaebee70dc49a333f9530716984323f2.jpg&f=1&nofb=1&ipt=9a8a5cdcd3bc8bf1e5eaa2f0518e0b5d0aaf46d029a78badebcdc4df8a228ff3&ipo=images')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: '90'
      }}>
        <div className="container mx-auto p-6">
          <h1 className="text-3xl text-white font-bold mb-4">Welcome to Chhath Puja Hub</h1>
          <p className='text-white mb-5'>Created by Jyotish Kumar <Link href={`https://github.com/jyotishpro`}>(github)</Link></p>
          <h1 className="text-3xl text-orange-100 font-bold mb-4">{`${name} की तरफ से आप सभी को छठ पूजा की हार्दिक शुभकामनाएं`}</h1>
        </div>

        <WishForm name={name} setName={setName} />
        <Calendar />
        <h2 className="text-2xl text-white font-semibold mt-6 mb-4">Rituals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {rituals.map((ritual, index) => (
            <div key={index} className="grid grid-col-2">
              <RitualCard title={ritual.title} description={ritual.description} imageUrl={ritual.imageUrl} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
