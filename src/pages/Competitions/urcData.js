const data = [
  {
    id: 0,
    comp: "URC 2021",
    info: "The 14th edition of University Rover Challenge was cancelled due to the Corona virus Pandemic. URC had released the System Acceptance Review (SAR) result in July and MRM scored 91.17.",
    img: "photos-urc2021/rover_1.jpg",
    roverName: "ROVER 2021",
    pos: "91.17 (SAR Score)",
    MaximumSpeed: "1.8m/s",
    Tires: "Low Pressure Polyurethane Balloon Tires",
    TractiveEffort: "600N",
    Wheels: "Full Floating Axle",
    Suspension:
      "6 Wheel, Novel 5 Bar Multilink Suspension System Constrained via Torsion Springs",
    Chassis: "All Aluminium Chassis.",

    MaxTraversableHeight: "0.8m",
    ChassisWeight: "3 kg",
    AutonomousSystem: "Traversal and navigation capability, Image Processing",

    RoboticArm: "6 DOF Articulated Robotic Arm using Linear Actuators",
    HorizontalReach: "850 mm",
    VerticalReach: "1200 mm",
    SoilCollector: "Lead Screw Actuated Auger with Collection Tray Mechanism",
    CentreOfGravity: "300",
    Microcontroller: "ARM Cortex based STM32",
    SingleBoardComputer: "Jetson TX2 and Raspberry Pi 3B+",
    MotorDrivers: "13A continuous motor driver",
    WheelMotors: "24V DC geared Motors",
    Batteries: "16500mAh LiPo",
    CommunicationFrequencies: "	2.4GHz, 5GHz",
    Sensors:
      "MRS1000 SICK Lidar, Garmin(18x USB GPS navigator), Magnetometer(BNO080), VOC, Ozone, Hydraprobe(Temp, moisture, salinity, EC),Intel Realsense Depth Camera",

    pics: [
      { src: "photos-urc2021/grp_1.JPG" },
      { src: "photos-urc2021/board_1.jpg" },
      { src: "photos-urc2021/rover1_1.jpg" },
      { src: "photos-urc2021/mem_1.jpg" },
    ],
    video: "https://www.youtube.com/embed/rbkrRSdEiOA?controls=0",
  },
  {
    id: 1,
    comp: "URC 2020",
    info: "The 14th edition of University Rover Challenge was cancelled due to the Corona virus Pandemic. URC had released the System Acceptance Review (SAR) result in July and MRM stood 1st in India, 2nd in Asia and 7th wordwide. We also continued our run of being the best Indian Rover Team for the fourth consecutive year.",
    img: "comp/2020Rover.webp",
    roverName: "ROVER 2020",
    pos: "7th Worldwide",
    MaximumSpeed: "1.7m/s",
    Tires: "Low Pressure Polyurethane Balloon Tires",
    TractiveEffort: "600N",
    Wheels: "Full Floating Axle",
    Suspension:
      "6 Wheel, Custom 5 Bar Multilink Suspension System Constrained by Struts",
    Chassis: "Carbon fibre space frame chassis  ",

    MaxTraversableHeight: "0.8m",
    ChassisWeight: "4.5 kg",
    AutonomousSystem: "Traversal and navigation capability, Image Processing",

    RoboticArm: "Articulated 6 DOF Robotic arm",
    HorizontalReach: "850 mm",
    VerticalReach: "1200 mm",
    SoilCollector: "Lead Screw Actuated Auger with Collection Tray Mechanism",
    CentreOfGravity: "300",
    Microcontroller: "ARM Cortex based STM32",
    SingleBoardComputer: "Jetson TX2 and Raspberry Pi 3B+",
    MotorDrivers: "13A continuous motor driver",
    WheelMotors: "24V DC geared Motors",
    Batteries: "16500mAh LiPo",
    CommunicationFrequencies: "	2.4GHz, 5GHz",
    // Feedback: "Digital Cameras",
    Sensors:
      "MRS1000 SICK Lidar, Garmin(18x USB GPS navigator), Magnetometer(BNO080), VOC, Ozone, Hydraprobe(Temp, moisture, salinity, EC),Intel Realsense Depth Camera",

    pics: [
      { src: "photos20/team.webp" },
      { src: "photos20/PCB Power.webp" },
      { src: "photos20/robo.webp" },
      { src: "photos20/Rover 2020.webp" },
      { src: "photos20/Rover autonomous.webp" },
    ],
    video: "https://www.youtube.com/embed/V22SHOJQx4I?controls=0",
  },
  {
    id: 2,
    comp: "URC 2019",
    info: "The 13th edition of University Rover Challenge was held in Utah, USA from May 30 to June 1, 2019. For the fourth consecutive year, MRM has been amongst the top 36 international teams and was one of the only 5 teams from India to make it to the onsite competetion of URC 19.MRM has secured the 8th rank globally which has further placed us as the best rover team in Asia.We also continued our run of being the best Indian Rover Team for the third consecutive year.        In addition to this, MRM was the recipient of the prestigious Barainca award for the best science team in the competition, securing a 95/100 in this challenging mission.",
    img: "comp/urc2019.webp",
    roverName: "ROVER 2019",
    pos: "8th Worldwide",
    MaximumSpeed: "1.8m/s",
    Tires: "ATV tires",
    TractiveEffort: "800 N",
    Wheels: "Three quarter floating axle",
    Suspension:
      "4 wheel double wishbone suspension with custom designed struts",

    MaxTraversableHeight: "0.8m",
    ChassisWeight: "3.7 kg",

    Chassis: "Carbon fibre space frame chassis",
    RoboticArm: "Articulated 6 DOF Robotic arm",
    HorizontalReach: "800 mm",
    VerticalReach: "1110 mm",
    SoilCollector: "Dedicated auger mechanism with rotating disk",
    CentreOfGravity: "312mm",
    Microcontroller: "	ARM Cortex based STM32",
    SingleBoardComputer: "Jetson TX2 and Raspberry Pi 3B+",
    MotorDrivers: "13A continuous motor driver",
    WheelMotors: "24V DC geared Motors",
    Batteries: "16500mAh LiPo",
    CommunicationFrequencies: "	2.4GHz, 5GHz",
    // Feedback: "Digital Cameras",
    Sensors:
      "Garmin(18x USB GPS navigator), Magnetometer(LSM9DS1), VOC, Ozone, Hydraprobe(Temp, moisture, salinity, EC),Intel Realsense Depth Camera",

    pics: [
      { src: "Photos19/1.jpg" },
      { src: "Photos19/2.webp" },
      { src: "Photos19/3.jpg" },
      { src: "Photos19/4.jpg" },
      { src: "Photos19/5.jpg" },
      { src: "Photos19/6.jpg" },
      { src: "Photos19/7.jpg" },
      { src: "Photos19/8.jpg" },
      { src: "Photos19/9.jpg" },
    ],
    video: "https://www.youtube.com/embed/vY86gCyUFQ8?controls=0",
  },
  {
    id: 3,
    comp: "URC 2018",
    info: "MRM secured a world rank of 7 in URC 2018. Held from 31 May 2018 to 2 June 2018, URC 2018 witnessed huge participation with 35 teams out of the 96 registered making it to the on-site competition.There was tough competition but MRM held its own and we secured our best rank yet. Our rover Airawat once again placed us as India's best and Asia's second best rover team at URC.",
    img: "comp/urc2018.webp",
    roverName: "ROVER AIRAWAT",
    pos: "7th Worldwide",
    MaximumSpeed: "1.9 m/s",
    Tires: "Low pressure balloon tires",
    TractiveEffort: "600 N",

    DriveSystemPower: "11.58 HP",
    MaxTraversableHeight: "0.8m",
    ChassisWeight: "4.5 Kg",
    AutonomousSystem: "Traversal and navigation capability, Image Processing",

    Wheels: "Three quarter floating axle",
    Suspension: "6 wheel space frame Modified Rocker Bogie",
    Chassis: "carbon fibre space frame chassis",
    RoboticArm: "Articulated 6 DOF Robotic arm",
    HorizontalReach: "878 mm",
    VerticalReach: "1350 mm",
    SoilCollector: "Dedicated auger mechanism",
    CentreOfGravity: "312 mm",
    Microcontroller: "STM32 F103",
    SingleBoardComputer: "Jetson tx1 and Raspberry Pi 3",
    MotorDrivers:
      "13A continuous current DC motor driver for wheel motors.Custom DC motor drivers for manipulator motors",
    WheelMotors: "24V DC geared Motors",
    Batteries: "16500mAh LiPo",
    CommunicationFrequencies: "	2.4 and 5 GHz",
    Feedback: "Cameras and Lidar",
    Sensors:
      "Lidar, Magnetometer, Garmin(18x USB Gps navigator), Ultrasonic, moisture <br>Methane sensor, Hydrogen sulfide sensor",

    pics: [
      { src: "urc2017/rover18a.webp" },
      { src: "urc2017/rover18b.webp" },
      { src: "urc2017/rover18c.webp" },
      { src: "urc2017/rover18d.webp" },
      { src: "urc2017/rover18e.webp" },
    ],
    video: "https://www.youtube.com/embed/8QmRq4NSOIg?controls=0",
  },
  {
    id: 4,
    comp: "URC 2017",
    info: "University Rover Challenge 2017 was organized from 1 June 2017 to 3 June 2017. 82 teams registered and 36 of them were invited for the on-site competetion at the Mars Deset Research Station, Utah. Mars Rover Manipal went into the competition with great excitement. Our rover performed all four tasks to the best of its capabalitites.        We achieved 8th position all over the world.        Our rover was the best performer from India and Asia.        Our biggest highlight was the score of 100 out of 100 in the Science Cache Task.",
    img: "comp/rover17.jpeg",
    roverName: "ROVER 2017",
    pos: "8th Worldwide",
    MaximumSpeed: "3.75 m/s",
    Tires: "30 cm Low pressure balloon tires",
    TractiveEffort: "850 N",

    DriveSystemPower: "11.58 HP",
    MaxTraversableHeight: "0.8m",
    ChassisWeight: "1.11 Kg",
    AutonomousSystem: "Traversal and navigation capability, Image Processing",

    Wheels: "Three quarter floating axle",
    Suspension: "Modified Rocker Bogie",
    Chassis: "Ladder frame chassis",
    RoboticArm: "Articulated 6 DOF Robotic arm",
    HorizontalReach: "780 mm",
    VerticalReach: "1150 mm",
    SoilCollector: "Dedicated auger mechanism",
    CentreOfGravity: "312 mm",
    Microcontroller: "STM32, Arduino",
    SingleBoardComputer: "Raspberry Pi 3",
    MotorDrivers:
      "13A (continuous) DC motor driver for wheel motors Custom DC motor drivers for manipulator motors",
    WheelMotors: "24V DC motors",
    Batteries: "24V LiPo",
    CommunicationFrequencies: "5 GHz",
    Feedback: "Analog cameras, Encoder",
    Sensors:
      "GPS, Magnetometer, Soil moisture sensor, Temperature sensor,Methane sensor, Hydrogen sulfide sensor",

    pics: [
      { src: "urc2017/image1.webp" },
      { src: "urc2017/image2.webp" },
      { src: "urc2017/image3.webp" },
      { src: "urc2017/image4.webp" },
      { src: "urc2017/image5.jpg" },
    ],
    video: "https://www.youtube.com/embed/6Mr8owXfWoc?controls=0",
  },
  {
    id: 5,
    comp: "URC 2016",
    info: "University Rover Challenge 2016 was organized on 2nd, 3rd and 4th June 2016. This was the first time we were participating in the event. 63 teams registered for the competition and 28 were selected for the competition at Mars Desert Research Station, Utah.We stood 13th all over the world.Our rover was ranked second best in India and Asia.",
    img: "comp/rover16.webp",
    roverName: "ROVER KALAM",
    pos: "13th Worldwide",
    MaximumSpeed: "2 m/s",
    Tires: "22cm Low pressure balloon tires",
    TractiveEffort: "750 N",
    Wheels: "Semi floating axle",
    Suspension: "Modified Rocker Bogie",
    Chassis: "Space frame",
    RoboticArm: "Articulated 6 DOF Robotic arm",
    HorizontalReach: "710 mm",
    VerticalReach: "975 mm",
    SoilCollector: "Modular Scoop mechanism",
    CentreOfGravity: "312 mm",
    Microcontroller: "ATmega 328P, Arduino Uno",
    SingleBoardComputer: "Raspberry Pi",
    MotorDrivers: "Sabertooth 12A (continuous) motor drivers",
    WheelMotors: "24V DC motors",
    Batteries: "24V LiPo 12V LiPo",
    CommunicationFrequencies: "	2.4GHz, 5GHz",
    Feedback: "Digital Cameras",
    Sensors: "GPS, Temperature, Soil Moisture",

    pics: [
      { src: "urc2016/image1.webp" },
      { src: "urc2016/image2.webp" },
      { src: "urc2016/image3.jpg" },
      { src: "urc2016/image4.webp" },
      { src: "urc2016/image5.webp" },
    ],
    video: "https://www.youtube.com/embed/cG70pC12jTU?controls=0",
  },
];

export default data;