const systemService = require("./helpers/systemInfo.service");

module.exports = function (io) {

    io.on("connection", (socket) => {

        console.log("Socket Connected :", socket.id);           
        
        socket.on("getUserData", async () => { 
            try { 
                const data = await systemService.getUserData(); 
                socket.emit("getUserDataResponse", {
                    success: true,
                    data: data
                });
            } catch (err) { 
                socket.emit("getUserDataResponse", {
                     success: false,
                     message: err.message
                }); 
            } 
        }); 

         socket.on("getOsData", async () => { 
            try { 
                const data = await systemService.getOsData(); 
                 socket.emit("getOsDataResponse", {
                    success: true,
                    data: data
                });

            } catch (err) { 
                 socket.emit("getOsDataResponse", {
                    success: false,
                    message: err.message
                }); 
            } 
        }); 

        socket.on("getCpuData", async () => { 
            try { 
                const data = await systemService.getCpuData(); 
                socket.emit('getCpuDataResponse',{
                    success: true,
                    data: data
                });

            } catch (err) { 
                socket.emit('getCpuDataResponse',{
                    success: false,
                    message: err.message
                }); 
            } 
        });
       
        socket.on("getGraphicsData", async () => { 
            try { 
            const data = await systemService.getGraphicsData(); 
               socket.emit('getGraphicsDataResponse',{
                    success: true,
                    data: data
                });

            } catch (err) { 
                socket.emit('getGraphicsDataResponse',{
                    success: false,
                    message: err.message
                }); 
            } 
        });        
       
        socket.on("getSystemData", async () => { 
            try { 
                const data = await systemService.getSystemData(); 
                 socket.emit('getSystemDataResponse',{
                    success: true,
                    data: data
                });

            } catch (err) { 
                 socket.emit('getSystemDataResponse',{
                    success: false,
                    message: err.message
                }); 
            } 
        });         
                        
        socket.on("getDiskData", async () => { 
            try { 
                const data = await systemService.getDiskData(); 
                socket.emit('getDiskDataResponse',{
                    success: true,
                    data: data
                });

            } catch (err) { 
                socket.emit({
                    success: false,
                    message: err.message
                }); 
            } 
        });

        socket.on("getDiskData", async () => { 
            try { 
                const data = await systemService.getDiskData(); 
                socket.emit('getDiskDataResponse',{
                    success: true,
                    data: data
                });

            } catch (err) { 
                socket.emit({
                    success: false,
                    message: err.message
                }); 
            } 
        });

        socket.on("getBtData", async () => { 
            try { 
                const data = await systemService.getBtData(); 
                socket.emit('getBtDataResponse',{
                    success: true,
                    data: data
                });

            } catch (err) { 
                socket.emit('getBtDataResponse',{
                    success: false,
                    message: err.message
                }); 
            } 
        });

        socket.on("getAudioData", async () => { 
            try { 
                const data = await systemService.getAudioData(); 
                socket.emit('getAudioDataResponse',{
                    success: true,
                    data: data
                });

            } catch (err) { 
                socket.emit('getAudioDataResponse',{
                    success: false,
                    message: err.message
                }); 
            } 
        });
        
        socket.on("getUsbData", async () => { 
            try { 
                const data = await systemService.getUsbData();             
                socket.emit("getUsbDataResponse", {
                    success: true,
                    data: data
                });

            } catch (err) { 
                 socket.emit("getUsbDataResponse", {
                    success: false,
                    message: err.message  
                }); 
            }   
        });  

        socket.on("getBatteryData", async () => { 
            try { 
                const data = await systemService.getBatteryData(); 
                socket.emit('getBatteryDataResponse',{
                    success: true,
                    data: data
                });

            } catch (err) { 
                socket.emit('getBatteryDataResponse',{
                    success: false,
                    message: err.message
                }); 
            } 
        }); 
         
        socket.on("getWifiNetworks", async () => { 
            try { 
                const data = await systemService.getWifiNetworks(); 
                socket.emit('getWifiNetworksResponse',{
                    success: true,
                    data: data
                });

            } catch (err) { 
                socket.emit('getWifiNetworksResponse',{
                    success: false,
                    message: err.message
                }); 
            } 
        });

        socket.on("getNetworkStats", async () => { 
            try { 
                const data = await systemService.getNetworkStats(); 
                socket.emit('getNetworkStatsResponse',{
                    success: true,
                    data: data
                });

            } catch (err) { 
                socket.emit('getNetworkStatsResponse',{
                    success: false,
                    message: err.message
                }); 
            } 
        });

        socket.on("getProcessData", async () => { 
            try { 
                const data = await systemService.getProcessData(); 
                socket.emit('getProcessDataResponse',{
                    success: true,
                    data: data
                });

            } catch (err) { 
                socket.emit('getProcessDataResponse',{
                    success: false,
                    message: err.message
                }); 
            } 
        });
    
         socket.on("getNetworkData", async () => { 
            try { 
                const data = await systemService.getNetworkData(); 
                socket.emit('getNetworkDataResponse',{
                    success: true,
                    data: data
                });

            } catch (err) { 
                socket.emit('getNetworkDataResponse',{
                    success: false,
                    message: err.message
                }); 
            } 
        });         
        
        socket.on("disconnect", () => { 
            console.log("Disconnected :", socket.id); 
        });

    });

};