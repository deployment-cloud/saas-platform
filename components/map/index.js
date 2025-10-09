import dynamic from "next/dynamic";

// Load Map component only on client
const Map = dynamic(() => import("./Map"), { ssr: false });

export default Map;
