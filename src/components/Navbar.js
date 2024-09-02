import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Box, Button} from '@mui/material';
import {Link as ScrollLink} from 'react-scroll';

const Navbar = () => {
	return (
		<AppBar
			position="fixed"
			sx={{
				background: 'transparent',
				boxShadow: 'none',
				padding: '0 20px',
			}}
		>
			<Toolbar sx={{justifyContent: 'space-between'}}>
				<Box sx={{flexGrow: 1}}>
					<ScrollLink to="about" smooth={true} duration={500}>
						<Button color="inherit">Kevin Kowalewski</Button>
					</ScrollLink>
				</Box>
				<Box display="flex" alignItems="center">
					<ScrollLink to="about" smooth={true} duration={500}>
						<Button color="inherit">About</Button>
					</ScrollLink>
					<ScrollLink to="resume" smooth={true} duration={500}>
						<Button color="inherit">Resume</Button>
					</ScrollLink>
					<ScrollLink to="contact" smooth={true} duration={500}>
						<Button color="inherit">Contact</Button>
					</ScrollLink>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;

