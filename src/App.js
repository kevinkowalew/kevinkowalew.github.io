import React, {useEffect} from 'react';
import {Box, Typography, Grid, Card, CardContent, CardMedia, Chip, IconButton} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Navbar from './components/Navbar';
import './App.css';

const experiences = [
	{
		company: 'CrowdStrike',
		role: 'Software Engineer',
		duration: 'Sep 2022 - Present',
		image: 'https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/lnhffj3pvssvznq8wbuc',
		technologies: ['Go', 'Python', 'K8s', 'AWS', 'Grafana', 'Kafka', 'Cassandra', 'ElasticSearch'],
		projects: [
			'Implemented Internal SRE Incident Management Workflow Solution',
			'Performed on-call rotations and managed live site incidents',
			'Mentored interns building a K8s Custom Pod Autoscaler',
		],
	},
	{
		company: 'Sprout Social',
		role: 'Senior Software Engineer',
		duration: 'Jun 2020 - Sep 2022',
		image: 'https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/v1438619962/qym7nmwnmx4qvfge8c9a.png',
		technologies: ['Java', 'Python', 'K8s', 'AWS', 'MySql', 'ElasticSearch', 'Hadoop', 'Hbase', 'Spark'],
		projects: [
			"Led Kubernetes migration of Sprout's entire Analytics Platform",
			"Co-lead EMR migration of Data Processing Jobs backing Sprout Analytic's Platform",
			"Conducted Interviews for Senior/Staff Backend Candidates",
		],
	},
	{
		company: 'Sprout Social',
		role: 'Software Engineer',
		duration: 'Jun 2017 - Sep June 2020',
		image: 'https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/v1438619962/qym7nmwnmx4qvfge8c9a.png',
		technologies: ['Swift', 'Objective-C', 'Python', 'iOS', 'Django', 'MySql'],
		projects: [
			"Implemented backend services used for sending push notifications to Sprout's mobile app users",
			"Create core components for Sprout's new Nectar Design System"
		],
	},
	{
		company: 'Eversnap',
		role: 'Software Engineering Intern',
		duration: 'Jun 2016 - Sep 2016',
		image: 'https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/npgx5ynluzq6rgqtxfzd',
		technologies: ['Swift', 'Objetive-C', 'Python', 'iOS', 'Django', 'MySql'],
		projects: [
			"Contributed to backend image storage services",
			"Planned and implemented complete App UI redesign",
		],
	},
];

const App = () => {
	useEffect(() => {
		document.title = 'Kevin Kowalewski';
	}, []);
	const gradientBackground = {
		background: 'linear-gradient(135deg, #FF5F6D 0%, #FFC371 100%)',
		minHeight: '100vh',
		paddingTop: '64px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	};

	const sectionStyle = {
		minHeight: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '20px',
		textAlign: 'center',
	};

	return (
		<Box sx={gradientBackground}>
			<Navbar />
			<Box id="about" sx={sectionStyle}>
				<Typography variant="body1" color="white" sx={{maxWidth: '800px', marginTop: '20px'}}>
					<img className="avatar" alt="avatar" src="https://avatars.githubusercontent.com/u/9099021?v=4" />
					<h1>Hi 👋 I'm Kevin</h1>
					<h2>
						A software engineer working remotely out of Chicago, IL.  I have over 6 years of industry experience building distributed systems at scale.  I have extensive experience with elastic systems and am constantly learning about emerging technologies in the Cloud Native space.  Outside of work, I enjoy spending time with my dog, playing guitar and exercising.
					</h2>
				</Typography>
			</Box>
			<Box id="resume" sx={sectionStyle}>
				<Grid container spacing={4} justifyContent="center">
					{experiences.map((experience, index) => (
						<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
							<Card className="flip-card">
								<div className="flip-card-inner">
									<div className="flip-card-front">
										<CardMedia
											height="100"
											component="img"
											image={experience.image}
											alt={`${experience.company} logo`}
											sx={{padding: "1em 1em 0 1em", objectFit: "contain"}}
										/>
										<CardContent className="card-content">
											<Typography gutterBottom variant="h5" component="div">
												{experience.company}
											</Typography>
											<Typography variant="body2" color="text.secondary">
												{experience.role}
											</Typography>
											<Typography variant="body2" color="text.secondary">
												{experience.duration}
											</Typography>
											<Box sx={{marginTop: '10px'}}>
												<Typography variant="body2" color="text.secondary" sx={{fontWeight: 'bold'}}>
													Technologies:
												</Typography>
												<Box sx={{marginTop: '5px'}}>
													{experience.technologies.map((tech, techIndex) => (
														<Chip key={techIndex} label={tech} sx={{margin: '2px'}} />
													))}
												</Box>
											</Box>
										</CardContent>
										<div className="flip-arrow-div">
											<IconButton className="flip-arrow" >
												<ArrowForwardIcon />
											</IconButton>
										</div>
									</div>
									<div className="flip-card-back">
										<CardContent className="card-content">
											<Typography variant="h6" component="div" sx={{marginBottom: '10px'}}>
												Projects:
											</Typography>
											<ul className="card-list">
												{experience.projects.map((project, projectIndex) => (
													<li key={projectIndex}>
														<Typography variant="body2" color="text.secondary">
															{project}
														</Typography>
													</li>
												))}
											</ul>
										</CardContent>
									</div>
								</div>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
			<Box id="contact" sx={sectionStyle}>
				<Box sx={{marginTop: '20px'}}>
					<Typography variant="h3" color="white">
						Get In Touch
					</Typography>
					<Typography variant="h5" color="white">
						+1 (507) 581 3477
					</Typography>
					<Typography variant="h5" color="white">
						kowalewski.ke@gmail.com
					</Typography>
					<Box sx={{marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '20px'}}>
						<IconButton
							component="a"
							href="https://www.linkedin.com/in/kowalewskik/"
							target="_blank"
							color="inherit"
						>
							<LinkedInIcon sx={{fontSize: 40, color: 'white'}} />
						</IconButton>
						<IconButton
							component="a"
							href="https://github.com/kevinkowalew"
							target="_blank"
							color="inherit"
						>
							<GitHubIcon sx={{fontSize: 40, color: 'white'}} />
						</IconButton>
						<IconButton
							component="a"
							href="mailto:kowalewski.ke@gmail.com"
							color="inherit"
						>
							<MailOutlineIcon sx={{fontSize: 40, color: 'white'}} />
						</IconButton>
					</Box>
				</Box>
			</Box>
		</Box >
	);
};

export default App;
