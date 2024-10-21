
# BuildMyEvent

**BuildMyEvent** is an open-source, no-code platform built on Base, designed to let you create beautiful event pages and sell tickets with ease. Whether you're organizing a concert, conference, or meetup, BuildMyEvent delivers a seamless ticketing experience with full customization to reflect your brand. Additionally, each ticket is minted as an NFT, providing authenticity, security, and ownership benefits to your attendees. 🎟️

## 🌟 Key Features

- **NFT Ticketing**: Each ticket is minted as an NFT, ensuring authenticity, security, and traceable ownership for your attendees.
- **No-Code**: Build and launch event pages without coding skills.
- **API for Developers**: Developers can use our API to integrate NFT ticketing and blockchain features into existing platforms, leveraging Web3 technologies.
- **White-Label**: Customize your page and host it on your domain.
- **Open Source**: Community-driven with continuous improvements.
- **Built on Base**: Enjoy scalability, security, and blockchain integration from the ground up.

# BuildMyEvent Frontend

**BuildMyEvent** is the frontend for the BuildMyEvent platform, a no-code NFT ticketing solution for event organizers. This project enables organizers to create customizable event pages and manage ticket sales, with each ticket minted as an NFT to ensure security and authenticity. The platform is built on Base, leveraging the security and scalability of the blockchain. 

## Key Technologies
- **Next.js (v14.2.14)**
- **React (v18)**
- **Tailwind CSS**
- **Thirdweb** (Pay Embed to pay with crypto)

## Getting Started

### Prerequisites
To run this project locally, you need:
- **Node.js** (version 16 or higher)
- **npm** (version 6 or higher) or **yarn** for package management.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BuildMyEvent/BuildMyEvent-Frontend.git
   cd BuildMyEvent-Frontend


2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with the required environment variables (e.g., API keys, database connections). Example file:
   ```
    NEXT_PUBLIC_BACKEND_DOMAIN=http://localhost:4000
    NEXT_PUBLIC_TALENT_PROTOCOL_KEY=
    NEXT_PUBLIC_COINBASE_WALLET_API_KEY=
    NEXT_PUBLIC_WC_PROJECT_ID=
    NEXT_PUBLIC_CDP_API_KEY=
    NEXT_PUBLIC_THIRDWEB_CLIENT_ID=
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the project.

### Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run start`**: Runs the production build.


## Contributing

We welcome contributions to the BuildMyEvent platform! If you'd like to contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

Make sure to run `npm run lint` and fix any linting issues before submitting a PR.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it.

