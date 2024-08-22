import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function ColorSchemesExample(props) {
    return (
    <>
    
        <div className="navbar-expand-sm" style={{color:props.mode==='light'?'grey':'white'}} >

        <Navbar className='navbar navbar-expand-sm' bg={props.mode === 'light' ? 'light' : 'dark'} data-bs-theme={props.mode === 'light' ? 'light' : 'dark'}  >
        <Container className='navbar-expand-sm'>
        <Nav className="navbar-expand-sm" style={{color:props.mode==='light'?'grey':'black'}}>
        <Link className="navbar-brand"  type="button" to="/">TextUtils</Link>
        {/* <a className="navbar-brand"  type="button" href="/">TextUtils</a> */}

        </Nav>
                <Nav className="me-auto">
            <li className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link></li>            
            {/* <a className="navbar-brand" href="/">Home</a></li>             */}

            <li className="container-fluid">
    <Link className="navbar-brand" to="/about">About</Link></li>
    {/* <a className="navbar-brand" href="#">About</a></li> */}

        </Nav>
        <div className="form-check form-switch my-2">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Mode</label>
                </div>
        </Container>
        </Navbar>
        
        </div>
    </>
    );
}

export default ColorSchemesExample;