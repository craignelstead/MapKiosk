/*
    Created by Craig Nelstead 2023

    This works by building the URL for the concept3d map based on the 
    determined starting point (the kiosk, as set in the HTML page) and the user
    input (destination and ADA checkbox)

    The location of the wayfinding kiosk can be adjusted by changing the 
    data-location attribute value of the buildingLocation h2 element in the 
    corresponding HTML page.

    A new location can be added in the roomValues module by following the pre-
    existing syntax.
*/

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
//IF ADDING A NEW LOCATION, ADD IT TO THE MODULE BELOW IN PROPER LOCATION
const roomValues = (function() {
    //Array of rooms and array of kiosks
    let roomList = [];
    let kioskList = [];

    //Create an object and add it to array
    function addToArray(arr, loc, cat, coord, lvl, bld) {
        arr.push(Location(loc, cat, coord, lvl, bld));
    }

    //NEW LOCATION EXAMPLE:
    //addToArray(*ROOM OR KIOSK ARRAY*, '*ROOM NAME*', '*ROOM CATEGORY*', '*COORDINATES*', '*FLOOR LEVEL*');
    //(Array, 'Name', 'Category', 'Coordinates', 'Level', *optional*'Building name')

    //ROOM LOCATIONS
    //Classrooms
    addToArray(roomList, 'RH-036', 'Classrooms', '40.577419,-105.084122', '-1');
    addToArray(roomList, 'RH-038', 'Classrooms', '40.577381,-105.084526', '-1');
    addToArray(roomList, 'RH-039', 'Classrooms', '40.577419,-105.08461', '-1');
    addToArray(roomList, 'RH-139', 'Classrooms', '40.577843,-105.084038', '1');
    addToArray(roomList, 'RH-165', 'Classrooms', '40.577419,-105.084152', '1');
    addToArray(roomList, 'RH-167', 'Classrooms', '40.577366,-105.084236', '1');
    addToArray(roomList, 'RH-170', 'Classrooms', '40.57737,-105.084488', '1');
    addToArray(roomList, 'RH-172', 'Classrooms', '40.577415,-105.084602', '1');
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
    addToArray(roomList, 'RH-119', 'Conference Rooms', '40.577831,-105.084694', '1');
    addToArray(roomList, 'RH-133', 'Conference Rooms', '40.577728,-105.084282', '1');
    addToArray(roomList, 'RW-208', 'Conference Rooms', '40.577736,-105.085258', '2');
    addToArray(roomList, 'RW-211', 'Conference Rooms', '40.577831,-105.085236', '2');
    addToArray(roomList, 'RW-220 GLC', 'Conference Rooms', '40.577728,-105.085648', '2');

    //Study Rooms
    addToArray(roomList, 'RH-037 Computer Lab', 'Study Rooms', '40.57737,-105.08429', '-1');
    addToArray(roomList, 'RH-037A', 'Study Rooms', '40.57740363230701,-105.0842023640847', '-1');
    addToArray(roomList, 'RH-037B', 'Study Rooms', '40.577404,-105.084183', '-1');
    addToArray(roomList, 'RH-037C', 'Study Rooms', '40.577374,-105.084152', '-1');
    addToArray(roomList, 'RW-003 Study Room', 'Study Rooms', '40.57770007062962,-105.08509621024025', '-1');
    addToArray(roomList, 'RW-004 Sonny Lubick Lounge', 'Study Rooms', '40.577705,-105.084969', '-1');
    addToArray(roomList, 'Cloud 9 Lounge', 'Study Rooms', '40.577702,-105.085281', '-1');
    addToArray(roomList, 'RW-101A', 'Study Rooms', '40.577763,-105.084892', '1');
    addToArray(roomList, 'RW-200 Student Forum', 'Study Rooms', '40.577702,-105.084824', '2');
    addToArray(roomList, 'RW-203 Study Room', 'Study Rooms', '40.577793,-105.084869', '2');
    addToArray(roomList, 'RW-205 Study Room', 'Study Rooms', '40.577793,-105.084915', '2');

    //Academic Support
    addToArray(roomList, 'Accounting Office', 'Academic Support', '40.577736,-105.084564', '2');
    addToArray(roomList, 'CIS Office', 'Academic Support', '40.57761,-105.084015', '1');
    addToArray(roomList, 'Finance and Real Estate', 'Academic Support', '40.577736,-105.084557', '3');
    addToArray(roomList, 'Management Office', 'Academic Support', '40.577732,-105.084129', '2');
    addToArray(roomList, 'Marketing Office', 'Academic Support', '40.577564,-105.084641', '1');
    addToArray(roomList, 'Music Business Program', 'Academic Support', '40.577667,-105.085526', '2');
    addToArray(roomList, 'Graduate Advising', 'Academic Support', '40.57856,-105.083908', '2');
    addToArray(roomList, 'Undergraduate Advising', 'Academic Support', '40.577705,-105.085373', '1');
    addToArray(roomList, 'Career Management Center', 'Academic Support', '40.57771053664206,-105.08519577950727', '2'); //
    addToArray(roomList, 'COB Front Help Desk', 'Academic Support', '40.5777632127963,-105.08433377523691', '1'); //
    addToArray(roomList, 'IT Student Help Desk', 'Academic Support', '40.57733281735142,-105.08440351267113', '-1'); //
    //

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
    addToArray(kioskList, 'RW-2-hallway-west', 'Kiosks', '40.57775859157513,-105.08555354412596', '2', 'Rockwell West');
    //RH south lobby
    addToArray(kioskList, 'RH-south-lobby', 'Kiosks', '40.57739261243884,-105.08436376564659', '1', 'Rockwell Hall');
    //RH north lobby
    addToArray(kioskList, 'RH-north-lobby', 'Kiosks', '40.57772618468309,-105.08436207030066', '1', 'Rockwell Hall');

    return {
        roomList,
        kioskList,
    }
})();

//Interface module
const GUI = (function(doc) {
    const roomCat = doc.getElementById('roomCat');
    const roomId = doc.getElementById('roomID');
    const iframe = doc.getElementById('mapFrame');
    const adaCheckBox = doc.getElementById('adaCheck');
    const imgIcon = doc.getElementById('adaIcon');
    const buildingName = doc.getElementById('buildingLocation');

    const portrait = window.matchMedia('(orientation: portrait)').matches;

    //Removes touch notice on doc touch
    doc.addEventListener('touchstart', function(event) {
        const touchNotice = doc.getElementById('touchContainer');
        if (doc.contains(touchNotice)) {
            touchNotice.classList.toggle('fade-out');
            setTimeout(function() {
                touchNotice.remove();
            }, 500);
        }
    });

    //Removes touch notice on doc click
    doc.addEventListener('click', function(event) {
        const touchNotice = doc.getElementById('touchContainer');
        if (doc.contains(touchNotice)) {
            touchNotice.classList.toggle('fade-out');
            setTimeout(function() {
                touchNotice.remove();
            }, 500);
        }
    });
    
    //Adds relevant class to mapFrame depending on whether or not portrait 
    //Orientation is detected
    function changeOrientation(portraitMode) {
        if (portraitMode === true) {
            iframe.classList.add('portrait');
        }
        else {
            iframe.classList.add('landscape');
        }
        //console.log(portraitMode);
    }

    changeOrientation(portrait);

    //Gets kiosk location from buildingName's data-location property in HTML
    function getKioskLocation() {
        let kioskId = buildingName.dataset.location;
        //Filters array of kiosks to match dataset
        let kioskLocation = roomValues.kioskList.filter(function (el) {
            return el.name == kioskId;
        });
        
        return kioskLocation[0];
    }

    //Get location and update header with building name
    function updateWelcomeMsg() {
        let currentBuilding = getKioskLocation();
        buildingName.textContent += currentBuilding.building +'.';
    }

    //Assigns listener to changing room name
    function listenToRoom() {
        roomId.addEventListener('change', updateFrame);
        adaCheckBox.addEventListener('change', updateFrame);
        imgIcon.addEventListener('click', imgToggle);
    }

    //Assigns listener to category list
    function listenToCat() {
        roomCat.addEventListener('change', populateRoomList);
    }

    //Toggles ADA check when icon is pressed
    function imgToggle() {
        GUI.adaCheckBox.checked = !GUI.adaCheckBox.checked;
        updateFrame();
    }

    //Clears room list then repopulates it based off the room category selected
    function populateRoomList() {
        //Clear room list
        while (roomId.options.length > 0) {
            roomId.remove(0);
        }

        //Filter list of rooms to match category
        const listOfRooms = roomValues.roomList.filter(function (el) {
            return el.category == roomCat.value;
        });

        //Add blank option
        let blank = doc.createElement('option');
        blank.text = '';
        roomId.add(blank,0);

        //Add each room from category to room drop down
        for (let i=0; i<listOfRooms.length; i++) {
            let newRoom = doc.createElement('option');
            newRoom.text = listOfRooms[i].name;
            roomId.add(newRoom,roomId[0]);
        }
    }

    //Filter room array to get currently selected option
    function getCurrentRoom() {
        //Filters array of locations to match roomID value
        let destinationLocation = roomValues.roomList.filter(function (el) {
            return el.name == roomId.value;
        });
        
        return destinationLocation[0];
    }

    //Generate a new URL and update the iframe's src
    function updateFrame() {
        let ada = getAdaStatus();
        let locAname = GUI.getKioskLocation().name;
        let locAcoord = GUI.getKioskLocation().coordinates;
        let locAlvl = GUI.getKioskLocation().level;

        //If ADA button is pressed while no Room ID is selected, toggle ADA 
        //with current URL
        if (roomId.value == '') {
            let currentSrc = iframe.src;

            //Replace either true or false ADA status in URL to match ADA button
            let newSrc = currentSrc
                .replace('true', getAdaStatus())
                .replace('false', getAdaStatus());
        
            iframe.src = newSrc;
        }
        else {
            let locBname = getCurrentRoom().name;
            let locBcoord = getCurrentRoom().coordinates;
            let locBlvl = getCurrentRoom().level;
            let baseSrc = `https://map.concept3d.com/?id=1977#!ce/66741?ct/0?s/?d/type:walking;ada:${ada};from:${locAcoord},${locAlvl};to:${locBcoord},${locBlvl};Start%20Location:Start%20Location;End%20Location:End%20Location?lvl/${locBlvl}`;
            //Above is new URL format, below is old URL format
            //let baseSrc = `https://map.concept3d.com/?id=1977#!ct/0?s/?d/type:walking;ada:${ada};from:${locAcoord},${locAlvl};to:${locBcoord},${locBlvl};startName:Start%20Location;endName:End%20Location;?lvl/${locBlvl}`;
            console.log(baseSrc);
            iframe.src = baseSrc;

            //Send data for tracking
            if (locAname === 'RW-1-hallway-107') tracker.submitNetlifyForm();
        }
    }

    function getAdaStatus() {
        return adaCheckBox.checked;
    }

    //Generate default iframe source on page load (based on kiosk location)
    function defaultFrame() {
        let ada = getAdaStatus();
        let locA = getKioskLocation();
        let locAcoord = locA.coordinates;
        let locAlvl = locA.level;
        let locB;

        //Return desired kiosk location for default iframe src
        function filterKiosk(destination) {
            //console.log(destination);
            return roomValues.kioskList.filter(function (el) {
                return el.name == destination;
            });
        }

        //Based off kiosk location, set default Marker B to another kiosk
        //on the same floor of the same building
        switch (locA.name) {
            case 'RW-lobby':
            case 'RW-1-hallway-central':
                locB = filterKiosk('RW-1-hallway-west');
                break;
            case 'RW-1-hallway-107':
            case 'RW-1-hallway-west':
                locB = filterKiosk('RW-lobby');
                break;
            case 'RW-2-lobby':
            case 'RW-2-hallway-211':
                locB = filterKiosk('RW-2-hallway-west');
                break;
            case 'RW-2-hallway-213':
            case 'RW-2-hallway-west':
                locB = filterKiosk('RW-2-lobby');
                break;
            case 'RH-south-lobby':
                locB = filterKiosk('RH-north-lobby');
                break;
            case 'RH-north-lobby':
                locB = filterKiosk('RH-south-lobby');
                break;
        }

        let locBcoord = locB[0].coordinates;
        let locBlvl = locB[0].level;

        let defaultSrc = `https://map.concept3d.com/?id=1977#!ce/66741?ct/0?s/?d/type:walking;ada:${ada};from:${locAcoord},${locAlvl};to:${locBcoord},${locBlvl};Start Location:Start%20Location;End Location:End%20Location`;

        iframe.src = defaultSrc;
    }

    function getForm () {
        return doc.getElementById('navbuttons');
    }

    updateWelcomeMsg();
    populateRoomList();
    defaultFrame();
    listenToRoom();
    listenToCat();

    return {
        roomCat,
        roomId,
        iframe,
        adaCheckBox,
        buildingName,
        getKioskLocation,
        updateWelcomeMsg,
        getForm,
    }
})(document);

//This will export data for tracking using Netlify's built in form functions
const tracker = (function() {

    //Serialize the form data
    const serializeFormData = (formData) => {
        return new URLSearchParams(formData).toString();
    }

    async function submitNetlifyForm () {
        const form = GUI.getForm();
        const locA = document.getElementById('locA');
        locA.value = GUI.getKioskLocation().name;
        const locB = document.getElementById('roomID');
        const formData = new FormData(form);
        const serializedData = serializeFormData(formData);

        if (!locB.value) return;

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                body: serializedData
            });

            if (response.ok) {
                console.log('Data successfully submitted');
            } else {
                console.error('Data submission error');
            }
        } catch (error) {
            console.error('Data submission error', error);
        }
    }
    
    return {
        submitNetlifyForm,
    }
})();