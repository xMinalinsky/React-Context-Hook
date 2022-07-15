import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
   const [songs,setSongs] = useState([
        {title:'No Curry No Life',id: 1},
        {title:'Silent Blaze',id: 2},
        {title:'V!vace',id: 3},
    ]);
    const [age,setage] = useState(20);

    const { v4: uuidv4 } = require('uuid');

    const addSong = (title) => {
        setSongs([...songs,{title, id : uuidv4()}]);
    }

    useEffect(() =>{
        console.log('useEffect Hook ran', songs);
    }, [songs])
    //use effect will only run if songs changes
    return ( 
        <div className='song-list'>
            <ul>
                {songs.map(song =>{
                    return (<li key = {song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={()=> setage(age+1)}>Add 1 : {age}</button>
        </div>
     );
}
 
export default SongList