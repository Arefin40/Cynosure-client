# Cynosure

## Project Overview

Welcome to [Cynosure](https://sa-cynosure.web.app), a modern, user-centric platform designed to provide a seamless booking experience across all devices. This project involves developing both the frontend and backend systems to ensure robust functionality and an unparalleled user experience. Our goal is to enhance the process of booking hotel accommodations with cutting-edge technology.

Preview link: [Cynosure](https://sa-cynosure.web.app)

## Features

1. **Room Listings and Details**: View a list of available rooms with images, descriptions, prices, sizes, availability, and special offers. Click on room images for detailed information.

2. **Booking Functionality**: Book rooms directly from the room details page, ensuring availability and providing a booking summary for confirmation.

3. **Filtering and Reviews**: Filter rooms by price range on the server side and view total review counts. Users can post reviews for rooms they've booked.

4. **User Bookings Management**: Display and manage bookings, including options to cancel bookings with confirmation, post reviews, and update booking dates.

5. **Review System**: Post and view reviews with ratings, comments, and timestamps. Reviews are available only for rooms users have booked.

6. **Booking Cancellation**: Cancel bookings up to 1 day before the booked date, making the room available again.

7. **JWT Authentication**: Secure the platform with JWT tokens for login, protecting private routes and ensuring user authentication.

## Technologies Used

-  **Frontend**: React.js
-  **Backend**: Node.js, Express.js
-  **Database**: MongoDB
-  **Authentication**: Firebase authentication, JWT tokens
-  **Libraries**:
   [Tanstack Query](https://tanstack.com/query/latest),
   [AOS](https://github.com/michalsnik/aos),
   [Swiper](https://github.com/nolimits4web/swiper),
   [React Hook form](https://github.com/react-hook-form/react-hook-form)

## Live Links
- [Live Website](https://sa-cynosure.web.app)
- [Server-side GitHub Repository](https://github.com/Arefin40/Cynosure-server)

## To run in your local machine

For client side, run the following commands:
```
git clone https://github.com/Arefin40/Cynosure-client.git

cd Cynosure-client && pnpm install

pnpm run dev
```

For server side, run the following commands:
```
git clone https://github.com/Arefin40/Cynosure-server.git

cd Cynosure-server && pnpm install

pnpm run dev
```