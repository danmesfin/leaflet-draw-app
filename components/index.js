import dynamic from "next/dynamic";

const Mymap = dynamic(() => import('./LeafletMap'), {
    ssr: false
  });
  
export default Mymap;