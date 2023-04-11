import React, { useEffect, useState } from "react";
import Match from "../../components/Match";

import Load from "../../components/Load";

function Matches() {
    const [records, setRecords] = useState([])

    useEffect(() => {
        fetch("/api/matches").then(
            response => response.json()
        ).then(
            data => {
                setRecords(data)
            }
        ).catch((error) => {
            console.log(error)
            setRecords([])
        })
    }, [])

    return (
        <div>
            {(records.length === 0) ? (
                <Load />
            ) : (
                <Match records={records} />
            )}
        </div>
    )
}

export default Matches