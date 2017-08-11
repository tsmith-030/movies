export default function getServerUrl() {
    // if (process.env.NODE_ENV === "local") {
    return "http://localhost:8080";
    // }
    // else if (process.env.NODE_ENV === "prod") {
    //     return `https://virtual-assist.cws.allstate.com`;
    // }
    // else if (process.env.NODE_ENV === "prod2") {
    //     return `https://enc-virtual-assist.cws.allstate.com`;
    // }
    // else {
    //     return `https://virtualcollaboration-${process.env.NODE_ENV}.auth-platform-sandbox.allstate.com`;
    // }
}