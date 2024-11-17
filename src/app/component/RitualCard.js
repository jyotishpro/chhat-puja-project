import Image from "next/image";
const RitualCard = ({ title, description, imageUrl }) => {
    return (
      <div className="border border-yellow-500 rounded-lg p-4 m-4 bg-yellow-900 opacity-90 text-white shadow-lg flex flex-col">
        <Image 
        width={400}
        height={400}
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover rounded-lg mb-4" 
        />
        
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-100">{description}</p>
      </div>
    );
  };
  
  export default RitualCard;
  