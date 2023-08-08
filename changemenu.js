/*
    Created by Craig Nelstead 2023

    This program is designed to work based on a match between the room name
    and the end of a custom URL hosted by tinyurl. Any discrepancy between
    the room name in the array of rooms and the URL will result in a broken
    link.
*/

//Global variables:
let roomCat = document.getElementById('roomCat');
let roomID = document.getElementById('roomID');
let iframe = document.getElementById('mapFrame');

listenToBtn();
listenToCat();

defaultPopulate();

//Default list of rooms is classrooms
function defaultPopulate() {
    clearRoomList();
    catClassrooms();
}

//Assigns listener to map button
function listenToBtn() {
    let btn = document.getElementById('btnDirections');
    btn.addEventListener('click', updateMap);
}

//Assigns listener to category list
function listenToCat() {
    roomCat.addEventListener('change', updateRoomList);
}

//Clears room list then repopulates it based off the room category selected
function updateRoomList() {
    //Clear list
    clearRoomList();

    //Category lists to add
    switch (roomCat.value) {
        // case 'All Rooms':
        //     catClassrooms();
        //     catConferenceRooms();
        //     catStudyRooms();
        //     catAcademicPrograms();
        //     catStudentResources();
        //     catOperations();
        //     break;
        case 'Classrooms':
            catClassrooms();
            break;
        case 'Conference Rooms':
            catConferenceRooms();
            break;
        case 'Study Rooms':
            catStudyRooms();
            break;
        case 'Academic Programs':
            catAcademicPrograms();
            break;
        // case 'Student Resources':
        //     catStudentResources();
        //     break;
        // case 'Operations':
        //     catOperations();
        //     break;
    }
}

function catClassrooms() {
    let roomList = ['RH-036','RH-038','RH-039',
                    'RH-139','RH-165','RH-167','RH-170','RH-172',
                    'RW-101','RW-103','RW-105','RW-107',
                    'RW-116-Bohemian-Auditorium','RW-118-Mosaic-Classroom',
                    'RW-207','RW-209','RW-213','RW-222'];

    populateOptions(roomList);
}

function catConferenceRooms() {
    let roomList = ['RH-119','RH-133','RW-208','RW-211',
                    'RW-220-GLC'];

    populateOptions(roomList);
}

function catStudyRooms() {
    let roomList = ['RH-037-Computer-Lab','RH-037A','RH-037B','RH-037C',
                    'RW-004-Sonny-Lubick-Lounge','RW-101A',
                    'RW-200-Student-Forum','RW-203-Study-Room',
                    'RW-205-Study-Room','RW-Lobby'];

    populateOptions(roomList);
}

function catAcademicPrograms() {
    let roomList = ['Accounting-Office','CIS-Office',
                    'Finance-and-Real-Estate','Management-Office',
                    'Marketing-Office','Music-Business-Program',
                    'Graduate-Advising','Undergraduate-Advising',
                    'Graduate-Program-Office'];

    populateOptions(roomList);
}

function catStudentResources() {
    let roomList = ['IT Help Desk','Accounting Tutoring Lab',
                    'The Bean Counter - Coffee Shop','Career Management Center'];

    populateOptions(roomList);
}

function catOperations() {
    let roomList = ['Dean\'s-Office','Development','Human-Resources',
                    'Marketing-and-Communications'];

    populateOptions(roomList);
}

//Go through array and add each room to the roomID dropdown
function populateOptions(catList) {
    for (let i = 0; i < catList.length; i++) {
        let newRoom = document.createElement('option');
        newRoom.text = catList[i];
        roomID.add(newRoom,roomID[0]);
    }
}

//Clear room list for blank slate before adding to list
function clearRoomList() {
    while (roomID.options.length >0) {
        roomID.remove(0);
    }
}

//Change the iframe source to match the roomID selections
function updateMap() {
    let newVal = roomID.value.toString();

    iframe.src = 'https://tinyurl.com/RWto' + newVal;

    //This line is here as a test to fix rooms that are not loading
    iframe.src += '';
}