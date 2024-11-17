import Footer from "../component/Footer";
import Navbar from "../component/Navbar";


const Calendar = () => {
  return (
    <div className=" bg-opacity-5 bg-blue-50">
   
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Chhath Puja Calendar 2024</h1>
        
        {/* Calendar Card Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Nahaye Khaye Card */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-2">नहाय-खाय</h2>
            <p className="text-lg font-medium text-gray-200">मंगलवार, 5 नवंबर 2024</p>
            <p className="mt-3  text-black font-bold">
              पहले दिन भक्त पवित्र स्नान करते हैं और शुद्ध भोजन बनाते हैं।
            </p>
          </div>
          
          {/* Kharna Card */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-2">खरना</h2>
            <p className="text-lg font-medium text-gray-200">बुधवार, 6 नवंबर 2024</p>
            <p className="mt-3  text-black font-bold">
              दूसरे दिन, भक्त उपवास रखते हैं और शाम को अर्घ्य देते हैं।
            </p>
          </div>
          
          {/* Sandhya Arghya Card */}
          <div className="bg-white bg-opacity-10  p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-2">संध्या अर्घ्य</h2>
            <p className="text-lg font-medium text-gray-200">गुरुवार, 7 नवंबर 2024</p>
            <p className="mt-3  text-black font-bold">
              तीसरे दिन, भक्त शाम को सूर्य को अर्घ्य अर्पित करते हैं।
            </p>
          </div>
          
          {/* Usha Arghya Card */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-2">उषा अर्घ्य</h2>
            <p className="text-lg font-medium text-gray-200">शुक्रवार, 8 नवंबर 2024</p>
            <p className="mt-3 text-black font-bold">
              अंतिम दिन, भक्त सुबह सूर्य को अर्घ्य अर्पित करते हैं।
            </p>
          </div>
          
        </div>
      </div>
    
    </div>
  );
};

export default Calendar;
