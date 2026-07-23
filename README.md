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

npm start -  for web
nodemon index.js - for node 


### To create .exe use following command

npm i

npm run dist


# Login Page

<img width="1280" height="718" alt="image" src="https://github.com/user-attachments/assets/3020beda-2e16-46e4-8bac-597317f50f6e" />


# Dashboard Page

<img width="1280" height="720" alt="image" src="https://github.com/user-attachments/assets/121e301b-ccd1-432a-8c14-c328402832f4" />


# Processes Page

<img width="1280" height="720" alt="image" src="https://github.com/user-attachments/assets/a45024b0-f390-476a-81d1-a74aaa715cb0" />


# Network Page

<img width="1280" height="720" alt="image" src="https://github.com/user-attachments/assets/3e8dbf2d-15f4-4be0-aa38-59fc63fabf92" />


