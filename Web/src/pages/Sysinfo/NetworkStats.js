import React, {useState,useCallback, useEffect} from 'react';

import { useTheme } from '../../context/ThemeContext';
import { useLoading } from '../../context/LoadingContext'; 
import socket from "../../services/socket";

const NetworkStats = () => { 

  const [error, setError]= useState("");   
  const [memdetails, setMemData]= useState({});   

  const { theme } = useTheme();
  const { setLoading }  = useLoading();

  const handleError = async (error) =>{
		if (error.response) { 
			setError(error.response.data.message); 
		} else if (error.request) { 
			setError('Network Error:', error.request);
		} else { 
			setError('Unknown Error:', error.message);
		}
	}

  useEffect( () => {  
      setLoading(true); 
      socket.on("getNetworkStatsResponse", (response) => {  
          if (response.success) {   
              setMemData(response.data[0]);
               console.log('Network stats request completed');   
              setLoading(false);
          } 
      }); 
      
      const interval = setInterval(() => {
          socket.emit("getNetworkStats");
      }, 2500);  
       
      return () => {
          clearInterval(interval);
          socket.off("getNetworkStatsResponse");
      };

  },[]);
 
 
  return (
     
       <div className="p-0">
          <div className="d-flex justify-content-between align-items-center mb-1"> 
          <h6 className={`txt-${theme.color}`}>Network Stats </h6> 
        </div> 
        <div className="dashboard-container">  
          <div className="dashboard-main"> 	 
            <div className="dashboard-content">  
                  <div className="card">  
                    
                      <div id="cardsRow" className="row g-3 mb-3"></div> 
                        <div className="row g-3">
                          <div className="col-lg-12">
                              
                              <div className="card-body1 p-3">
                                <div className="history-table p-2">
                                  <table className="table table-hover">
                                    <thead> 
                                    </thead>
                                    <tbody>  
                                       {Object.entries(memdetails).map(([key, value]) => (
                                        <tr key={key}>
                                          <td style={{width:'50%'}}>{key}</td>
                                          <td>{value}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div> 
                          </div> 
                        </div>  
                  </div>
           
                </div>  
          </div>
        </div> 
    </div>
  );
}

export default NetworkStats ;