import React, {useState, useEffect} from "react"
import './index.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome, faClipboardList, faStream, faEllipsisH} from "@fortawesome/free-solid-svg-icons"
import Playlist from "../../models/Playlist"
import makeId from "../../utils"
function SideBar(props) {
    const [playlists,
        setPlaylists] = useState(props.playlists ?? [])

    const [libraries,
        setLibraries] = useState(props.libraries ?? [])

    useEffect(() => {
        if (playlists.length === 0) 
            generateRandomPlaylists()
        if (libraries.length === 0) 
            generateRandomLibraries()
    })

    function generateRandomPlaylists() {
        let generatedPlaylists = []
        for (let index = 0; index < 20; index++) 
            generatedPlaylists.push(new Playlist(makeId(10), makeId(255), makeId(10)))
        setPlaylists(generatedPlaylists)
    }
    function generateRandomLibraries() {
        let generatedLibraries = [
            'Feito para você',
            'Tocados recentemente',
            'Músicas Curtidas',
            'Álbuns',
            'Artistas',
            'Podcasts'
        ]
        setLibraries(generatedLibraries)
    }
    function openNav() {
        let sidebar = document.querySelector('.sidebar')
        let menuBtn = document.querySelector('.menu-btn')
        sidebar.style.width = "250px";
        menuBtn.style.display = 'none';
    }
    function closeNav() {
        let sidebar = document.querySelector('.sidebar')
        let menuBtn = document.querySelector('.menu-btn')
        sidebar.style.width = "0px";
        menuBtn.style.display = 'block';
    }
    return (
        <>
            <button className="menu-btn btn-transparency" onClick={openNav}>&#9776;</button>
            <div className="sidebar">
                <button className="closebtn btn-transparency" onClick={closeNav}>&times;</button>
                <button className="btn-transparency options"><FontAwesomeIcon icon={faEllipsisH}/></button>
                <div className="buttons">
                    <button className="btn-transparency btn-sidebar"><FontAwesomeIcon className="icon-new-playlist" icon={faHome}/>
                        Início</button>
                    <button className="btn-transparency btn-sidebar"><FontAwesomeIcon className="icon-new-playlist" icon={faClipboardList}/>
                        Navegar</button>
                    <button className="btn-transparency btn-sidebar"><FontAwesomeIcon className="icon-new-playlist" icon={faStream}/>
                        Rádio</button>
                </div>
                <div className="libraries">
                    <p className="subtitle">SUA BIBLIOTECA</p>
                    {libraries.map(librarie => (
                        <div>
                            <button className="btn-transparency librarie">
                                {librarie}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="playlists">
                    <p className="subtitle">PLAYLISTS</p>
                    {playlists.map(playlist => (
                        <div>
                            <button className="btn-transparency playlist">{playlist.name}</button>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default SideBar