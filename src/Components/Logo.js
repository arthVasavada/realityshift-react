import logo from "../Media/Logo_Main.jpg";    

const changeColor = () =>{
    console.log("clicked");;
}

const Logo = (props) =>{
    const incLogo = <img src={logo} alt="RealityShift Logo" onClick={changeColor}/>;
    return incLogo;
} 

export default Logo;