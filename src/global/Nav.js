import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    const navItems = [
        {id:1, name:"Home", link:"/home"},
        {id:2, name:"About", link:"/about"},
        {id:3, name:"Blog", link:"/Blog"},
        {id:4, name:"Contact", link:"/contact"},
    ]
  return (
    <div className='nav '>
       <nav className='container'>
       <h1 className='logo'>logo</h1>
        <ul className='navItem'>
            {
                navItems.map((item, i)=>{
                    return(
                        <li key={i}><Link className='links' to={item.link}>{item.name}</Link></li>
                    )
                })
            }
        </ul>
       </nav>
    </div>
  )
}
