// Schematic teaching outlines only. These are NOT GIS-accurate historical borders.
// Boundary confidence describes the illustrative geometry, not the historical polity itself.
const territories = [
  {
    id: "maurya",
    name: "Mauryan Empire",
    startYear: -322, endYear: -185,
    color: "#c6a56b", confidence: "Low–moderate",
    capital: "Pataliputra",
    extentNote: "A broad outline of the empire at a mature phase; control varied substantially by reign.",
    sourceNote: "Synthesized as a schematic outline from standard historical atlases and Romila Thapar, Aśoka and the Decline of the Mauryas (1961).",
    coordinates: [[25,66],[30,68],[34,72],[34,78],[28,84],[24,88],[20,86],[14,80],[10,76],[14,73],[20,70]]
  },
  {
    id: "gupta",
    name: "Gupta Empire",
    startYear: 320, endYear: 550,
    color: "#7db6a1", confidence: "Low",
    capital: "Pataliputra (among the imperial centres)",
    extentNote: "Indicative northern and central Indian sphere near its broadest extent; boundaries and subordinate relationships were fluid.",
    sourceNote: "Schematic teaching outline informed by standard histories of the Gupta period, including R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III.",
    coordinates: [[24,72],[29,75],[31,80],[29,86],[25,90],[21,87],[19,82],[20,77]]
  },
  {
    id: "chola",
    name: "Chola Empire",
    startYear: 850, endYear: 1279,
    color: "#d59a63", confidence: "Low",
    capital: "Thanjavur; later Gangaikonda Cholapuram",
    extentNote: "Schematic core in the Kaveri delta and southern peninsula. Overseas influence and campaign reach are not represented as continuous land control.",
    sourceNote: "Schematic teaching outline informed by K. A. Nilakanta Sastri, The Cōḷas (1935).",
    coordinates: [[14.8,76.5],[16.0,78.0],[15.5,80.0],[13.2,80.5],[10.0,80.2],[8.0,78.0],[8.5,76.2],[11.0,75.5]]
  },
  {
    id: "delhi-sultanate",
    name: "Delhi Sultanate",
    startYear: 1206, endYear: 1526,
    color: "#a89bd4", confidence: "Low",
    capital: "Delhi",
    extentNote: "Indicative northern Indian core only. The Sultanate's reach changed markedly between dynasties and reigns.",
    sourceNote: "Schematic teaching outline informed by Peter Jackson, The Delhi Sultanate: A Political and Military History (1999).",
    coordinates: [[27,72],[31,76],[30,82],[27,86],[23,83],[22,78],[24,74]]
  },
  {
    id: "vijayanagara",
    name: "Vijayanagara Empire",
    startYear: 1336, endYear: 1646,
    color: "#d47e82", confidence: "Low",
    capital: "Vijayanagara (Hampi)",
    extentNote: "Indicative Deccan and southern Indian core. The empire's frontiers shifted and included changing subordinate polities.",
    sourceNote: "Schematic teaching outline informed by Burton Stein, Vijayanagara (1989).",
    coordinates: [[19,73],[20,77],[18,82],[15,84],[11,82],[9,78],[11,74],[15,72]]
  },
  {
    id: "mughal",
    name: "Mughal Empire",
    startYear: 1526, endYear: 1857,
    color: "#8da9d6", confidence: "Low",
    capital: "Agra and Shahjahanabad (Delhi), among others",
    extentNote: "A broad northern and central Indian outline at a powerful phase, not a year-by-year boundary. The empire's maximum extent was larger in the late 17th century.",
    sourceNote: "Schematic teaching outline informed by John F. Richards, The Mughal Empire (1993).",
    coordinates: [[32,70],[35,76],[34,84],[30,90],[25,91],[21,87],[19,82],[21,77],[25,73]]
  },
  {
    id: "maratha",
    name: "Maratha Confederacy",
    startYear: 1674, endYear: 1818,
    color: "#d6b86f", confidence: "Low",
    capital: "Raigad; later Pune as a major political centre",
    extentNote: "Indicative Deccan-centred sphere at a broad phase. Confederacy influence was distributed among multiple houses and changed over time.",
    sourceNote: "Schematic teaching outline informed by Stewart Gordon, The Marathas 1600–1818 (1993).",
    coordinates: [[22,72],[25,76],[24,82],[21,85],[17,84],[14,80],[15,75],[18,72]]
  }
];

export default territories;
