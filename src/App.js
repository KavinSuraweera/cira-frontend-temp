import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/home/Home'
import NewFile from "./pages/home/NewFile";
import Visualisation from "./pages/visualisation/Visualisation";
import TestPage from "./pages/test/Test";
import {createMuiTheme, ThemeProvider} from "@mui/material";

const yourCustomTheme = {
    MuiCardContent :{
        root:{
            "&:last-child": {
                padding: '2px'
            },
        }
    }
}

const App = () => {
    return (
        <ThemeProvider theme={createMuiTheme({ ...yourCustomTheme })}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/new" element={<NewFile/>}/>
                    <Route path="/visualisation" element={<Visualisation/>}/>
                    <Route path="/test" element={<TestPage/>}/>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
