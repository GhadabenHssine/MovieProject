import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { FormControl, InputLabel, Input } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 320,

    bgcolor: 'background.paper',
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
};

const BasicModal = ({ handleMovie }) => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [posterURL, setPosterurl] = React.useState("");
    const [rating, setRating] = React.useState(0);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <Button style={{ color: "white" }} onClick={handleOpen}>Add Movie</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>

                    <FormControl>
                        <InputLabel htmlFor="my-input"> <h3>Add Movie</h3></InputLabel>
                        <InputLabel htmlFor="my-input"> </InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />

                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input"> </InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setTitle(e.target.value)} />
                        <InputLabel htmlFor="my-input">title</InputLabel>

                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="my-input"> </InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setDescription(e.target.value)} />
                        <InputLabel htmlFor="my-input" >description</InputLabel>

                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input"> </InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setPosterurl(e.target.value)} />
                        <InputLabel htmlFor="my-input" >posterURL</InputLabel>

                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input"> </InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setRating(e.target.value)} />
                        <InputLabel htmlFor="my-input" > rating</InputLabel>

                    </FormControl>
                    <FormControl>



                    </FormControl>
                    <Button style={{ backgroundColor: "black", color: "white", marginLeft: "30px", marginTop: "20px" }} onClick={() => { handleMovie({ id: Math.random(), title, description, posterURL, rating }); handleClose() }}>Save Movie</Button>
                </Box>


            </Modal>

        </div>

    );
}

export default BasicModal
