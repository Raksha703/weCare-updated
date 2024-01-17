/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb+srv://weCare:weCare@cluster0.aaqovt1.mongodb.net/Cluster0?retryWrites=true&w=majority",
    DB_URI: "mongodb+srv://weCare:weCare@cluster0.aaqovt1.mongodb.net/Cluster0?retryWrites=true&w=majority",

    NEXTAUTH_URI : "http://localhost:3000",
    NEXTAUTH_SECRET:"qwertyuiop",

    STRIPR_WEBHOOK_SECRET: "whsec_dWBTLCFfTNtkq0uXYnw5KJtlm5GL1D1M",

    STRIPE_SECRET_KEY : "sk_test_51OZCuASHas2oKgk6pp9WJprrrtgZ1WQpOHZqZfPfDYnihjza3r4CP8ADmzS0qatLk3sr8mbY5FkSXc3bgio45LNX00C6dpp0kM",

    NEXT_PUBLIC_MAPS_API_KEY: "AIzaSyASt3LolX7nAUVDinJCWUoQ3grkUxzurVo",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};


module.exports = nextConfig;
