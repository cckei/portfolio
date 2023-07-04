import React, { useContext } from "react";
import { IconExternalLink } from '@tabler/icons-react';

const CreditTable = (props) => {
    const currentWork = props.currentWork;
    // console.log('props: ', props)
    return (
        <table>
            <tbody>
            {
                currentWork.client && 
                <tr>
                <td>Client</td>
                <td>{currentWork.client}</td>
                </tr>
            }
            {
                currentWork.year && 
                <tr>
                <td>year</td>
                <td>{currentWork.year}</td>
                </tr>
            }
            {
                currentWork.agency && 
                <tr>
                <td>agency</td>
                <td>{currentWork.agency}</td>
                </tr>
            }
            {
                currentWork.type && 
                <tr>
                <td>type</td>
                <td>{currentWork.type}</td>
                </tr>
            }
            {
                currentWork.url && 
                <tr>
                <td>url</td>
                <td><a href={currentWork.url} target="_blank" rel="noreferrer">visit site <span className="icon"><IconExternalLink /></span></a></td>
                </tr>
            }
            </tbody>
        </table>
    );
}

export default CreditTable;