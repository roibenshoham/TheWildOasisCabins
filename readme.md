# [The Wild Oasis Cabins](https://thewildoasiscabins.netlify.app/login) 

The Wild Oasis is an internal hotel management system.

**Technologies:**
 * React Query
 * React Router
 * Styled Components
 * React Hook Form
 * Supabase
 * Advanced compound component pattern
 * Authentication
 * Recharts
 * Vite

## Features

1. **User Authentication and Signup:**
   - Hotel employees can log in to the application to perform tasks.
   - New users can only be signed up within the application to ensure that only actual hotel employees can create accounts.

2. **User Profile Management:**
   - Users can upload an avatar to personalize their profile.
   - Users can change their name and password.

3. **Cabin Management:**
   - The app provides a table view with all cabins.
   - The table view displays cabin information, including cabin photo, name, capacity, price, and current discount.
   - Users can update, duplicate or delete existing cabins.
   - Users can create new cabins, including the ability to upload a photo.

4. **Booking Management:**
   - The app provides a table view with all bookings.
   - The table view displays booking information, including arrival and departure dates, booking status, paid amount, cabin details, and guest data.
   - Booking status can be "unconfirmed," "checked in," or "checked out."
   - The table view is filterable by booking status.
   - Additional booking data includes the number of guests, number of nights, guest observations, and whether breakfast was booked and its price.
 
5. **Booking Operations:**
   - Users can delete, check-in, or check out a booking as the guest arrives.
   - On check-in, users can accept payment outside the app and then confirm the payment within the app.
   - Guests can add breakfast for the entire stay during check-in if they hadn't already.

6. **Guest Data Management:**
   - Guest data contains full name, email, national ID, nationality, and a country flag for easy identification.

7. **Dashboard:**
   - The initial app screen serves as a dashboard displaying important information for the last 7, 30, or 90 days.
   - It shows a list of guests checking in and out on the current day, and users can perform tasks related to these activities from the dashboard.
   - The dashboard provides statistics on recent bookings, sales, check-ins, and occupancy rates.
   - It includes a chart showing all daily hotel sales, distinguishing between "total" sales and "extras" sales (only breakfast at present).
   - There's also a chart displaying statistics on stay durations, an important metric for the hotel.

8. **Application-wide Settings:**
   - Users can define application-wide settings such as breakfast price, minimum and maximum nights per booking, and maximum guests per booking.
  
## Screenshots
**Login page:**
     
![image](https://github.com/Roiben7/thewildoasis/assets/87220798/456491c0-53c3-42a8-923b-894dadc50748)

**Homepage / Dashboard:**

![image](https://github.com/Roiben7/thewildoasis/assets/87220798/655a3b42-1cd4-4eaa-961b-119da55dfab6)

**Bookings:**

![image](https://github.com/Roiben7/thewildoasis/assets/87220798/f75d7cdf-4b3b-4ac7-849f-f720afd42857)

**Editing cabin in Cabins page:**

![image](https://github.com/Roiben7/thewildoasis/assets/87220798/8b947ddc-1839-4b4f-ac9b-0ffa69f4f2f2)

**Account page:**

![image](https://github.com/Roiben7/thewildoasis/assets/87220798/248df872-f626-47b9-8938-9b3f5bf76892)
