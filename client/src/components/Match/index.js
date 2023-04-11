import React from "react";
import './styles.css'

function Match(props) {
    const { records } = props
    return (
        <div className="match">            
            <h2>{`Rodada ${records[0].matchday}`}</h2>
            <table>
                <tbody>
                {records.map((record, i) => (
                    <tr key={i}>
                        <td><img src={record.homeTeam.crest} width={30} alt={record.homeTeam.name} /></td>
                        <td className="team-name"><b>{record.homeTeam.name}</b></td>
                        <td className="result">{record.score.fullTime.home ?? 0}</td>
                        <td>x</td>
                        <td className="result">{record.score.fullTime.away ?? 0}</td>
                        <td className="team-name"><b>{record.awayTeam.name}</b></td>
                        <td><img src={record.awayTeam.crest} width={30} alt={record.awayTeam.name} /></td>
                    </tr>
                ))}
                </tbody>
            </table>

            <p>{`${records.length} jogos da ${records[0].matchday}º rodada`}</p>
        </div>
    )
}

export default Match