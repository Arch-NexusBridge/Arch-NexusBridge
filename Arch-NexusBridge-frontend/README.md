🧭 NexusBridge | Enabling Rewards for All
🔭 Overview
NexusBridge is an innovative solution built on the Archway platform that bridges the gap between Web 2.0 and Web 3.0, enabling the rewarding of web2 actions without compromising web3 decentralization principles. It broadens the scope of Archway's reward system and paves the way for the integration of diverse industries, including AI, gaming, and database sectors, into the decentralized Web 3.0 environment.

Picture a scenario where each node runs the same deterministic JavaScript code, triggered by a transaction, with the results uploaded simultaneously to the blockchain and validated by a smart contract. In this context, the web2 logic represented by JavaScript code is executed and validated without undermining the principles of web3 decentralization.

🤖 Demo
Experience the integration of ChatGPT-4 with the blockchain through NexusBridge on Archway. Begin by connecting your Keplr wallet, inputting the necessary demo information, and setting up your NexusBridge point. This setup enables the deployment and utilization of ChatGPT-4 on the blockchain, showcasing the practical application of NexusBridge's innovative bridge between Web 2.0 and Web 3.0 technologies.

Upload Files
Title: Chat GPT-4 Bot
Description: Your friendly neighborhood ChatGPT.
Wallet Address: <YOUR_WALLET_ADDRESS>
GitHub Link: https://github.com/Arch-NexusBridge/Arch-NexusBridge/blob/main/Arch-NexusBridge-backend/examples/chat.js
Action Input
json
Copy code
{
  "prompt": "<YOUR_INPUT_PROMPT>",
  "key": "<YOUR_OPENAI_API_KEY>"
}
⚙️ Getting Started
Prerequisites
Rust programming language
Archway CLI
Building
To build the project, run:

sh
Copy code
$ archway contracts build
Deployment
To deploy the contract, configure your Archway CLI and use the following command:

sh
Copy code
$ archway contracts store Arch-NexusBridge
🧩 Integration with Archway
NexusBridge, operating on the Archway platform, enables rewards for Web2 activities based on transactions. With NexusBridge, ARCH emerges as a universal asset for Web2, Web3, and hybrid applications.

Process Overview:
Execute: Off-chain components like AI, Game, and Database send execution requests to NexusBridge.
Trigger: NexusBridge triggers the execution on the Archway blockchain, ensuring decentralized verification.
Response: After the execution, NexusBridge collects the responses and sends them back to the off-chain components.
More Transactions: Successful executions lead to more transactions on the Archway network.
More Rewards: Increased transactions result in more rewards in the form of ARCH tokens.
More Developers and Apps: The rewards incentivize developers to create more applications, driving further integration and usage.
This cyclical process fosters a vibrant ecosystem where Web2 and Web3 technologies seamlessly interact, enhancing the overall capabilities and user experience.

Diagram:


View or edit this diagram in Whimsical.

🚀 TL;DR
bash
Copy code
$ docker-compose up -d --build

$ node src/global/counter.js

$ node src/node/vrf.js

$ node src/node/app.js

$ node src/relay/receive.js

$ node src/relay/send.js
Counter Service
Start the counter service to track epochs, rounds, and seeds.

bash
Copy code
$ node src/global/counter.js
Check the epoch, round, and seed values:

bash
Copy code
$ curl http://localhost:30328/epoch
{"epoch":10000}

$ curl http://localhost:30328/round
{"round":4}

$ curl http://localhost:30328/seed
{"seed":"1bd4c2ec750458404795bc011361551f35c3ab7c1b924f3a23ceb853269cdcd8"}
APP Service
VRF (Verifiable Random Function)
Set up the VRF service:

bash
Copy code
$ export PK=[YOUR_PRIVATE_KEY_HERE]

$ node src/node/vrf.js
Evaluate and verify data using VRF:

bash
Copy code
$ curl -X POST -H "Content-Type: application/json" -d '{"data":"[DATA]"}' http://localhost:30327/evaluate
{"hash":[12,144,213,205,213,202,202,139,198,46,234,157,134,224,50,238,40,184,250,76,59,118,184,35,169,109,115,141,221,42,143,99],"proof":[73,103,77,19,206,194,140,121,180,136,15,203,222,184,104,134,131,52,177,140,221,81,171,15,73,231,41,240,250,88,179,249,31,21,71,105,211,219,5,198,245,210,169,209,183,49,112,199,184,15,149,5,50,51,177,174,197,50,249,192,74,159,6,148,4,88,151,116,205,4,119,193,115,177,119,194,200,51,229,209,111,178,209,3,153,213,203,64,51,125,123,228,209,36,46,124,35,179,80,28,146,109,24,56,39,101,243,186,38,131,254,80,197,192,18,152,156,106,114,193,38,215,96,132,22,195,123,110,230]}

$ curl -X POST -H "Content-Type: application/json" -d '{"publicKey":"042fbe3319c2ab9334d7b30f4bbc82fff84bc93647080e0b6c3a961ed4e1297bc27e4f54e27a2293d1d09ee840bef0173f5cb05f52e093d16d9e07349bb3a86275", "data":"[DATA]", "hash":"[12,144,213,205,213,202,202,139,198,46,234,157,134,224,50,238,40,184,250,76,59,118,184,35,169,109,115,141,221,42,143,99]", "proof":"[73,103,77,19,206,194,140,121,180,136,15,203,222,184,104,134,131,52,177,140,221,81,171,15,73,231,41,240,250,88,179,249,31,21,71,105,211,219,5,198,245,210,169,209,183,49,112,199,184,15,149,5,50,51,177,174,197,50,249,192,74,159,6,148,4,88,151,116,205,4,119,193,115,177,119,194,200,51,229,209,111,178,209,3,153,213,203,64,51,125,123,228,209,36,46,124,35,179,80,28,146,109,24,56,39,101,243,186,38,131,254,80,197,192,18,152,156,106,114,193,38,215,96,132,22,195,123,110,230]"}' http://localhost:30327/verify
{"result":true}
APP
Set up the APP service:

bash
Copy code
$ export PK=[YOUR_PRIVATE_KEY_HERE]

$ node src/node/app.js
Relay Service
DB
Start the database service:

bash
Copy code
$ docker-compose up -d --build
Receive (From user)
Start the receive relay service:

bash
Copy code
$ node src/relay/receive.js
Submit a request to the relay service:

bash
Copy code
$ curl -X POST -H "Content-Type: application/json" -d '{"uri":"https://raw.githubusercontent.com/D3LAB-DAO/Arch-NexusBridge-backend/main/examples/simple_addition.js", "params": {"a": 5, "b": 3}, "deadline": 2000000000000}' http://localhost:30329/request

{"result":8}
Send (From Provider)
Start the send relay service:

bash
Copy code
$ node src/relay/send.js
Test






