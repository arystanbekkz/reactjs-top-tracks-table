function TableRow({ track }) {
    return (
    <tr>
        <td className="image"><img src={track.image[0]['#text']}></img></td>
        <td className="name">{track.name}</td>
        <td className="artist">{track.artist.name}</td>
        <td className="link"><a href={track.url} target="_blank" rel="noopener noreferrer">last.fm</a></td>
    </tr>
    )
    
}

export function Table({ tracks }) {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>ПЕСНЯ</th>
                    <th>АРТИСТ</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {tracks && tracks.map((track, index) => (
                    <TableRow key={index} track={track}/>
                ))}
            </tbody>
        </table>
    )
}