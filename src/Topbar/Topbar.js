import React from "react";
import './Topbar.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


export default function Topbar() {
    return (
        <div className="col-sm-12">
            <div className="card" id="topbar">
                <div className="d-flex justify-content-between">

                    <div className="d-flex justify-content-start p-1">
                        <h2>over view</h2>
                    </div>
                    <div className="d-flex justify-content-end ">
                        <Stack spacing={2} direction="row" className="p-2">
                            <Stack spacing={0} direction="row">
                                <input className="form-control" placeholder="Search"></input>
                                <Button variant="outlined">Search</Button>
                                <Button variant="outlined">Admin</Button>
                                <Button variant="contained">CARS</Button>
                            </Stack>
                            <Button variant="outlined">12-07-1998</Button>
                            <div className="p-1">
                                <NotificationsActiveIcon></NotificationsActiveIcon>
                            </div>
                            <div className="card" id="companylogo">

                            </div>
                        </Stack>

                    </div>
                </div>

            </div>
        </div>
    )
}