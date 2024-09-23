// import React from "react";
// // import { TweenMax, Power3, Power4 } from "gsap";
// import { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Box from "@mui/material/Box";

// gsap.registerPlugin(ScrollTrigger);

// function ServiceType() {
// 	useEffect(() => {
// 		let ctx = gsap.context(() => {
// 		  // Set the initial position of photos (except the first one) to be off-screen at the bottom
// 		  gsap.set(".photo:not(:first-child)", { opacity: 1, y: "100%" });
	  
// 		  // Animate the opacity and the 'y' position to move photos upwards into view
// 		  const animation = gsap.to(".photo:not(:first-child)", {
// 			opacity: 1,
// 			y: 0,  // Move from 100px (bottom) to 0px (top)
// 			duration: 1,
// 			stagger: {
// 			  amount: 2,  // Total time taken for all elements to finish animating
// 			  onStart: (el) => {
// 				// Increase the zIndex of the current element to bring it on top
// 				gsap.set(el, { zIndex: 1 });
// 			  },
// 			  onComplete: (el) => {
// 				// Lower the zIndex of the previous element to keep the new one on top
// 				gsap.set(el, { zIndex: 0 });
// 			  }
// 			}
// 		  });
	  
// 		  // ScrollTrigger configuration to pin and scrub the animation
// 		  ScrollTrigger.create({
// 			trigger: ".gallery",
// 			start: "top top",
// 			end: "bottom bottom",
// 			pin: ".rightblock",
// 			animation: animation,
// 			scrub: true,
// 			markers: true,
// 		  });
// 		});
// 		return () => ctx.revert();
// 	  }, []);
	  
  
// 	return (
// 		<React.Fragment>
// 			<Box className="gallery" sx={{ display: "flex" }}>
// 				<Box className="left" sx={{
// 					width: "50%",
// 					marginLeft: "auto",
// 					"& .details": {
// 						height: "100vh",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "center",
// 						width: "40vw",
// 						marginLeft: "auto",
// 						color: "#000",
// 						fontSize: "3rem",
// 						fontWeight: 900,
// 					}
// 				}}>
// 					<Box className="details">
// 						MAN CLOTHS
// 					</Box>
// 					<Box className="details">
// 						WOMAN COLLECTION
// 					</Box>
// 					<Box className="details">
// 						KITS PANT SHIRT
// 					</Box>
// 					<Box className="details">
// 						ACCESSIORES
// 					</Box>
// 				</Box>
// 				<Box className="rightblock" sx={{
// 					width: "50%",
// 					height: "100vh",
// 					display: "flex",
// 					flexDirection: "column",
// 					justifyContent: "center",
// 				}}>
// 					<div className="p-5 ">
// 					<Box sx={{
// 						width: "30vw",
// 						height: "40vw",
// 						position: "relative",
// 						"& .photo": {
// 							position: "absolute",
// 							width: "100%",
// 							height: "100%",
							
// 							"& img": {
// 								height: "100%",
// 								width: "100%",
// 							}
// 						}
// 					}}>
// 						<Box className="photo">
// 							<img
// 								src="https://uiparadox.co.uk/templates/voguify/assets/media/cetagorie/image-2.png"
// 								alt="img-1" />
// 						</Box>
// 						<Box  className="photo">
// 							<img
// 								src="https://uiparadox.co.uk/templates/voguify/assets/media/cetagorie/image.png"
// 								alt="img-2" />
// 						</Box>
// 						<Box  className="photo">
// 							<img
// 								src="https://uiparadox.co.uk/templates/voguify/assets/media/cetagorie/image-2.png"
// 								alt="img-3" />
// 						</Box>
// 						<Box  className="photo">
// 							<img
// 								src="https://uiparadox.co.uk/templates/voguify/assets/media/cetagorie/image-1.png"
// 								alt="img-3" />
// 						</Box>
// 					</Box>
// 					</div>
// 				</Box>
// 			</Box>
// 		</React.Fragment >
// 	);
// }

// export default ServiceType;


import React from "react";
// import { TweenMax, Power3, Power4 } from "gsap";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";

gsap.registerPlugin(ScrollTrigger);

function ServiceType() {
	useEffect(() => {
		let ctx = gsap.context(() => {
		  // Set the initial position of photos (except the first one) to be off-screen at the bottom
		  gsap.set(".photo:not(:first-child)", { opacity: 1, y: "100%" });
	  
		  // Animate the opacity and the 'y' position to move photos upwards into view
		  const animation = gsap.to(".photo:not(:first-child)", {
			opacity: 1,
			y: 0,  // Move from 100px (bottom) to 0px (top)
			duration: 1,
			stagger: {
			  amount: 2,  // Total time taken for all elements to finish animating
			  onStart: (el) => {
				// Increase the zIndex of the current element to bring it on top
				gsap.set(el, { zIndex: 1 });
			  },
			  onComplete: (el) => {
				// Lower the zIndex of the previous element to keep the new one on top
				gsap.set(el, { zIndex: 0 });
			  }
			}
		  });
	  
		  // ScrollTrigger configuration to pin and scrub the animation
		  ScrollTrigger.create({
			trigger: ".gallery",
			start: "top top",
			end: "bottom bottom",
			pin: ".rightblock",
			animation: animation,
			scrub: true,
			markers: true,
		  });
		});
		return () => ctx.revert();
	  }, []);
	  
  
	return (
		<React.Fragment>
			<Box className="gallery" sx={{ display: "flex" }}>
				<Box className="left" sx={{
					width: "50%",
					marginLeft: "auto",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					"& .details": {
						height: "100vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						width: "40vw",
						marginLeft: "auto",
						fontSize: "4rem",
					}
				}}>
					<Box className="details font-serif text-gray-700">
						MAN CLOTHS
					</Box>
					<Box className="details font-serif text-gray-700">
						WOMAN COLLECTION
					</Box>
					<Box className="details font-serif text-gray-700">
						KITS PANT SHIRT
					</Box>
					<Box className="details font-serif text-gray-700">
						ACCESSIORES
					</Box>
				</Box>
				<Box className="rightblock" sx={{
					width: "50%",
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}>
					<div className="p-5 ">
					<Box sx={{
						width: "30vw",
						height: "40vw",
						position: "relative",
						backgroundColor:"green",
						paddingRight:"100px",
						"& .photo": {
							position: "absolute",
							width: "100%",
							height: "100%",
							
							"& img": {
								height: "100%",
								width: "100%",
							}
						}
					}}>
						<Box className="photo">
							<img
								src="https://uiparadox.co.uk/templates/voguify/assets/media/cetagorie/image-2.png"
								alt="img-1" />
						</Box>
						<Box  className="photo">
							<img
								src="https://uiparadox.co.uk/templates/voguify/assets/media/cetagorie/image.png"
								alt="img-2" />
						</Box>
						<Box  className="photo">
							<img
								src="https://uiparadox.co.uk/templates/voguify/assets/media/cetagorie/image-2.png"
								alt="img-3" />
						</Box>
						<Box  className="photo">
							<img
								src="https://uiparadox.co.uk/templates/voguify/assets/media/cetagorie/image-1.png"
								alt="img-3" />
						</Box>
					</Box>
					</div>
				</Box>
			</Box>
		</React.Fragment >
	);
}

export default ServiceType;

