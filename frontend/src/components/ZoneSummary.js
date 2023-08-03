import React, {Component} from 'react';
import "../../styles/ZoneSummary.css"
class ZoneSummary extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="box">
                        <div className="header">
                            <div className="left">Zone 1</div>
                            <div className="middle">85-136</div>
                            <div className="right">23:00</div>
                        </div>
                        <div className="body">
                            <div className="w-full h-2 bg-[#494949] rounded-full">
                                <div className="w-2/3 h-full text-center text-xs text-white bg-pink-300 rounded-full"></div>
                            </div>
                        </div>
                        <div className="footer">
                            <div className="left" style={{color:'#f0abfc',fontWeight:"bold"}}>Warm Up</div>
                            <div className="right">100% - 80% </div>
                        </div>
                    </div>
                    <hr className="separator"/>
                    <div className="box">
                        <div className="header">
                            <div className="left">Zone 2</div>
                            <div className="middle">136-144</div>
                            <div className="right">07:00</div>
                        </div>
                        <div className="body">
                            <div className="w-full h-2 bg-[#494949] rounded-full">
                                <div className="w-1/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                            </div>
                        </div>
                        <div className="footer">
                            <div className="left" style={{color:'#006EE6',fontWeight:"bold"}}>Burn Fat</div>
                            <div className="right">159.9% - 85.0%</div>
                        </div>
                    </div>
                    <hr className="separator"/>
                    <div className="box">
                        <div className="header">
                            <div className="left">Zone 3</div>
                            <div className="middle">144-153</div>
                            <div className="right">04:00</div>
                        </div>
                        <div className="w-full h-2 bg-[#494949] rounded-full">
                            <div className="w-1/6 h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
                        </div>
                        <div className="footer">
                            <div className="left" style={{color:'#4CD964',fontWeight:"bold"}}>Improve Fitness</div>
                            <div className="right">169.9% - 90.0%</div>
                        </div>
                    </div>
                    <hr className="separator"/>
                    <div className="box">
                        <div className="header">
                            <div className="left">Zone 4</div>
                            <div className="middle">153-161</div>
                            <div className="right">06:00</div>
                        </div>
                        <div className="body">
                            <div className="w-full h-2 bg-[#494949] rounded-full">
                                <div className="w-3/12 h-full text-center text-xs text-white bg-yellow-500 rounded-full"></div>
                            </div>
                        </div>
                        <div className="footer">
                            <div className="left" style={{color:'#FFCC00',fontWeight:"bold"}}>Increase Performance</div>
                            <div className="right">179.9% - 95.0%</div>
                        </div>
                    </div>
                    <hr className="separator"/>
                    <div className="box">
                        <div className="header">
                            <div className="left">Zone 5</div>
                            <div className="middle">161-170</div>
                            <div className="right">03:00</div>
                        </div>
                        <div className="body"><div className="w-full h-2 bg-[#494949] rounded-full">
                            <div className="w-1/12 h-full text-center text-xs text-white bg-red-600 rounded-full"></div>
                        </div></div>
                        <div className="footer">
                            <div className="left" style={{color:'#FF3B30',fontWeight:"bold"}}>Maximize Performance</div>
                            <div className="right">189.9% - 100.0%</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ZoneSummary;