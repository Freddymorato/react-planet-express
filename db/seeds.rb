

# Destinations

destinations = Destination.create([
  {name: "Earth", img_url: "https://www.jpl.nasa.gov/visions-of-the-future/images/earth.jpg", astronomical_body: "Planet", view_on_maps: "google.com/maps/space/earth", radius: 3959, description: "There's no place like home. Warm, wet and with an atmosphere that's just right, Earth is the only place we know of with life – and lots of it. JPL's Earth science missions monitor our home planet and how it's changing so it can continue to provide a safe haven as we reach deeper into the cosmos.", likes: 70},
  {name: "Mars", img_url: "https://www.jpl.nasa.gov/visions-of-the-future/images/mars.jpg", astronomical_body: "Planet", view_on_maps: "google.com/maps/space/mars", radius: 2106, description: "NASA's Mars Exploration Program seeks to understand whether Mars was, is, or can be a habitable world. Missions like Mars Pathfinder, Mars Exploration Rovers, Mars Science Laboratory and Mars Reconnaissance Orbiter, among many others, have provided important information in understanding of the habitability of Mars. This poster imagines a future day when we have achieved our vision of human exploration of Mars and takes a nostalgic look back at the great imagined milestones of Mars exploration that will someday be celebrated as 'historic sites '", likes: 2},
  {name: "Grand Tour", img_url: "https://www.jpl.nasa.gov/visions-of-the-future/images/grand_tour.jpg", astronomical_body: "TBD", view_on_maps: "google.com/maps/space/", radius: 0, description: "NASA's Voyager mission took advantage of a once-every-175-year alignment of the outer planets for a grand tour of the solar system. The twin spacecraft revealed details about Jupiter, Saturn, Uranus and Neptune – using each planet's gravity to send them on to the next destination. Voyager set the stage for such ambitious orbiter missions as Galileo to Jupiter and Cassini to Saturn. Today both Voyager spacecraft continue to return valuable science from the far reaches of our solar system.", likes: 1},
  {name: "Venus", img_url: "https://www.jpl.nasa.gov/visions-of-the-future/images/venus.jpg", astronomical_body: "Planet", view_on_maps: "google.com/maps/space/venus", radius: 3760, description: "The rare science opportunity of planetary transits has long inspired bold voyages to exotic vantage points – journeys such as James Cook's trek to the South Pacific to watch Venus and Mercury cross the face of the Sun in 1769. Spacecraft now allow us the luxury to study these cosmic crossings at times of our choosing from unique locales across our solar system.", likes: 30},
  {name: "Ceres", img_url: "https://www.jpl.nasa.gov/visions-of-the-future/images/ceres.jpg", astronomical_body: "Planet", view_on_maps: "google.com/maps/space/ceres", radius: 294, description: "Ceres is the closest dwarf planet to the Sun. It is the largest object in the main asteroid belt between Mars and Jupiter, with an equatorial diameter of about 965 kilometers. After being studied with telescopes for more than two centuries, Ceres became the first dwarf planet to be explored by a spacecraft, when NASA's Dawn probe arrived in orbit in March 2015. Dawn's ongoing detailed observations are revealing intriguing insights into the nature of this mysterious world of ice and rock.", likes: 14},
  {name: "Jupiter", img_url: "https://www.jpl.nasa.gov/visions-of-the-future/images/jupiter.jpg", astronomical_body: "Planet", view_on_maps: "google.com/maps/space/jupiter", radius: 43441, description: "The Jovian cloudscape boasts the most spectacular light show in the solar system, with northern and southern lights to dazzle even the most jaded space traveler. Jupiter's auroras are hundreds of times more powerful than Earth's, and they form a glowing ring around each pole that's bigger than our home planet. Revolving outside this auroral oval are the glowing, electric “footprints” of Jupiter's three largest moons. NASA's Juno mission will observe Jupiter's auroras from above the polar regions, studying them in a way never before possible.", likes: 3},
  {name: "Enceladus", img_url: "https://www.jpl.nasa.gov/visions-of-the-future/images/enceladus.jpg", astronomical_body: "Moon", view_on_maps: "google.com/maps/space/enceladus", radius: 157, description: "The discovery of Enceladus' icy jets and their role in creating Saturn's E-ring is one of the top findings of the Cassini mission to Saturn. Further Cassini mission discoveries revealed strong evidence of a global ocean and the first signs of potential hydrothermal activity beyond Earth – making this tiny Saturnian moon one of the leading locations in the search for possible life beyond Earth.", likes: 0},
  {name: "Titan", img_url: "https://www.jpl.nasa.gov/visions-of-the-future/images/titan.jpg", astronomical_body: "Moon", view_on_maps: "google.com/maps/space/titan", radius: 1600, description: "Frigid and alien, yet similar to our own planet billions of years ago, Saturn's largest moon, Titan, has a thick atmosphere, organic-rich chemistry and a surface shaped by rivers and lakes of liquid ethane and methane. Cold winds sculpt vast regions of hydrocarbon-rich dunes. There may even be cryovolcanoes of cold liquid water. NASA's Cassini orbiter was designed to peer through Titan's perpetual haze and unravel the mysteries of this planet-like moon.", likes: 8},
  {name: "Europa", img_url: "https://www.jpl.nasa.gov/visions-of-the-future/images/europa.jpg", astronomical_body: "Moon", view_on_maps: "google.com/maps/space/europa", radius: 970, description: "Astonishing geology and the potential to host the conditions for simple life make Jupiter's moon Europa a fascinating destination for future exploration. Beneath its icy surface, Europa is believed to conceal a global ocean of salty liquid water twice the volume of Earth's oceans. Tugging and flexing from Jupiter's gravity generates enough heat to keep the ocean from freezing. On Earth, wherever we find water, we find life. What will NASA's Europa mission find when it heads for this intriguing moon in the 2020s.", likes: 28},
  {name: "51 Pegasi b", img_url: "https://www.jpl.nasa.gov/visions-of-the-future/images/51pegasib.jpg", astronomical_body: "Planet", view_on_maps: "Not Available", radius: 84403, description: "While there is much debate over which exoplanet discovery is considered the 'first,' one stands out from the rest. In 1995, scientists discovered 51 Pegasi b, forever changing the way we see the universe and our place in it. The exoplanet is about half the mass of Jupiter, with a seemingly impossible, star-hugging orbit of only 4.2 Earth days. Not only was it the first planet confirmed to orbit a sun-like star, it also ushered in a whole new class of planets called Hot Jupiters: hot, massive planets orbiting closer to their stars than Mercury. Today, powerful observatories like NASA's Kepler space telescope will continue the hunt of distant planets.", likes: 0},
  {name: "HD 40307 g", img_url: "https://www.jpl.nasa.gov/visions-of-the-future/images/superearth.jpg", astronomical_body: "Planet", view_on_maps: "Not Available", radius: 9461, description: "Twice as big in volume as the Earth, HD 40307g straddles the line between 'Super-Earth' and 'mini-Neptune' and scientists aren't sure if it has a rocky surface or one that's buried beneath thick layers of gas and ice. One thing is certain though: at eight time the Earth's mass, its gravitational pull is much, much stronger.", likes: 20},
  {name: "Kepler-16b", img_url: "https://www.jpl.nasa.gov/visions-of-the-future/images/kepler16b.jpg", astronomical_body: "Planet", view_on_maps: "Not Available", radius: 33486, description: "Like Luke Skywalker's planet 'Tatooine' in Star Wars, Kepler-16b orbits a pair of stars. Depicted here as a terrestrial planet, Kepler-16b might also be a gas giant like Saturn. Prospects for life on this unusual world aren't good, as it has a temperature similar to that of dry ice. But the discovery indicates that the movie's iconic double-sunset is anything but science fiction.", likes: 9},
  {name: "Kepler-186f", img_url: "https://www.jpl.nasa.gov/visions-of-the-future/images/kepler186f.jpg", astronomical_body: "Planet", view_on_maps: "Not Available", radius: 4632, description: "Kepler-186f is the first Earth-size planet discovered in the potentially 'habitable zone' around another star, where liquid water could exist on the planet's surface. Its star is much cooler and redder than our Sun. If plant life does exist on a planet like Kepler-186f, its photosynthesis could have been influenced by the star's red-wavelength photons, making for a color palette that's very different than the greens on Earth. This discovery was made by Kepler, NASA's planet hunting telescope.", likes: 35},
  {name: "PSO J318.5-22", img_url: "https://www.jpl.nasa.gov/visions-of-the-future/images/nightlife.jpg", astronomical_body: "Planet", view_on_maps: "Not Available", radius: 67967, description: "Discovered in October 2013 using direct imaging, PSO J318.5-22 belongs to a special class of planets called rogue, or free-floating, planets. Wandering alone in the galaxy, they do not orbit a parent star. Not much is known about how these planets come to exist, but scientists theorize that they may be either failed stars or planets ejected from very young systems after an encounter with another planet. These rogue planets glow faintly from the heat of their formation. Once they cool down, they will be dancing in the dark.", likes: 8},
  {name: "TRAPPIST-1e", img_url: "https://www.jpl.nasa.gov/visions-of-the-future/images/trappist.jpg", astronomical_body: "Planet", view_on_maps: "Not Available", radius: 3602, description: "Some 40 light-years from Earth, a planet called TRAPPIST-1e offers a heart-stopping view: brilliant objects in a red sky, looming like larger and smaller versions of our own moon. But these are no moons. They are Earth-sized planets in a spectacular planetary system outside our own. These seven rocky worlds huddle around their small, dim, red star, like a family around a campfire. Any of them could harbor liquid water, but the planet shown here, fourth from the TRAPPIST-1 star, is in the habitable zone, the area around the star where liquid water is most likely to be detected. This system was revealed by the TRAnsiting Planets and PlanetesImals Small Telescope (TRAPPIST) and NASA’s Spitzer Space Telescope. The planets are also excellent targets for NASA’s James Webb Space Telescope. Take a planet-hopping excursion through the TRAPPIST-1 system.", likes: 10},
  {name: "Kuiper Belt", img_url: "https://www.outerplaces.com/images/user_upload/travel%20poster2.jpg", astronomical_body: "Asteroid", view_on_maps: "Not Available", radius: 1000, description: "Kuiper Belt is a belt of icy bodies confined to the plane of the Solar System extending beyond the orbit of Neptune. The Kupiter Belt was thought to be the reservoir of the short period comets.Current theories have the Kuiper Belt forming along with the rest of the Solar System, though it is still a matter of debate whether it formed in place or was pushed out to its present position as Neptune migrated outwards. If it did form in situ, then the region has clearly been heavily depleted, since it contains less than 1% of the mass needed to build the large ice giant planets.", likes: 0},
  {name: "Tatooine", img_url: "https://i.pinimg.com/originals/4b/62/b7/4b62b7ccc7ebb198786c4fcfe94af24d.jpg", astronomical_body: "Star", view_on_maps: "Not Available", radius: 850, description: "A harsh desert world orbiting twin suns in the galaxy’s Outer Rim, Tatooine is a lawless place ruled by Hutt gangsters. Many settlers scratch out a living on moisture farms, while spaceport cities such as Mos Eisley and Mos Espa serve as home base for smugglers, criminals, and other rogues.", likes: 2},
  {name: "Jovian Asteroids", img_url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/8ccc87e3-9294-40eb-a40a-b60ca83b536d/d88cub7-2c7b9166-b564-4673-8d8d-33213808214b.jpg/v1/fill/w_600,h_900,q_70,strp/jupiter___jovian_asteroids_by_fabledcreative_d88cub7-fullview.jpg", astronomical_body: "Asteroid", view_on_maps: "Not Available", radius: 1200, description: "The Jupiter trojans, commonly called Trojan asteroids or simply Trojans, are a large group of asteroids that share the planet Jupiter's orbit around the Sun. Relative to Jupiter, each Trojan librates around one of Jupiter's two stable Lagrange points: L₄, lying 60° ahead of the planet in its orbit, and L₅, 60° behind.", likes: 7},
  {name: "Ida and Dactyl", img_url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/8ccc87e3-9294-40eb-a40a-b60ca83b536d/d8864z6-d5e9393e-c638-4cd4-9c4f-1ed258fd54d7.jpg/v1/fill/w_600,h_900,q_70,strp/the_asteroid_belt___ida_and_dactyl_by_fabledcreative_d8864z6-fullview.jpg", astronomical_body: "Asteroid", view_on_maps: "Not Available", radius: 2000, description: "Ida is a heavily cratered, irregularly shaped asteroid in the main asteroid belt between Mars and Jupiter -- the 243rd asteroid to be discovered since the first one was found at the beginning of the 19th century. Ida is placed by scientists in the S class (stony or stony iron meteorites). The greatest discovery from the Galileo fly-by was that Ida has a natural satellite. Although Galileo flew past Ida in August 1993, the discovery wasn't made until late in February 1994 when images stored on the spacecraft's tape recorder were finally transmitted to Earth.", likes: 0}
]);


# Comments

comments = Comment.create([
  {content: "I never even heard of this planet until last year! This place is amazing.", commenter: "Kimmy Schmidt", destination_id: 1},
  {content: "Amazing food and wine list. I recommend the Pinot Noir.", commenter: "Titus A.", destination_id: 1},
  {content: "Had a nice meal with Walt and Jess. Good place for mixing brunch and business deals.", commenter: "Saul Goodman", destination_id: 2},
  {content: "So glad we came here instead of using our crockpot!", commenter: "Jack Pearson", destination_id: 3},
  {content: "This restaurant was fantastic! Planning a girls' brunch soon with everyone except Carole.", commenter: "Bethenny", destination_id: 4},
  {content: "Awesome brunch spot! Love the bottomless mimosas!", commenter: "Dorinda", destination_id: 4},
  {content: "Great place to see and be seen (and secretly record conversations).", commenter: "Omarosa", destination_id: 5},
  {content: "Best restaurant that has ever existed. Period.", commenter: "Sean S.", destination_id: 6}
]);
