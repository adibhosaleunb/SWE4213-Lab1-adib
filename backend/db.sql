-- 1. Create the Users Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL
);

-- 2. Create the Products Table
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url TEXT,
    owner_email VARCHAR(255) REFERENCES users(email) ON DELETE CASCADE
);




--DATA FOR products TABLE
INSERT INTO unb_marketplace.products (title, price, image_url, owner_email) VALUES
('Wireless Charger Pad', 22.99, 'https://example.com/images/charger.jpg', 'adibhosale@unb.ca'),
('Gaming Mouse Pad XL', 18.49, 'https://example.com/images/mousepad.jpg', 'john.doe@unb.ca'),
('Laptop Backpack', 64.99, 'https://example.com/images/backpack.jpg', 'adibhosale@unb.ca'),
('USB Flash Drive 128GB', 21.99, 'https://example.com/images/flashdrive.jpg', 'sarah.lee@unb.ca'),
('External Hard Drive 2TB', 109.99, 'https://example.com/images/harddrive.jpg', 'michael.chan@unb.ca'),
('Desk LED Lamp', 27.50, 'https://example.com/images/desklamp.jpg', 'adibhosale@unb.ca'),
('Bluetooth Earbuds', 79.99, 'https://example.com/images/earbuds.jpg', 'emma.wilson@unb.ca'),
('HDMI Cable 2m', 12.99, 'https://example.com/images/hdmi.jpg', 'rohit.patel@unb.ca'),
('Ergonomic Office Chair Cushion', 39.99, 'https://example.com/images/cushion.jpg', 'adibhosale@unb.ca'),
('Smart Power Strip', 34.99, 'https://example.com/images/powerstrip.jpg', 'linda.brown@unb.ca');



