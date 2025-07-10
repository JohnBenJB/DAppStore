# DAppStore 🌀
**The Decentralized App Store for the Open Internet**

DAppStore is a community-driven, censorship-resistant platform that allows developers to publish, and users to discover, review, and interact with Web3 applications — all from a decentralized and trustless interface. Powered by the Internet Computer Protocol (ICP), DAppStore supports multi-chain listings, verifiable identities, and transparent community ratings.

---

## 🚀 Key Features

- **On-chain App Listings**
  Immutable canister-hosted app metadata with full developer control.

- **Decentralized Identity & Ownership**
  Every app is tied to a verifiable Web3 identity (Principal ID, ENS, etc.).

- **Community Ratings & Reviews**
  Tamper-proof, on-chain feedback and star ratings.

- **Cross-Chain Indexing**
  Support for ICP, Ethereum, Solana, NEAR, and more.

- **AI-Powered Discovery**
  Intelligent app summaries, scam detection, and onboarding tips powered by Caffeine AI.

- **DAO Governance**
  Community-led moderation, featuring, and developer reputation tracking.

---

## 📦 Tech Stack

- 🧠 **Frontend:** React + Tailwind CSS
- 🪙 **Smart Contracts:** Motoko (Internet Computer canisters)
- 🔗 **Cross-chain Indexing:** Chain metadata APIs
- 🤖 **AI Integration:** Caffeine AI modules
- 🔐 **Identity:** Internet Identity / Plug / MetaMask
- ⚖️ **Governance:** DAO (canister + token logic)

---

## 🛠️ Project Structure

/frontend → React app (UI/UX)
/backend → Motoko canister logic
/scripts → Deployment and data indexing scripts
/docs → Architecture diagrams, governance rules, etc.

---

## 🧑‍💻 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/your-org/dappstore.git
cd dappstore

# 2. Install frontend dependencies
cd frontend
npm install

# 3. Run local dev server
npm run dev

# 4. Deploy canisters (in another terminal)
cd ../backend
dfx start --background
dfx deploy
🤝 Contributing
We welcome contributions from the community!

Fork the repo and submit a PR

Read our CONTRIBUTING.md for coding standards

Join the discussion in the Issues tab

🙏 Credits
This project is built by Tesseract Studios for the WCHL 25 Hackathon.
Built with ❤️ by the DAppStore Team and contributors.

