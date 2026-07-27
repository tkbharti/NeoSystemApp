import React, {useState,useCallback, useEffect} from 'react';

 
import { useTheme } from '../../context/ThemeContext';
import { useLoading } from '../../context/LoadingContext'; 

import socket from "../../services/socket";

const CpuData = () => { 

  const [error, setError]= useState("");   
	const [cpudetails, setCpuData]= useState({});   

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
      socket.on("getCpuDataResponse", (response) => { 
          if (response.success) {  
              delete response.data.cache;  
              setCpuData(response.data);
              console.log('CPU data request completed');   
              setLoading(false);
          } 
      }); 
      socket.emit("getCpuData"); 
      return () => { 
            socket.off("getCpuDataResponse");
      }
  },[]);

  

  return (
     
       <div className="p-0">
          <div className="d-flex justify-content-between align-items-center mb-1"> 
          <h6 className={`txt-${theme.color}`}>CPU Information </h6> 
        </div> 
        <div className="dashboard-container">  
          <div className="dashboard-main"> 	 
            <div className="dashboard-content">  
                  <div className="card">  
                    
                      <div id="cardsRow" className="row g-3 mb-3"></div> 
                        <div className="row g-3">
                          <div className="col-lg-12">
                              
                              <div className="card-body p-3">
                                <div className="history-table p-2">
                                  <table className="table table-hover">
                                    <thead> 
                                    </thead>
                                    <tbody>  
                                      {Object.entries(cpudetails).map(([key, value]) => (
                                        <tr key={key}>
                                          <td style={{width:'50%'}}>{key}</td>
                                          <td> 
                                            {value}  
                                          </td>
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

export default CpuData ;