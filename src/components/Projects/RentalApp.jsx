import React from "react";

export default function RentalApp() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-12 px-6">
      {/* Title Image */}
      <img 
        src="/images/rentalapp-title.png" 
        alt="Rental App Title" 
        className="w-64 sm:w-96 mb-8"
      />

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center max-w-6xl w-full gap-12">
        {/* Description Blog */}
        <div className="lg:w-1/2 text-lg leading-relaxed text-gray-300">
          <p>
            I worked with a group of friends to create an exotic car rental app on Android using <span className="text-blue-400 font-semibold">Dart</span>, <span className="text-purple-400 font-semibold">Flutter</span>, and <span className="text-yellow-400 font-semibold">Firebase</span> as the database.
            This app allows users to pick and choose any of the exotic cars listed and book them for a specific date and time.
          </p>
          <br />
          <p>
            Users can create an account by providing their first name, last name, a profile photo, and a valid driver's license. Once the details have been verified, they can proceed with booking cars. After making a booking, the chosen car becomes unavailable for that particular day.
          </p>
          <br />
          <p>
            Additionally, renters can leave reviews and ratings for the cars they have booked, providing valuable feedback for future users. All car names, specifications, and images are stored in the <span className="text-green-400 font-semibold">Firebase</span> database, and data is dynamically updated upon booking.
          </p>
        </div>

        {/* Image to the Right */}
        <img 
          src="/images/exotic-car.jpg" 
          alt="Exotic Car Rental" 
          className="lg:w-1/2 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
