/*
    Created by Craig Nelstead 2023
*/

//Interface module
const GUI = (function(doc) {
    const roomCat = doc.getElementById('roomCat');
    const roomId = doc.getElementById('roomID');
    const iframe = doc.getElementById('mapFrame');
    const adaCheckBox = doc.getElementById('adaCheck');
    const imgIcon = doc.getElementById('adaIcon');
    const buildingName = doc.getElementById('buildingLocation');

    //Gets kiosk location from buildingName's data-location property in HTML
    function getKioskLocation() {
        return buildingName.dataset.location;
    }

    //Get location and update header with building name
    function updateWelcomeMsg() {
        //buildingName.textContent += KIOSKLOCATION.building;
    }

    //Assigns listener to changing room name
    function listenToRoom() {
        roomId.addEventListener('change', changeFrame.update);
        adaCheckBox.addEventListener('change', changeFrame.update);
        imgIcon.addEventListener('change', imgToggle);
    }

    //Assigns listener to category list
    function listenToCat() {
        roomCat.addEventListener('change', updateRoomList);
    }

    //Toggles ADA check when icon is pressed
    function imgToggle() {
        adaCheckBox.checked = !adaCheckBox.checked;
        changeFrame.update();
    }

    //Clears room list then repopulates it based off the room category selected
    function updateRoomList() {

    }

    //Filter room array to see 
    function updateCurrentRoom() {
        
    }

    listenToRoom();
    listenToCat();

    return {
        roomCat,
        roomId,
        iframe,
        adaCheckBox,
        buildingName,
    }
});

//Location creator
const Location = (place, cat, coord, lvl, bld) => {
    let name = place;
    let category = cat;
    let coordinates = coord;
    let level = lvl;
    let building = bld;

    return {
        name,
        category,
        coordinates,
        level,
        building,
    }
}

//Location values
const roomValues = (function() {
    //Array of rooms and array of kiosks
    let roomList = [];
    let kioskList = [];

    //Create an object and add it to array
    function addToArray(arr, loc, cat, coord, lvl) {
        arr.push(Location(loc, cat, coord, lvl));
    }

    //(Array, 'Name', 'Category', 'Coordinates', 'Level', *optional*'Building name')

    //ROOM LOCATIONS
    //Classrooms
    addToArray(roomList, 'RH-036', 'Classrooms', '40.577419,-105.084122', '-1');
    addToArray(roomList, 'RH-038', 'Classrooms', '40.577381,-105.084526', '-1');
    addToArray(roomList, 'RH-039', 'Classrooms', '40.577419,-105.08461', '-1');
    addToArray(roomList, 'RH-139', 'Classrooms', '40.577843,-105.084038', '1');
    addToArray(roomList, 'RH-165', 'Classrooms', '40.577419,-105.084152', '1');
    addToArray(roomList, 'RH-167', 'Classrooms', '40.577366,-105.084236', '1');
    addToArray(roomList, 'RH-170', 'Classrooms', '40.577366,-105.084236', '1');
    addToArray(roomList, 'RH-172', 'Classrooms', '40.577366,-105.084236', '1');
    addToArray(roomList, 'RW-101', 'Classrooms', '40.57785589197272,-105.08491113782289', '1');
    addToArray(roomList, 'RW-103', 'Classrooms', '40.577854,-105.084991', '1');
    addToArray(roomList, 'RW-105', 'Classrooms', '40.57785,-105.085136', '1');
    addToArray(roomList, 'RW-107', 'Classrooms', '40.57785,-105.085312', '1');
    addToArray(roomList, 'RW-116 Bohemian Auditorium', 'Classrooms', '40.577686,-105.085648', '1');
    addToArray(roomList, 'RW-118 Mosaic Classroom', 'Classrooms', '40.57785,-105.085632', '1');
    addToArray(roomList, 'RW-207', 'Classrooms', '40.577858,-105.084991', '2');
    addToArray(roomList, 'RW-209', 'Classrooms', '40.577835,-105.085136', '2');
    addToArray(roomList, 'RW-213', 'Classrooms', '40.577835,-105.085327', '2');
    addToArray(roomList, 'RW-222', 'Classrooms', '40.577854,-105.085625', '2');

    //Conference Rooms
    addToArray(roomList, 'RH-119', 'ConferenceRooms', '40.577831,-105.084694', '1');
    addToArray(roomList, 'RH-133', 'ConferenceRooms', '40.577728,-105.084282', '1');
    addToArray(roomList, 'RW-208', 'ConferenceRooms', '40.577736,-105.085258', '2');
    addToArray(roomList, 'RW-211', 'ConferenceRooms', '40.577831,-105.085236', '2');
    addToArray(roomList, 'RW-220 GLC', 'ConferenceRooms', '40.577728,-105.085648', '2');

    //Study Rooms
    addToArray(roomList, 'RH-037 Computer Lab', 'StudyRooms', '40.57737,-105.08429', '-1');
    addToArray(roomList, 'RH-037A', 'StudyRooms', '40.57740363230701,-105.0842023640847', '-1');
    addToArray(roomList, 'RH-037B', 'StudyRooms', '40.577404,-105.084183', '-1');
    addToArray(roomList, 'RH-037C', 'StudyRooms', '40.577374,-105.084152', '-1');
    addToArray(roomList, 'RW-003 Study Room', 'StudyRooms', '40.57770007062962,-105.08509621024025', '-1');
    addToArray(roomList, 'RW-004 Sonny Lubick Lounge', 'StudyRooms', '40.577705,-105.084969', '-1');
    addToArray(roomList, 'RW-008 Study Space', 'StudyRooms', '40.577702,-105.085281', '-1');
    addToArray(roomList, 'RW-101A', 'StudyRooms', '40.577763,-105.084892', '1');
    addToArray(roomList, 'RW-200 Student Forum', 'StudyRooms', '40.577702,-105.084824', '2');
    addToArray(roomList, 'RW-203 Study Room', 'StudyRooms', '40.577793,-105.084869', '2');
    addToArray(roomList, 'RW-205 Study Room', 'StudyRooms', '40.577793,-105.084915', '2');

    //Academic Programs
    addToArray(roomList, 'Accounting Office', 'AcademicPrograms', '40.577736,-105.084564', '2');
    addToArray(roomList, 'CIS Office', 'AcademicPrograms', '40.57761,-105.084015', '1');
    addToArray(roomList, 'Finance and Real Estate', 'AcademicPrograms', '40.577736,-105.084557', '3');
    addToArray(roomList, 'Management Office', 'AcademicPrograms', '40.577732,-105.084129', '2');
    addToArray(roomList, 'Marketing Office', 'AcademicPrograms', '40.577564,-105.084641', '1');
    addToArray(roomList, 'Music Business Program', 'AcademicPrograms', '40.577667,-105.085526', '2');
    addToArray(roomList, 'Graduate Advising', 'AcademicPrograms', '40.57856,-105.083908', '2');
    addToArray(roomList, 'Undergraduate Advising', 'AcademicPrograms', '40.577705,-105.085373', '1');

    //KIOSK LOCATIONS
    //RW lobby first floor
    addToArray(kioskList, 'RW-lobby', 'Kiosks', '40.577713,-105.084938', '1', 'Rockwell West');
    //RW hallway outside UGA
    addToArray(kioskList, 'RW-1-hallway-central', 'Kiosks', '40.577751994753356,-105.08525043726098', '1', 'Rockwell West');
    //RW hallway outside 107
    addToArray(kioskList, 'RW-1-hallway-107', 'Kiosks', '40.57776523656537,-105.08538722992172', '1', 'Rockwell West');
    //RW hallway between 116 & 118
    addToArray(kioskList, 'RW-1-hallway-west', 'Kiosks', '40.577768292367665,-105.08558370173003', '1', 'Rockwell West');
    //RW 2nd floor above lobby
    addToArray(kioskList, 'RW-2-lobby', 'Kiosks', '40.57774842964983,-105.08512035012215', '2', 'Rockwell West');
    //RW 2nd floor outside 211
    addToArray(kioskList, 'RW-2-hallway-211', 'Kiosks', '40.577760121778965,-105.08524840206144', '2', 'Rockwell West');
    //RW 2nd floor outside 211
    addToArray(kioskList, 'RW-2-hallway-213', 'Kiosks', '40.57775349857053,-105.08538922233258', '2'), 'Rockwell West';
    //RW 2nd floor between 220 & 222
    addToArray(kioskList, 'RW-2-hallway-213', 'Kiosks', '40.57775859157513,-105.08555354412596', '2', 'Rockwell West');
    //RH south lobby
    addToArray(kioskList, 'RH-south-lobby', 'Kiosks', '40.57739261243884,-105.08436376564659', '1', 'Rockwell Hall');
    //RH north lobby
    addToArray(kioskList, 'RH-north-lobby', 'Kiosks', '40.57772618468309,-105.08436207030066', '1', 'Rockwell Hall');
    
    return {
        roomList,
        kioskList,
    }
});

//Determine display
const changeFrame = (function() {
    let ada = GUI.adaCheckBox.value;
    //let locAcoord = ...
    //let locAlvl = ...
    //let locBcoord = ...
    //let locBlvl = ...

    let baseSrc = `https://map.concept3d.com/?id=1977#!ct/0?s/?d/type:walking;
        ada:${ada};from:${locAcoord},${locAlvl};to${locBcoord},${locBlvl};
        startName:Start%20Location;endName:End%20Location;?lvl/${locBlvl}`;

    //GUI.iframe.src = baseSrc;
});