import React, {useState, useEffect} from 'react'
import '../styling/login.css'
import colors from '../components/colors'
import { TextField } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import { getAllUsers } from '../api/login'


export default function Login() {
	const [email, setEmail] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	useEffect(() => {
		getData()
	}, [])
	const getData = async() => {
		// let res = await getAllUsers()
		// console.log('res ', {res})
	}
	
  	return (
    	<div className='login-container'>
			<div className='login-sub' style={{backgroundColor: colors.green}} />
			
			<div className='login-submain d-flex flex-column'>
				<div style={{width: '70vw', backgroundColor: colors.green, marginTop: '5vh', marginBottom: '20px', color: 'white'}}>
					<WhatsAppIcon sx={{color: 'white', fontSize: 35, marginRight: '10px'}} />
					WHATSAPP WEB
				</div>
				<div className='login-test d-flex flex-column'>
					<div className='d-flex flex-row'>
						<div className='p-5'>
							<div className='login-header my-3'>Use Whatsapp on your computer</div>
							<br />
							<div className='login-subheader'>
								1. Open WhatsApp on your phone <br/>
								2. Tap <b>Menu</b> <MoreVertIcon sx={{color: colors.icon, fontSize: 20, backgroundColor: "#e3e3e3"}} /> or <b>Settings</b> <SettingsIcon sx={{color: colors.icon, fontSize: 20, backgroundColor: "#e3e3e3"}} /> and selected <b>Linked Devices</b> <br/>
								3. Tap on <b>Link a Device</b> <br/>
								4. Point your phone to this screen to capture the QR code
							</div>
							<div></div>
						</div>
						<div className='d-flex align-items-center p-5 flex-column'>
							<TextField id="outlined-basic" 
								label="Email" 
								variant="outlined"
								style={{width: '20vw'}}
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								placeholder='Enter your email'
							/>
							<TextField id="outlined-basic" 
								label="Phone Number" 
								variant="outlined"
								style={{width: '20vw', marginTop: 20}}
								onChange={(e) => setPhoneNumber(e.target.value)}
								value={phoneNumber}
								placeholder='Enter your phone number'
							/>
							<div className='login-send-otp' style={{backgroundColor: colors.green}}>Send Otp</div>
						</div>
					</div>
					<div className='d-flex align-items-center flex-column' style={{backgroundColor: '#F8F9FA', marginTop: '50px'}}>
						<div style={{fontSize: '27px', fontWeight: "lighter", margin: '10px'}}>Tutorial</div>
						<br />
						<div style={{color: colors.green, fontSize: '15px', marginBottom: '25px'}}>Need help to get started?</div>
						<iframe width="500" height="300" style={{marginBottom: '50px'}}
							src="https://www.youtube.com/embed/tgbNymZ7vqY" />
					</div>
				</div>
				
			</div>
		</div>
  	)
}

