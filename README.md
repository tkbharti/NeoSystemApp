<img width="1039" height="200" alt="image" src="https://github.com/user-attachments/assets/72e53a00-9f6f-4a3d-a6d4-65b0896e081a" />

# 🖥️ SysPulse: Real-Time Windows Diagnostics Tool

A lightweight, cross-platform desktop application built to monitor, analyze, and display critical Windows hardware and peripheral metrics in real time.

# 🚀 Key Project Capabilities
## Core Hardware Analytics: 
Streams live telemetry for CPU load, RAM utilization, OS build details, and storage health.
## Network Intelligence: 
Captures real-time upload/download speeds, active interfaces, IP configurations, and MAC addresses.
## Peripheral Tracking: 
Queries Windows system APIs to monitor battery levels for the host laptop and connected Bluetooth devices (e.g., speakers, headphones).
## Process Management: 
Parses running applications, background tasks, and active PIDs alongside their resource consumption profiles.

# 🛠️ Technical Architecture
## Frontend (React.js): 
Powers a responsive, modular dashboard featuring interactive charts for data visualization.

## Desktop Runtime (Electron): 
Bridges the web interface with native operating system capabilities via secure IPC channels.

## System Engine (Node.js): 
Leverages asynchronous system calls, low-level OS utilities, and automated PowerShell scripts to fetch deep hardware diagnostics.

## Distribution (Electron Builder): 
Compiles and packages production-ready, standalone .exe installers optimized for Windows environments.

 

### To start the app use following command -> Go to App directory

npm i

npm run start


### To create .exe use following command

npm i

npm run dist


### Splash Screen

<img width="298" height="296" alt="image" src="https://github.com/user-attachments/assets/3186ba6a-cc61-44e8-9b39-132ff1dd4d9d" />

### Home Page

<img width="947" height="494" alt="image" src="https://github.com/user-attachments/assets/cfd1869f-1a91-4dd7-8cee-6436b8c23806" />

### Dashboard

<img width="958" height="502" alt="image" src="https://github.com/user-attachments/assets/d4454225-f034-4b1d-9e83-49b0d2e58f26" />
