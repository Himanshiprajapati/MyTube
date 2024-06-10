import React from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import HomeScreen from "./screens/homeScreen/homeScreen";

const App = () => {
    return (
        <>
            <Header />
            <div className="app_container border border-info">
                <Sidebar />
                <div className="app_main border border-warning">
                    <HomeScreen />
                </div>
            </div>
        </>
    );
}

export default App;

