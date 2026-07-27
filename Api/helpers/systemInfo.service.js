const si = require("systeminformation");
 
exports.getOsData = async () => {
    return await si.osInfo();
};

exports.getCpuData = async () => {
    return await si.cpu();
};

exports.getMemData = async () => {
    return await si.mem();
};

exports.getProcessData = async () => {
    return await si.processes();
};

exports.getNetworkData = async () => {
    return await si.networkConnections();
};

exports.getNetworkStats = async () => {
    return await si.networkStats();
};

exports.getWifiNetworks = async () => {
    return await si.wifiNetworks();
};

exports.getWifiConnections = async () => {
    return await si.wifiConnections();
};

exports.getUserData = async () => {
    return await si.users();
};

exports.getBatteryData = async () => {
    return await si.battery();
};

exports.getDiskData = async () => {
    return await si.fsSize();
};

exports.getGraphicsData = async () => {
    return await si.graphics();
};

exports.getSystemData = async () => {
    return await si.system();
};

exports.getBtData = async () => {
    return await si.bluetoothDevices();
};

exports.getAudioData = async () => {
    return await si.audio();
};

exports.getUsbData = async () => {
    return await si.usb();
};

exports.getPrinterData = async () => {
    return await si.printer();
};