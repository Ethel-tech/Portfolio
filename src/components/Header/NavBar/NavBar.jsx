import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.scss";

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid nav-div">
				<a className="navbar-brand" href="#">
					<img
						className="logo"
						src="https://i.postimg.cc/pL7XmFp1/Brown-and-Light-Brown-Circle-Framed-Instagram-Profile-Picture-removebg-preview.png"
						height={80}
						width={80}
					/>
					<p className="logo-name">Boma Sim-Jaja</p>
				</a>
				<button
					className="navbar-toggler custom-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon custom-toggler"></span>
				</button>
				<div className="collapse navbar-collapse floatRight " id="navbarText">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 navRight ">
						<li className="nav-item">
							<AnchorLink href="#home-page" className="page-link">
								<a className="nav-link" aria-current="page">
									Home
								</a>
							</AnchorLink>
						</li>
						<li className="nav-item">
							<AnchorLink href="#about-page" className="page-link">
								<a className="nav-link">About</a>
							</AnchorLink>
						</li>
						<li className="nav-item">
							<AnchorLink href="#projects-page" className="page-link">
								<a className="nav-link">Projects</a>
							</AnchorLink>
						</li>
						<li className="nav-item">
							<AnchorLink href="#contact-page" className="page-link">
								<a className="nav-link">Contact</a>
							</AnchorLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
